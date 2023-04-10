import React from "react";
import Typed from "react-typed";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-100px)] w-full bg-[url('..\public\assets\images\bg\banner2.2.jpg')]  bg-cover bg-center bg-no-repeat text-lg md:h-[calc(100vh-145px)] md:bg-[url('https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/bg/bannerdesktop.jpg')] md:text-2xl">
      <div className="absolute inset-0 bg-thm_root1_color bg-gradient-to-r from-cyan-400 to-white opacity-30"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h5 className="letter-space-1 mb-2 uppercase tracking-widest text-white">
          #WeCanFixIt
        </h5>
        <h1 className="mb-4 text-white">
          <span
            className="cursor text-3xl font-medium md:text-5xl lg:font-medium"
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
        <Button firstLetter="R" text="epair My Device" />
      </div>
    </section>
  );
};
