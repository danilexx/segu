import { Request, Response } from "express";
import Axios from "axios";
import { User } from "../models/User";
import { Client } from "../models/Client";

class ReunionController {
  async store(req: Request, res: Response) {
    const {
      body: { corrector_id, client_id },
    } = req;
    const user = await User.findOne(corrector_id);
    const client = await Client.findOne(client_id);
    user.clients.push(client);
    await user.save();
    return res.json({ ok: true });
  }
}

export default new ReunionController();
