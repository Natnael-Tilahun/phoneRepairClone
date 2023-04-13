import React from "react";
import { DeviceTypes } from "../data/Device_Types";
import HorizontalLine from "../utils/HorizontalLine";

function RepairTypes() {
  const deviceTypeCard = DeviceTypes.map(device => (
    <div className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
    <img
      alt="iPhone Drawing"
      src={device.img}
      className="md:w-40 w-16 lazyload"
    />
    <h1 className="text-lg w-full text-center">{device.name}</h1>
  </div>
  ))
  return (
    <div className="h-full bg-thm_background w-full px-[5%] py-20 text-xl md:text-3xl tracking-littelwider md:px-[12%] lg:px-[6%] xl:px-32 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>What can we</h1>
        <h1>
          <span className="font-medium">Fix and Repair</span> for you?
        </h1>
        <HorizontalLine className="" />
      </div>

      <div className="flex flex-wrap gap-2 md:gap-x-7 py-10">
        {deviceTypeCard}
        <div className="w-full flex justify-center py-4">
            <p className="text-sm text-thm_secondary_color">Please verify with your nearest store the repair serice you need.</p>
        </div>
      </div>
    </div>
  );
}

export default RepairTypes;
