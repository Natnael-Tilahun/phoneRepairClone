import React, { useState } from "react";
export const Header = () => {
  const [collapseNav, setCollapseNav] = useState(true);
  function toggleMenu() {
    setCollapseNav((prevState) => !prevState);
  }

  function collapseMenu() {
    setCollapseNav(true);
  }

  return (
    <nav className="flex h-12 w-full flex-nowrap items-center justify-between border-2 bg-thm_background px-[5%] md:h-[70px] md:px-[19%] md:py-2 ">
      <button
        className="flex items-center px-0 py-2 md:hidden "
        onClick={toggleMenu}
      >
        {collapseNav && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className=""
          >
            <path
              d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
              fill="#000"
              className="fill-thm_root1_color"
            ></path>
          </svg>
        )}
      </button>
      <img
        id="logo-img"
        alt="iFixandRepair Logo"
        src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/logo.png"
        className="lazyload h-8 bg-center md:h-16 md:py-1 "
        // src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      />
      <ul className="hidden gap-8 text-sm text-thm_secondary_color md:gap-10 md:tracking-wider lg:flex">
        <li>Repairs</li>
        <li>Locations</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <img
        id="locations-img"
        alt="Point of interest Symbol"
        className="h-7 w-5"
        src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/vendor/leaflet/images/blue_iFix@2x.png"
      />
      <div
        className={`${
          collapseNav ? "hidden" : "block"
        }  absolute bottom-0 left-0 right-0 top-0 z-50 flex h-full w-screen  flex-col bg-blue-950 bg-opacity-90 p-10`}
      >
        {!collapseNav && (
          <svg
            className="font-bold"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
            onClick={toggleMenu}
          >
            <path
              className="fill-thm_root2_color"
              d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
            />
          </svg>
        )}
        <div className="flex h-full flex-col items-center justify-center gap-32">
          <ul className="flex flex-col items-center gap-8 text-2xl font-medium text-thm_root2_color shadow-lg ">
            <li>Repairs</li>
            <li>Locations</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <img
            id="white-logo-img"
            alt="iFixandRepair Logo"
            width="250"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/logo_white.png"
            className="lazyload mx-auto bg-center"
          />
        </div>
      </div>
    </nav>
  );
};
