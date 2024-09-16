import BasicButton from "../BasicButton/BasicButton";
import "./Hero.css";
import Label from "../Label/Label";
function HeroApp() {
  return (
    <div className="Padding">
      <div className="Container">
        <div className="Grid">
          <div className="Title">
            <h1 className="Header-medium">Banking starts here.</h1>
          </div>
          <div className="Description">
            <h2> descricao comprida do texto</h2>
          </div>
          <div className="List">
            <ul>
              <li>um</li>
              <li>um</li>
              <li>um</li>
              <li>um</li>
            </ul>
          </div>
          <div className="BottomButtons">
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
        <div className="Cards">
          <h1>TESTANDO</h1>
        </div>
      </div>
    </div>
  );
}

export default HeroApp;
