import { Request, Response } from "express";
import axios from "axios";
import gridKeys from "../../config/gridKeys";
import codes from "../../config/codes";
import { User } from "../models/User";
import {
  ValidatedRequest,
  AuthenticatedRequest,
  AuthenticatedAndValidatedRequest,
} from "../schemas";
import { File } from "../models/File";

interface UserBody {
  email: string;
  name: string;
  zap: string;
  password: string;
  cnpj: string;
  cpf: string;
  description: string;
  insurances: string[];
  iconId?: number;
}

type UserPutBody = Partial<
  UserBody & {
    newPassword: string;
    confirmNewPassword: string;
  }
>;
type UserStoreBody = UserBody;

class UserController {
  async show(req: AuthenticatedRequest<{ id: string }>, res: Response) {
    const { user } = req;
    return res.json(user);
  }

  async store(req: ValidatedRequest<any, UserStoreBody>, res: Response) {
    const data = req.body;
    const preExistingUser = await User.findOne({
      where: { email: data.email },
    });
    if (preExistingUser) {
      return res.status(400).json({ error: "Usuario ja criado" });
    }
    const cnpj = data.cnpj.replace(/,|\.|-/g, "").replace("/", "");
    const cpf = data.cpf.replace(/,|\.|-/g, "").replace("/", "");
    const zap = data.zap.replace(/(,.-)/g, "");
    try {
      const response = await axios.post(
        `HTTPS://gateway.gr1d.io/sandbox/serpro/consulta-cpf/v1/cpf/${cpf}`,
        {
          headers: {
            "X-Api-Key": gridKeys.cpf,
          },
        }
      );
      if (response.data.situacao.codigo !== "0") {
        return res.status(404).json({
          error: "cpf invalido",
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "GRID ERROR",
      });
    }
    try {
      const {
        data: {
          cnae_principal: { codigo },
        },
      } = await axios.get(
        `https://gateway.gr1d.io/sandbox/serpro/consulta-cnpj/v1/cnpj/${cnpj}`,
        {
          headers: {
            "X-Api-Key": gridKeys.cnpj,
          },
        }
      );
      if (codigo !== codes.cnae) {
        return res.status(404).json({
          error: "Seu CNPJ não é valido para um corretor de seguros",
        });
      }
    } catch (err) {
      return res.status(500).json({ error: "GRID ERROR" });
      // console.error(err);
    }

    const user = User.create({
      ...data,
      zap,
      cnpj,
      insurances: data.insurances.join(","),
    });
    user.password = data.password;
    if (data.iconId) {
      const icon = await File.findOne(data.iconId);
      if (icon) {
        user.icon = icon;
      }
    }

    await User.save(user);
    return res.json(user);
  }

  async update(
    req: AuthenticatedAndValidatedRequest<any, UserPutBody>,
    res: Response
  ) {
    const { user } = req;
    const { password, confirmNewPassword, newPassword, ...data } = req.body;
    const cnpj = data.cnpj.replace(/[,.-]/g, "");
    const zap = data.zap.replace(/(,.-)/g, "");
    User.merge(user, {
      ...data,
      zap,
      cnpj,
      insurances: data.insurances.join(","),
    });
    if (data.iconId) {
      const icon = await File.findOne(data.iconId);
      if (icon) {
        user.icon = icon;
        await user.save();
      }
    }
    if (password && confirmNewPassword && newPassword) {
      const isValidPassword = await user.checkPassword(password);
      if (newPassword !== confirmNewPassword) {
        return res.status(404).json({
          error: "Nova senha e sua confirmação não batem",
        });
      }
      if (!isValidPassword) {
        return res.status(404).json({
          error: "Senha provida não é valida",
        });
      }
      user.password = newPassword;
    }
    if (user.icon && data.iconId === null) {
      user.icon = null;
    }

    await user.save();
    return res.json(user);
  }

  async destroy(req: AuthenticatedRequest<{ id: string }>, res: Response) {
    const { user } = req;
    await user.remove();
    return res.json({ ok: true });
  }
}

export default new UserController();
