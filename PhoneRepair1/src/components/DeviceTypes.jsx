import React from 'react'
import { DeviceTypesData } from "../data/Device_Types_Data";

function DeviceTypes() {
    const deviceTypeCard = DeviceTypesData.map((device, index) => (
        <div key={index} className="flex md:flex-col w-full items-center shadow-md md:shadow-xl p-3 md:p-4 lg:basis-[22%] md:basis-[45%] rounded-lg">
        <img
          alt="iPhone Drawing"
          src={device.img}
          className="md:w-40 w-16 lazyload"
        />
        <h1 className="text-lg w-full text-center">{device.name}</h1>
      </div>
      ))
  return (
    <div className="flex flex-wrap gap-2 md:gap-x-7 py-10">
    {deviceTypeCard}
  </div>
  )
}

export default DeviceTypes