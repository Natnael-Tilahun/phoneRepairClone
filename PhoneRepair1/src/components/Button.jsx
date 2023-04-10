import React from "react";

export const Button = (props) => {
  return (
    <div className="">
      <a
        id="banner-cta"
        className={`"rounded-lg font-normal" bg-thm_root1_color px-7 py-2 text-lg ${props.className}`}
        data-wow-duration="3s"
        data-wow-delay="0.5s"
        href="#store-finder"
        data-text="Repair My Device"
        style={{ display: "initial" }}
      >
        {" "}
        <span>{props.firstLetter}</span>
        {/* <span
            className=" cursor-move hover:hidden"
            style={{ transition: "all 0.1s ease 0s", opacity: 1 }}
          >
            <Typed
              strings={["epair MyDevice"]}
              typeSpeed={40}
              backSpeed={40}
              loop
              className=""
            />
          </span> */}
        <span className="">{props.text}</span>
        {/* <span>e</span>
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
          <span>e</span> */}
      </a>
    </div>
  );
};
