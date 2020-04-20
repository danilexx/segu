import { Request, Response } from "express";
import { uploader } from "../middlewares/cloudnary";
import { File } from "../models/File";

class FileController {
  async store(req: Request, res: Response) {
    const result = await uploader.upload(req.body.image);
    const image = result.url;
    const dbFile = File.create({
      url: image,
    });
    await dbFile.save();
    return res.status(200).json(dbFile);
  }
}

export default new FileController();
