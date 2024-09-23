import BasicButton from "../BasicButton/BasicButton";
import "./Hero.css";
import Label from "../Label/Label";
import cardimg from "../../assets/cards.svg";
import badge from "../../assets/badge.svg";

function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="grid">
          <div className="title">
            <h1 className="header-medium">Banking starts here.</h1>
          </div>
          <div className="description">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </h2>
          </div>
          <div className="list">
            <div className="hero-text-item">
              <img src={badge} alt="badge images" />
              <span>Instant Transfer</span>
            </div>
            <div className="hero-text-item">
              <img src={badge} alt="badge images" />
              <span>Instant Transfer</span>
            </div>
            <div className="hero-text-item">
              <img src={badge} alt="badge images" />
              <span>Instant Transfer</span>
            </div>
            <div className="hero-text-item">
              <img src={badge} alt="badge images" />
              <span>Instant Transfer</span>
            </div>
          </div>
          <div className="bottom-buttons">
            <BasicButton
              label="Open Account"
              size="medium"
              appearence="secondary"
            />
            <Label
              label="Compare Cards ->"
              size="medium"
              appearence="secondary"
            />
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
