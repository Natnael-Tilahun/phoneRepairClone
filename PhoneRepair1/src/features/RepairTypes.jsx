import React from "react";
import HorizontalLine from "../utils/HorizontalLine";
import { DeviceTypesData } from "../data/Device_Types_Data";
import DeviceTypes from "../components/DeviceTypes";

function RepairTypes() {

  return (
    <div className="h-full bg-thm_background w-full px-[5%] py-20 text-xl md:text-3xl tracking-littelwider md:px-[12%] lg:px-[6%] xl:px-32 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1>What can we</h1>
        <h1>
          <span className="font-medium">Fix and Repair</span> for you?
        </h1>
        <HorizontalLine className="" />
      </div>

     <DeviceTypes />
     <div className="w-full flex justify-center py-4">
        <p className="text-sm text-thm_secondary_color">Please verify with your nearest store the repair serice you need.</p>
    </div>

    </div>
  );
}

export default RepairTypes;
