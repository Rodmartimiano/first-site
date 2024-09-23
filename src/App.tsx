import "./App.css";
import Features from "./components/Features/Features";

import HeaderApp from "./components/Header/HeaderApp";
import Hero from "./components/Hero/Hero";

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
