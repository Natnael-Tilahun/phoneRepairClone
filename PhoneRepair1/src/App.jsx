import { useState } from "react";
import "./App.css";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { StoreFinder } from "./components/StoreFinder";
import RepairTypes from "./components/RepairTypes";
import About from "./components/About";
import Features from "./components/Features";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App m-0 h-full flex flex-col  box-border w-full font-sans">
      <TopHeader />
      <Header />
      <Hero />
      <StoreFinder />
      <RepairTypes />
      <Features />
      <About />
    </div>
  );
}

export default App;
