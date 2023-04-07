import React from "react";
import Typed from "react-typed";

export const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-100px)] w-full text-lg">
      <img
        src="..\public\assets\images\bg\banner2.2.jpg"
        alt="Background Image"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-thm_root1_color opacity-20"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h5 className="letter-space-1 mb-2 uppercase tracking-widest text-white">
          #WeCanFixIt
        </h5>
        <h1 className="mb-4 text-white">
          <span
            className="cursor text-3xl font-medium"
            data-cursordisplay="_"
            data-owner="some-id"
            style={{ transition: "all 0.1s ease 0s", opacity: 1 }}
          >
            <Typed
              strings={[
                "SMARTPHONES",
                "TABLETS",
                "COMPUTERS",
                "GAME CONSOLES",
                "WEARABLES",
              ]}
              typeSpeed={90}
              backSpeed={90}
              loop
            />
          </span>
        </h1>
        <h3 className=" mb-4 tracking-wider text-white">Broken? Not anymore</h3>
        <a
          id="banner-cta"
          className=" rounded-lg bg-thm_root1_color px-4 py-2 font-medium"
          data-wow-duration="3s"
          data-wow-delay="0.5s"
          href="#store-finder"
          data-text="Repair My Device"
          style={{ display: "initial" }}
        >
          {" "}
          <span>R</span>
          <span>e</span>
          <span>p</span>
          <span>a</span>
          <span>i</span>
          <span>r</span>
          <span> </span>
          <span>M</span>
          <span>y</span> <span> </span>
          <span>D</span>
          <span>e</span>
          <span>v</span>
          <span>i</span>
          <span>c</span>
          <span>e</span>
        </a>
      </div>
    </section>
  );
};
