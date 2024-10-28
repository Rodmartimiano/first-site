import "./Features.css";
import cellphone from "../../assets/cellphone.png";
import badgeInstant from "../../assets/badgeInstant.svg";
import badgeSaving from "../../assets/badgeSaving.svg"; // Additional icons for other features
import badgeMobile from "../../assets/badgeMobile.svg";
import badgestatistics from "../../assets/badgestatistics.svg";
import badgeCard from "../../assets/badgeCard.svg";
import badgeContactless from "../../assets/badgeContactless.svg";
import { useEffect, useState } from "react";
import FeaturesData, { featuresMock } from "@typings/FeaturesData";
import getConfig from "@envconfigs/EnvConfig";

async function getServerData(): Promise<FeaturesData> {
  const confis = getConfig();

  const serverResponse = await fetch(confis.apiUrl + "/features-data", {
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
            {featuresJsonData.featuresItems.map((item, index) => (
              <div className="features-text-item" key={index}>
                <img src={badgeIconsMap[item.icon]} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
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
