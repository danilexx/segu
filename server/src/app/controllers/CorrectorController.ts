import { Request, Response } from "express";
import { User } from "../models/User";
import { ILike } from "../../utils/ExtraOperators";

class CorrectorController {
  async index(req: Request, res: Response) {
    const { searchParams = "", page = 1, itemsPerPage } = req.query;
    const itemsPage = itemsPerPage || "9";
    const offset = (Number(page) - 1) * Number(itemsPage);
    const [items, count] = await User.findAndCount({
      skip: offset,
      take: Number(itemsPage),
      where: [
        {
          insurances: ILike(`%${searchParams}%`),
        },
      ],
      relations: ["icon"],
      select: ["name", "id", "zap", "icon"],
    });
    return res.json({
      items,
      currentPage: page,
      pages: Math.ceil(count / itemsPage),
    });
  }
}

export default new CorrectorController();
