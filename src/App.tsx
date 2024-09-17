import "./App.css";

import HeaderApp from "./components/Header/HeaderApp";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div>
      <div className="HeaderApp">
        <HeaderApp />
      </div>
      <Hero />
    </div>
  );
}

export default App;
