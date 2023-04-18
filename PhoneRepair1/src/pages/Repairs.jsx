import React, { useState } from "react";
import Banner from "../components/Banner";
import StoreSearchInput from "../components/StoreSearchInput";
import RepairTypes from "../features/RepairTypes";
import DeviceTypes from "../components/DeviceTypes";
import HorizontalLine from "../utils/HorizontalLine";

function Repairs() {
  const [collapse, setCollapse] = useState(false);
  const collapseHandler = () => setCollapse((prevState) => !prevState);
  return (
    <div className="h-full w-full">
      <Banner
        title="Device Repairs"
        img="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/repairs_banner.jpg"
      />
      <div className="flex w-full flex-col items-center gap-5 px-[5%] sm:px-[12%] md:px-[10%] lg:py-10  lg:px-[5%] xl:px-32">
        {/* Select Store Section Start */}
        <div className="flex h-full w-full flex-col  items-center justify-center bg-thm_background px-[5%] py-8 md:px-[10%] lg:px-[0%]">
          <div
            className=" flex w-full rounded-lg bg-thm_root1_color p-4 text-lg uppercase md:w-2/3 lg:w-1/2 "
            onClick={collapseHandler}
          >
            <h1 className="w-full text-center tracking-wider">
              Start your repair
            </h1>
            <p className="text-right">
              {!collapse ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  className=""
                >
                  <path
                    d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                    fill="#000"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  className=""
                >
                  <path d="M19 11H5V13H19V11Z" fill="#000"></path>
                </svg>
              )}
            </p>
          </div>

          {collapse && (
            <div className=" flex  w-full flex-col  items-center gap-3 py-4">
              <p className="text-base  tracking-littelwider">
                Step 1: Find your nearest store
              </p>
              <StoreSearchInput />
            </div>
          )}
        </div>
        {/* Select Store Section End */}

        {/* Choose Device Section Start */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="tracking-littelwider md:text-2xl">
            Choose your device
          </h1>
          <HorizontalLine className="" />
          <DeviceTypes />
        </div>
        {/* Choose Device Section End */}
      </div>

      {/* We can fix section Start */}
      <div className="flex w-full flex-col gap-5 bg-thm_secondary_background p-20 px-[5%] sm:px-[12%] md:px-[10%] lg:flex-row  lg:px-[5%] xl:px-32">
        <div className="flex w-full flex-col items-start justify-start gap-2 lg:basis-1/2">
          <h1 className="text-xl capitalize tracking-littelwider text-thm_primary_color lg:text-4xl">
            We can fix anything
          </h1>
          <HorizontalLine className="" />
          <p className="leading-7 tracking-littelwider text-thm_secondary_color">
            We care for you and that includes having the best and more reliable
            technicians to perform your repairs, and between you and us, they
            are pretty good at it. If you have experienced a bad time with your
            device bring it to us, our technicians will replace that part that
            is giving you problems. Even if it is a more uncommon problem that
            requires board repair, we have experts for that too.
          </p>
        </div>
        <video
          width="300"
          className="w-full rounded-xl lg:w-1/2 lg:basis-1/3"
          controls
          preload="metadata"
          poster="../../public/assets/videos/cover.jpg"
        >
          <source
            src="../../public/assets/videos/repair_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* We can fix section End */}

      {/* Device Reapirs section Start */}
      <div className="w-full bg-thm_background p-20 px-[5%] sm:px-[12%] md:px-[10%]  lg:px-[5%] xl:px-32">
        <div className="flex flex-col items-start justify-start gap-3">
          <h1 className="text-xl capitalize tracking-littelwider text-thm_primary_color lg:text-4xl">
            Device Repairs
          </h1>
          <HorizontalLine className="" />
          <p className="bg-orange-50 p-2 text-sm leading-6 tracking-littelwider text-thm_secondary_color">
            At iFixandRepair, we understand that accidents are inevitable. As
            much as you can try to keep your device safe, your favorite iPhone,
            Samsung, Smartphone, Apple watch, iPad, Drone, Game Console or any
            device can get some issues. But thankfully, we’re here to make your
            device look brand new again, and fix that problem.
          </p>
          <p className="text-sm leading-6 tracking-littelwider text-thm_secondary_color">
            There is nothing we haven't fixed. We are here to repair your device
            and bring it back to life in a very short time. We can repair all
            the damages on your device, from a broken screen to a charging port
            issue. We have the best experts and the most reliable technicians to
            perform your repairs, and between you and us, they are pretty good
            at it.
          </p>
          <p className="text-sm leading-6 tracking-littelwider text-thm_secondary_color">
            We hope your device is behaving well. But, if you need to repair
            your smartphone, tablet, game console or drone, please come and
            visit us. We’ll take care of it. From Colorado to South Florida, our
            capable technicians will bring your device back to life expertly and
            quickly in one of our stores near you.
          </p>
        </div>
        <img
          aria-hidden="true"
          alt=""
          src="images/signature-white.png"
          className="img-fluid lazyload"
        />
      </div>
      {/* Device Repairs section End */}
    </div>
  );
}

export default Repairs;
