import { Request, Response } from "express";

type transactionsData = {
  mainTitle: string;
  description: string;
  badgeTexts: string[];
  showTransactionscard: boolean;
};

const TransactionsDataServer: transactionsData = {
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

  setTimeout(() => {
    res.send(TransactionsDataServer);
  }, 5000);
}

export default transactionsController;
