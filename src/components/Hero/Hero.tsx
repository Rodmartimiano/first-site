import BasicButton from "../BasicButton/BasicButton";
import "./Hero.css";
import Label from "../Label/Label";
import cardimg from "../../assets/cards.svg";
import badge from "../../assets/badge.svg";
import { useEffect, useState } from "react";

type HeroData = {
  mainTitle: string;
  description: string;
  badgeTexts: string[];
  showOpenAccount: boolean;
  showCompareCards: boolean;
};

const heroMock: HeroData = {
  mainTitle: "",
  description: "",
  badgeTexts: [],
  showOpenAccount: false,
  showCompareCards: false,
};

function getServerData(): HeroData {
  return {
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
}

function Hero() {
  const [heroJsonData, setHeroJsonData] = useState<HeroData>(heroMock);

  useEffect(() => {
    const serverData = getServerData();

    setHeroJsonData(serverData);
  }, []);

  return (
    <div className="Hero">
      <div className="container">
        <div className="grid">
          <div className="title">
            <h1 className="header-medium">{heroJsonData.mainTitle}</h1>
          </div>

          <div className="description">
            <h2>{heroJsonData.description}</h2>
          </div>

          <div className="list">
            {heroJsonData.badgeTexts.map((badgeText) => {
              return (
                <div className="hero-text-item">
                  <img src={badge} alt="badge images" />
                  <span>{badgeText}</span>
                </div>
              );
            })}
          </div>

          <div className="bottom-buttons">
            {heroJsonData.showOpenAccount ? (
              <BasicButton
                label="Open Account"
                size="medium"
                appearence="secondary"
              />
            ) : (
              ""
            )}

            {heroJsonData.showCompareCards ? (
              <Label
                label="Compare Cards ->"
                size="medium"
                appearence="secondary"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="cards">
          <img src={cardimg} alt="Card images" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
