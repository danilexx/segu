import { Request, Response } from "express";
import { ValidatedRequest } from "../schemas";
import { User } from "../models/User";

class SessionController {
  async store(req: ValidatedRequest, res: Response) {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email },
      relations: ["icon"],
    });
    if (!user) {
      return res.status(401).json({
        error: "Usuario não encontrado",
      });
    }
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: "Senha não bate" });
    }
    const { id, name } = user;
    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: user.generateToken(),
    });
  }
}

export default new SessionController();
