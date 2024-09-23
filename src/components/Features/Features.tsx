import "./Features.css";
import cellphone from "../../assets/cellphone.svg";
import badgeInstant from "../../assets/badgeInstant.svg";
import badgeSaving from "../../assets/badgeSaving.svg"; // Additional icons for other features
import badgeMobile from "../../assets/badgeMobile.svg";
import badgestatistics from "../../assets/badgestatistics.svg";
import badgeCard from "../../assets/badgeCard.svg";
import badgeContactless from "../../assets/badgeContactless.svg";

function Features() {
  return (
    <div className="Features">
      <div className="container">
        <div className="left">
          <h1 className="header-medium">One app. One banking.</h1>
          <div className="list">
            <div className="features-text-item">
              <img src={badgeInstant} alt="Instant transactions" />
              <div>
                <h3>Saving Accounts</h3>
                <p>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="features-text-item">
              <img src={badgeSaving} alt="saving badge" />
              <div>
                <h3>Saving Accounts</h3>
                <p>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="features-text-item">
              <img src={badgeMobile} alt="mobile banking badge" />
              <div>
                <h3>Mobile Banking</h3>
                <p>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="features-text-item">
              <img src={badgestatistics} alt="Advanced statistics" />
              <div>
                <h3>Virtual Cards</h3>
                <p>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="features-text-item">
              <img src={badgeCard} alt="virtual card badge" />
              <div>
                <h3>Virtual Cards</h3>
                <p>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
            <div className="features-text-item">
              <img src={badgeContactless} alt="Contactless payments" />
              <div>
                <h3>Virtual Cards</h3>
                <p>
                  Odio euismod lacinia at quis. Amet purus gravida quis blandit
                  turpis.
                </p>
              </div>
            </div>
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
