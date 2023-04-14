import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [collapseNav, setCollapseNav] = useState(true);
  function toggleMenu() {
    setCollapseNav((prevState) => !prevState);
  }

  function collapseMenu() {
    setCollapseNav(true);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="flex w-full flex-nowrap items-center justify-between border-2 bg-thm_background px-[5%] sm:px-[12%] md:h-12 md:px-[10%] md:py-2 lg:h-[70px] lg:px-[5%] xl:px-32 ">
      <button
        className="flex items-center px-0 py-2 lg:hidden "
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

      <NavLink to="/" onClick={scrollToTop}>
        <img
          id="logo-img"
          alt="iFixandRepair Logo"
          src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/logo.png"
          className="lazyload h-8 bg-center md:h-12 md:py-1 "
          // src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
        />
      </NavLink>
      <ul className="hidden gap-8 text-sm text-thm_primary_color md:gap-10 md:tracking-wider lg:flex ">
        <NavLink
          to="/repairs"
          onClick={scrollToTop}
          className="header-link transition-all duration-500 hover:text-thm_root1_color"
        >
          <p>Repairs</p>
          <div className="lazyloaded absolute mx-2 mt-2 hidden gap-3">
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-75 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-0 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-100 ease-in-out"></div>
          </div>
        </NavLink>
        <NavLink
          to="/locations"
          onClick={scrollToTop}
          className="header-link transition-all duration-500 hover:text-thm_root1_color"
        >
          <p>Locations</p>
          <div className="lazyloaded absolute mx-2 mt-2 hidden gap-3">
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-75 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-0 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-100 ease-in-out"></div>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          onClick={scrollToTop}
          className="header-link transition-all duration-500 hover:text-thm_root1_color"
        >
          <p>About</p>
          <div className="lazyloaded absolute mx-1 mt-2 hidden gap-3">
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-75 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-0 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-100 ease-in-out"></div>
          </div>
        </NavLink>
        <NavLink
          to="/contactus"
          onClick={scrollToTop}
          className="header-link transition-all duration-500 hover:text-thm_root1_color"
        >
          <p>Contact Us</p>
          <div className="lazyloaded absolute mx-4 mt-2 hidden gap-3">
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-75 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-0 ease-in-out"></div>
            <div className="lazyloaded  h-[5px] w-[5px] animate-pulse rounded-full bg-thm_root1_color  delay-1000 duration-100 ease-in-out"></div>
          </div>
        </NavLink>
      </ul>

      <NavLink to="/locations" onClick={scrollToTop}>
        <img
          id="locations-img"
          alt="Point of interest Symbol"
          className="h-7 w-5"
          src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/vendor/leaflet/images/blue_iFix@2x.png"
        />
      </NavLink>
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
            <NavLink to="repairs" onClick={scrollToTop}>
              Repairs
            </NavLink>
            <NavLink to="locations" onClick={scrollToTop}>
              Locations
            </NavLink>
            <NavLink to="about" onClick={scrollToTop}>
              About
            </NavLink>
            <NavLink to="contactus" onClick={scrollToTop}>
              Contact Us
            </NavLink>
          </ul>

          <NavLink to="/" onClick={scrollToTop}>
            <img
              id="white-logo-img"
              alt="iFixandRepair Logo"
              width="250"
              src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/logo_white.png"
              className="lazyload mx-auto bg-center"
            />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
