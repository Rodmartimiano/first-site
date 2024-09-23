import "./App.css";

import HeaderApp from "./components/Header/HeaderApp";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

function App() {
  return (
    <div>
      <div className="HeaderApp">
        <HeaderApp />
      </div>
      <Hero />
      <Features />
    </div>
  );
}

export default App;
