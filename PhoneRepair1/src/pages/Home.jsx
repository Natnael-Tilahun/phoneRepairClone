import React from "react";
import { Hero } from "../features/Hero";
import { StoreFinder } from "../features/StoreFinder";
import RepairTypes from "../features/RepairTypes";
import Features from "../features/Features";
import About from "../features/About";
import Process from "../features/Process";
import Testimonial from "../features/Testimonial";
import Expects from "../features/Expects";
import Partners from "../features/Partners";

function Home() {
  return (
    <div className=" m-0 box-border flex h-full  w-full flex-col font-sans">
      <Hero />
      <StoreFinder />
      <RepairTypes />
      <Features />
      <About />
      <Process
        className="gap-20 bg-thm_secondary_background"
        horizontalLine={false}
      />
      <Testimonial />
      <Expects />
      <Partners />
    </div>
  );
}

export default Home;
