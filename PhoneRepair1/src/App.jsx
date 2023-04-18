import { useState } from "react";
import "./App.css";
import { TopHeader } from "./components/TopHeader";
import { Header } from "./components/Header";
import Footer from "./features/Footer";
import { Outlet } from "react-router-dom";
import ScrollTopAndFeedback from "./components/ScrollTopAndFeedback";
import { Button } from "./components/Button";
import FeedbackModal from "./components/FeedbackModal";

function App() {
  const [ModalClosed, setModalClosed] = useState(false);
  const handleModalState = () => setModalClosed(!ModalClosed);
  return (
    <div className=" App m-0 box-border flex h-full  w-full flex-col font-sans">
      <TopHeader />
      <Header />
      <Outlet />
      <Footer />
      <ScrollTopAndFeedback  handleModalState={handleModalState} />
      <FeedbackModal ModalClosed={ModalClosed} handleModalState={handleModalState} />
    </div>
  );
}

export default App;
