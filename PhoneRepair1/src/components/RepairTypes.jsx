import React from "react";

function RepairTypes() {
  return (
    <div className="h-full bg-thm_background w-full px-[5%] py-20 text-xl md:text-3xl tracking-littelwider md:px-[12%] lg:px-[6%] xl:px-32 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>What can we</h1>
        <h1>
          <span className="font-medium">Fix and Repair</span> for you?
        </h1>
        <div className="flex py-2">
          <hr className="w-7 border-[1.5px] border-gray-300" />
          <hr className="w-7 border-[1.5px] border-orange-300" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-x-7 py-10">
        <div className="flex md:flex-col  items-center shadow-md md:shadow-xl p-3 md:p-4 w-full lg:basis-[22%] md:basis-[45%] rounded-lg">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/smartphone.png"
            className="md:w-40  w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">iphone</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg ">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/smartphone2.png"
            className="md:w-40 w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">Samsung</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/other-smartphones.png"
            className="md:w-40 w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">Smartphone</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/tablet.png"
            className="md:w-40 w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">Tablet</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/macbook.png"
            className="md:w-40 w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">Computer</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg ">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/game-console.png"
            className="md:w-40 w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">Gaming Console</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/drone.png"
            className="md:w-40 w-12 lazyload"
          />
          <h1 className="text-lg w-full text-center">DJI Drone</h1>
        </div>
        <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
          <img
            alt="iPhone Drawing"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/devices/smartwatch.png"
            className="md:w-40 w-16 lazyload"
          />
          <h1 className="text-lg w-full text-center">Others</h1>
        </div>
        <div className="w-full flex justify-center py-4">
            <p className="text-sm text-thm_secondary_color">Please verify with your nearest store the repair serice you need.</p>
        </div>
      </div>
    </div>
  );
}

export default RepairTypes;
