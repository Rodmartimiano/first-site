import { Request, Response } from "express";

type HeroData = {
  mainTitle: string;
  description: string;
  badgeTexts: string[];
  showOpenAccount: boolean;
  showCompareCards: boolean;
};

const heroDataServer: HeroData = {
  mainTitle: "Banking starts here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  badgeTexts: [
    "Instant Transfer",
    "Easy to use",
    "Access globally",
    "Online support",
  ],
  showOpenAccount: true,
  showCompareCards: true,
};

function heroBannerController(req: Request, res: Response) {
  const frontendParams = req.body as {
    userId: number;
  };

  console.log(frontendParams.userId);

  setTimeout(() => {
    res.send(heroDataServer);
  }, 5000);
}

export default heroBannerController;
