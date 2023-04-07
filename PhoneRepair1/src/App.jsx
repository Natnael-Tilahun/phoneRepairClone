import { useState } from "react";
import "./App.css";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App m-0  box-border w-screen font-sans">
      <TopHeader />
      <Header />
      <Hero />
    </div>
  );
}

export default App;
