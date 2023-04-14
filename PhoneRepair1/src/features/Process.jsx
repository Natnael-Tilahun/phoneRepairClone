import React from "react";
import HorizontalLine from "../utils/HorizontalLine";

function Process({className, horizontalLine}) {
  return (
    <div className={`flex flex-col px-4 py-16 md:px-12 xl:px-32 ${className}`}>
      <h1 className=" text-center text-2xl tracking-wider lg:text-4xl">
        How to start your repoir?
      </h1>
      {horizontalLine && <HorizontalLine className="" /> }
      

      <div className="flex flex-col gap-12  lg:gap-0 lg:flex-row">
        <div className="flex h-full basis-1/2 flex-col items-center justify-center gap-4">
          <div className="relative h-36 w-36 rounded-full bg-thm_background shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="absolute left-1/3 top-1/3 h-12 w-12"
            >
              <path
                d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"
                fill="#000"
                className="fill-thm_secondary_color"
              ></path>
            </svg>
            <div className="absolute right-1 top-0 z-50 inline-block rounded-full bg-thm_background p-4 text-xl text-thm_primary_color">
              01
            </div>
          </div>
          <h1 className="text-lg tracking-littelwider">Location Search</h1>
          <p className="text-center text-sm tracking-wider text-thm_secondary_color md:w-1/2 lg:w-full">
            Write your Zip Code and find the nearest iFixandRepair store of your
            location.
          </p>
        </div>

        <div className="hidden  lg:flex gap-3 pt-16">
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-75"></div>
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-0"></div>
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-100"></div>
        </div>

        <div className="flex h-full basis-1/2 flex-col items-center justify-center gap-4">
          <div className="relative h-36 w-36 rounded-full bg-thm_background shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="absolute left-1/3 top-1/3 h-12 w-12"
            >
              <path
                d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"
                fill="#000"
                className="fill-thm_secondary_color"
              ></path>
            </svg>
            <div className="absolute right-1 top-0 z-50 inline-block rounded-full bg-thm_background p-4 text-xl text-thm_primary_color">
              02
            </div>
          </div>
          <h1 className="text-lg tracking-littelwider">Device Selection</h1>
          <p className="text-center text-sm tracking-wider text-thm_secondary_color md:w-1/2 lg:w-full">
            Select the device that you want to repair.
          </p>
        </div>

        <div className="hidden lg:flex gap-3 pt-16">
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-75"></div>
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-0"></div>
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-100"></div>
        </div>

        <div className="flex h-full basis-1/2 flex-col items-center  justify-center gap-4">
          <div className="relative h-36 w-36 rounded-full bg-thm_background shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="absolute left-1/3 top-1/3 h-12 w-12"
            >
              <path
                d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                className="fill-thm_secondary_color"
              ></path>
            </svg>
            <div className="absolute right-1 top-0 z-50 inline-block rounded-full bg-thm_background p-4 text-xl text-thm_primary_color">
              03
            </div>
          </div>
          <h1 className="text-lg tracking-littelwider">Repair Selection</h1>
          <p className="text-center text-sm tracking-wider text-thm_secondary_color md:w-1/2 lg:w-full">
            Choose the repair your phones needs. Remember, #WeCanFixIt.
          </p>
        </div>

        <div className="hidden lg:flex gap-3 pt-16">
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-75"></div>
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-0"></div>
          <div className="lazyloaded  h-[10px] w-[10px] rounded-full bg-thm_root1_color animate-pulse  ease-in-out delay-1000 duration-100"></div>
        </div>

        <div className="flex h-full basis-1/2 flex-col items-center justify-center gap-4">
          <div className="relative h-36 w-36 rounded-full bg-thm_background shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="absolute left-1/3 top-1/3 h-12 w-12"
            >
              <path
                d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
                className="fill-thm_secondary_color"
              ></path>
            </svg>
            <div className="absolute right-1 top-0 z-50 inline-block rounded-full bg-thm_background p-4 text-xl text-thm_primary_color">
              04
            </div>
          </div>
          <h1 className="text-lg tracking-littelwider">Contact Info</h1>
          <p className="text-center text-sm tracking-wider text-thm_secondary_color md:w-1/2 lg:w-full">
            In order to contact you, it’s important to have your info.
          </p>
        </div>
      </div>

      <div className="text-center text-thm_secondary_color">
        After that, one of our expert technicians will contact you to schedule
        an appointment for your repair. You won’t have to worry about it again.
      </div>

    </div>
  );
}

export default Process;
