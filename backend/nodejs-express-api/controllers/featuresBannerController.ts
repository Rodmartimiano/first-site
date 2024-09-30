import { Request, Response } from "express";

type FeaturesData = {
  mainTitle: string;
  badgeIcon: string[];
  badgeTitle: string[];
  badgeDescription: string[];
};

const featuresDataServer: FeaturesData = {
  mainTitle: "One app. One Banking.",
  badgeIcon: [
    "badgeInstant",
    "badgeSaving",
    "badgeMobile",
    "badgestatistics",
    "badgeCard",
    "badgeContactless",
  ],
  badgeTitle: [
    "Saving Accounts",
    "Saving Accounts",
    "Mobile Banking",
    "Virtual Cards",
    "Virtual Cards",
    "Virtual Cards",
  ],
  badgeDescription: [
    "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    "Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
  ],
};

function featuresBannerController(req: Request, res: Response) {
  const frontendParams = req.body as {
    userId: number;
  };

  console.log(frontendParams.userId);

  setTimeout(() => {
    res.send(featuresDataServer);
  }, 5000);
}

export default featuresBannerController;
