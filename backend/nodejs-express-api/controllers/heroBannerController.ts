import { Request, Response } from "express";
import connectDB from "../models/mysql";

type HeroData = {
  mainTitle: string;
  description: string;
  badgeTexts: string[];
  showOpenAccount: boolean;
  showCompareCards: boolean;
};

type HeroDataDB = {
  main_title: string;
  description: string;
  badge_texts: string;
  show_open_account: boolean;
  show_compare_cards: boolean;
};

const heroDataServer: HeroData = {
  mainTitle: "Banking starts here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  badgeTexts: [
    "Instant Transfer, Easy to use, Access globally, Online support",
  ],
  showOpenAccount: true,
  showCompareCards: true,
};

async function heroBannerController(req: Request, res: Response) {
  const frontendParams = req.body as {
    userId: number;
  };

  const connection = connectDB();

  const rows = await connection<HeroDataDB>("hero_data").select("*");

  const rowsTyped: HeroData[] = rows.map((item) => {
    return {
      mainTitle: item.main_title,
      badgeTexts: item.badge_texts.split(",").map((item) => item.trim()),
      description: item.description,
      showCompareCards: item.show_compare_cards,
      showOpenAccount: item.show_open_account,
    };
  });

  res.send(rowsTyped[0]);
}

export default heroBannerController;
