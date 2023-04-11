import React from "react";

function Expects() {
  return (
    <div className="flex flex-col bg-thm_secondary_background items-center px-6 py-12 lg:gap-6 lg:flex-row md:px-12 md:py-12 xl:px-32 w-full">
      <div className="flex flex-col  items-left  gap-4 py-4 lg:py-0 lg:basis-[60%] lg:px-10">
        <h1 className="text-left text-2xl tracking-wider lg:text-4xl">
          Experts on Repairs
        </h1>
        {/* <div className="flex justify-center py-2">
            <hr className="w-7 rounded-md border-[2px] border-gray-300" />
            <hr className="w-7 rounded-md border-[2px] border-orange-700" />
          </div> */}
        <p className=" text-left text-thm_secondary_color">
          We care for you and that includes having the best and more reliable
          technicians to perform your repairs, and between you and us, they are
          pretty good at it.
          <br />
          <br />
          If you have experienced a bad time with your device bring it to us,
          our technicians will replace that part that is giving you problems.
          Even if it is a more uncommon problem that requires board repair, we
          have experts for that too.
        </p>
      </div>

        <img
          alt="iFixandRepair's Technician Repairing a Mobile Device"
          src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/tech.png"
          className="lazyload w-fit lg:w-[40%]"
        />
    </div>
  );
}

export default Expects;
