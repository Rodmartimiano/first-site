import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Transactions from "./components/Transactions/Transactions";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Transactions />
    </div>
  );
}

export default App;
