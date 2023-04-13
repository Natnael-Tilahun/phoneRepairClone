import { useState } from "react";
import "./App.css";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import Footer from "./features/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App m-0 box-border flex h-full  w-full flex-col font-sans">
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
