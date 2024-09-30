import { Request, Response } from "express";
import FeaturesData from "@typings/FeaturesData";

const featuresDataServer: FeaturesData = {
  mainTitle: "One app. One Banking.",
  featuresItems: [
    {
      icon: "badgeInstant",
      title: "Saving Accounts",
      description:
        "1 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    },
    {
      icon: "badgeSaving",
      title: "Saving Accounts",
      description:
        "2 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    },
    {
      icon: "badgeMobile",
      title: "Mobile Banking",
      description:
        "3 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    },
    {
      icon: "badgestatistics",
      title: "Saving Accounts",
      description:
        "4 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    },
    {
      icon: "badgeCard",
      title: "Saving Accounts",
      description:
        "5 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    },
    {
      icon: "badgeContactless",
      title: "Saving Accounts",
      description:
        "6 Odio euismod lacinia at quis. Amet purus gravida quis blandit turpis",
    },
  ],
};

function featuresBannerController(req: Request, res: Response) {
  const frontendParams = req.body as {
    userId: number;
  };

  console.log(frontendParams.userId);

  setTimeout(() => {
    res.send(featuresDataServer);
  }, 1000);
}

export default featuresBannerController;
