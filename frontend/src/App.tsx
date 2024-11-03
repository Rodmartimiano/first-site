import Features from "./components/Features/Features";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Transactions from "./components/Transactions/Transactions";
import "./App.css";
import Savings from "./components/Savings/Savings";
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Transactions />
      <Savings />
    </div>
  );
}

export default App;
