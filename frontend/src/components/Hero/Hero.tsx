import BasicButton from "../BasicButton/BasicButton";
import "./Hero.css";
import Label from "../Label/Label";
import cardimg from "../../assets/cards.svg";
import badge from "../../assets/badge.svg";
import { useEffect, useState } from "react";
import envConfigs from "@envconfigs/EnvConfig"

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

async function getServerData(): Promise<HeroData> {
  const configs = envConfigs();

  const serverReponse = await fetch(configs.apiUrl + "/hero-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
    }),
  });

  const response = await serverReponse.json();

  return response as HeroData;
}

function Hero() {
  const [heroJsonData, setHeroJsonData] = useState<HeroData>(heroMock);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      const serverData = await getServerData();

      setHeroJsonData(serverData);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="Hero">
        <div className="container">
          <div style={{ fontSize: 100 }}>Loading...</div>
        </div>
      </div>
    );
  }

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
                <div key={badgeText} className="hero-text-item">
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
