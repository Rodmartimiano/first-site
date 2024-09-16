import "./App.css";

import HeaderApp from "./components/Header/HeaderApp";
import HeroApp from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <div className="HeaderApp">
        <HeaderApp />
      </div>
      <div className="Hero">
        <HeroApp />
      </div>
    </div>
  );
}

export default App;
