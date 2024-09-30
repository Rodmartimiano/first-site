import "./Features.css";
import cellphone from "../../assets/cellphone.png";
import badgeInstant from "../../assets/badgeInstant.svg";
import badgeSaving from "../../assets/badgeSaving.svg"; // Additional icons for other features
import badgeMobile from "../../assets/badgeMobile.svg";
import badgestatistics from "../../assets/badgestatistics.svg";
import badgeCard from "../../assets/badgeCard.svg";
import badgeContactless from "../../assets/badgeContactless.svg";
import { useEffect, useState } from "react";

type FeaturesData = {
  mainTitle: string;
  badgeIcon: string[];
  badgeTitle: string[];
  badgeDescription: string[];
};

const featuresMock: FeaturesData = {
  mainTitle: "",
  badgeIcon: [],
  badgeTitle: [],
  badgeDescription: [],
};

async function getServerData(): Promise<FeaturesData> {
  const serverResponse = await fetch("http://localhost:3000/features-data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
    }),
  });

  const response = await serverResponse.json();

  return response as FeaturesData;
}

function Features() {
  const [featuresJsonData, setFeaturesJsonData] =
    useState<FeaturesData>(featuresMock);
  const [loading, setLoading] = useState<boolean>(false);

  const badgeIconsMap: Record<string, string> = {
    badgeInstant,
    badgeSaving,
    badgeMobile,
    badgestatistics,
    badgeCard,
    badgeContactless,
  };

  useEffect(() => {
    (async () => {
      setLoading(true);

      const serverData = await getServerData();

      setFeaturesJsonData(serverData);

      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="Features">
        <div className="container">
          <div style={{ fontSize: 100 }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="Features">
      <div className="container">
        <div className="left">
          <h1 className="header-medium">{featuresJsonData.mainTitle}</h1>
          <div className="list">
            {featuresJsonData.badgeIcon.map((iconKey, index) => (
              <div className="features-text-item" key={index}>
                <img
                  src={badgeIconsMap[iconKey]}
                  alt={featuresJsonData.badgeTitle[index]}
                />
                <div>
                  <h3>{featuresJsonData.badgeTitle[index]}</h3>
                  <p>{featuresJsonData.badgeDescription[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cellphone">
          <img src={cellphone} alt="Cellphone" />
        </div>
      </div>
    </div>
  );
}

export default Features;
