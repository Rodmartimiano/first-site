import { Request, Response } from "express";
import TransactionsData from "@typings/Transactions";

const TransactionsDataServer: TransactionsData = {
  mainTitle: "Send & receive money instantly",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  badgeTexts: ["Malesuada Ipsum", "Vestibulum", "Parturient Lorem"],
  showTransactionscard: true,
};

function transactionsController(req: Request, res: Response) {
  const frontendParams = req.body as {
    userId: number;
  };

  console.log(frontendParams.userId);

  res.send(TransactionsDataServer);
}

export default transactionsController;
