import React, { useState } from "react";

export const StoreFinder = () => {
  const [collapse, setCollapse] = useState(false);
  const collapseHandler = () => setCollapse((prevState) => !prevState);
  return (
    <div className="flex bg-thm_background h-full w-full py-16 flex-col items-center justify-center px-[5%] md:px-[10%] lg:px-[19%]">
      <div
        className=" flex w-full rounded-lg bg-thm_root1_color p-4 text-lg uppercase md:w-2/3 lg:w-1/2 "
        onClick={collapseHandler}
      >
        <h1 className="w-full text-center tracking-wider">Start your repair</h1>
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
            <div className="flex">
              <input
                type="text"
                placeholder="Search by zip"
                className="h-full bg-slate-100 p-3 text-sm text-thm_secondary_color placeholder:text-thm_secondary_color"
              />
              <button className="h-full rounded-e-md rounded-tr-md bg-thm_root1_color px-6 py-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                  >
                    <path
                      d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                      fill="#000"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        )}
    </div>
  );
};
