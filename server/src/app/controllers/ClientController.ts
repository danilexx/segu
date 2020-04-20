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
import { Client } from "../models/Client";

interface ClientBody {
  email: string;
  name: string;
  birth: string;
  gender: "male" | "female";
  profissionalActivity: string;
  income: string;
  dependents: string;
  about: string[];
  pastInsegurances: string[];
  currentInsegurances: string[];
  healthIssues: string[];
}

class ClientController {
  async show(req: AuthenticatedRequest<{ id: string }>, res: Response) {
    const client = await Client.findOne(req.params.id);
    if (!client) {
      return res.status(404).json({ error: "Cliente não encontrado" });
    }
    return res.json(client);
  }

  async store(req: ValidatedRequest<any, ClientBody>, res: Response) {
    const data = req.body;
    if (data.birth.split("/").length < 3) {
      return res.status(404).json({
        error: "Nascimento malformado",
      });
    }
    const birthArray = data.birth.split("/");
    const age = new Date().getFullYear() - Number(birthArray[2]);
    const client = Client.create({
      ...data,
      age,
      healthIssues: data.healthIssues.join(","),
      about: data.about.join(","),
      pastInsegurances: data.pastInsegurances.join(","),
      currentInsegurances: data.pastInsegurances.join(","),
    });
    await client.save();
    return res.json(client);
  }

  async destroy(req: AuthenticatedRequest<{ id: string }>, res: Response) {
    const { user } = req;
    await user.remove();
    return res.json({ ok: true });
  }
}

export default new ClientController();
