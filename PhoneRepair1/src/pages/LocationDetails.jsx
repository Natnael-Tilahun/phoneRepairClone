import React from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import { Button } from "../components/Button";
import HorizontalLine from "../utils/HorizontalLine";

function LocationDetails() {
  return (
    <div className="h-full w-full">
      <section className="relative h-[calc(100vh-220px)] w-full bg-green-500 bg-[url('../../public/assets/images/banner/landing_banner_2.jpg')]  bg-cover bg-center bg-no-repeat text-lg md:h-[calc(100vh-80px)] md:bg-[url('../../public/assets/images/banner/landing_banner_2.jpg')] md:text-2xl">
        <div className="absolute inset-0 bg-thm_root1_color bg-gradient-to-r from-cyan-400 to-indigo-700 opacity-30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-[10%] lg:items-start">
          <h5 className="letter-space-1 mb-2 uppercase tracking-widest text-white md:text-2xl">
            #WeCanFixIt
          </h5>
          <h1 className="text-xl font-medium text-white md:text-4xl lg:text-5xl lg:font-semibold lg:tracking-littelwider">
            iFixandRepair San Diego WM
          </h1>
          <h3 className="text-lg tracking-wider text-white md:text-3xl">
            Broken? Not anymore
          </h3>
          <HashLink to="/#store_finder" smooth>
            <Button
              className="rounded-lg py-3 text-white"
              firstLetter="R"
              text="epair My Device"
            />
          </HashLink>
          {/* <HashLink to="" smooth>
            <Button
              className="rounded-lg  bg-white py-3 text-thm_primary_color md:hidden "
              firstLetter=""
              text="Call Now"
            />
          </HashLink> */}
        </div>
      </section>

      <section className=" flex flex-col items-center gap-16 px-[5%]  py-20 sm:px-[12%] md:px-[8%] lg:flex-row lg:px-[5%]  xl:px-12">
        <div className="flex h-full w-full basis-full items-center justify-center lg:basis-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.506171268007!2d-95.16394808490709!3d29.647082882028634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864098de5f791c6b%3A0x4d7e5db2acb8a738!2siFixandRepair%20-%20Phones%20%2C%20Computer%20%26%20Tablet%20Repair%20Pasadena!5e0!3m2!1sen!2sus!4v1681484017019!5m2!1sen!2sus"
            className="h-80 w-full lg:h-[350px] lg:w-[400px] xl:h-[400px] xl:w-[650px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex  basis-full flex-col items-start gap-3 lg:basis-1/2 ">
          <h1 className="text-2xl tracking-wider lg:text-4xl">
            Get in touch with <span className="font-medium">San diego WM</span>{" "}
            store
          </h1>
          <HorizontalLine className="" />
          <div className="flex  w-full flex-col md:flex-row md:justify-between">
            <div className="flex flex-col gap-1 text-sm tracking-wider text-thm_secondary_color">
              <p>San Diego WM</p>
              <p>3412 College Ave</p>
              <p>San Diego California 92115</p>
              <p>United States</p>
              <div className="flex items-center gap-3 lg:py-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                >
                  <path
                    d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"
                    fill="#000"
                  ></path>
                </svg>
                <h1 className="text-xl text-thm_primary_color">
                  Contact Details
                </h1>
              </div>
              <p className="text-thm_primary_color">619-251-4787</p>
            </div>
            <div className="flex flex-col py-10">
              <div className="flex items-center gap-3 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
                    fill="#000"
                  ></path>
                </svg>
                <h1 className=" text-xl tracking-wider">Open Hours</h1>
              </div>
              <div className="flex flex-row gap-10 text-sm text-thm_secondary_color">
                <div>
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thurday</p>
                  <p>Friday</p>
                  <p>Saturday</p>
                  <p>Sunday</p>
                </div>
                <div>
                  <p>10:00 AM - 9:00 PM</p>
                  <p>10:00 AM - 9:00 PM</p>
                  <p>10:00 AM - 9:00 PM</p>
                  <p>10:00 AM - 9:00 PM</p>
                  <p>10:00 AM - 9:00 PM</p>
                  <p>10:00 AM - 9:00 PM</p>
                  <p>10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col gap-10 py-0 px-[5%]  sm:px-[12%] md:px-[8%] lg:px-[5%]  xl:px-12">
        <div className="flex flex-col gap-2 items-center  justify-center px-0">
          <h1 className="text-2xl text-center tracking-wider lg:text-4xl">
            Best Repairs on the <span className="font-medium">Market</span>
          </h1>
          <HorizontalLine className="" />
          <p className="text-sm tracking-littelwider text-thm_secondary_color">
            Bring your broken, ready for trash bin device to our iFixandRepair
            Pasadena Walmart, and our experts will bring it back to life, you
            will not have to worry about a thing by leaving your device in our
            capable iFixandRepair Pasadena Walmart team hands.
          </p>
        </div>
        <div className="flex flex-col  gap-10 shadow-2xl px-4 py-16 md:p-10 rounded-tr-[100px] rounded-bl-[100px]">
          <div className="group flex  gap-10   md:p-5 hover:shadow-2xl lg:h-fit  lg:basis-1/3">
            <div className="w-16 h-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-20 h-20 shadow-2xl p-5 rounded-full"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
                  fill="#000"
                  className="fill-thm_secondary_color group-hover:fill-thm_root1_color"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-lg text-thm_primary_color tracking-littelwider">Free Diagnostic</h1>
              <p className="text-thm_secondary_color text-sm tracking-littelwider">
                Save time and find out what's wrong with your device at no cost.
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-10   md:p-5 hover:shadow-2xl lg:h-fit lg:basis-1/3">
          <div className="w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-20 h-20 shadow-2xl p-5 rounded-full"
            >
              <path
                d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12 16.0004 9.79086 14.2095 8 12.0004 8 9.79123 8 8.00037 9.79086 8.00037 12 8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"
                className="fill-thm_secondary_color group-hover:fill-thm_root1_color"
              ></path>
            </svg>
            </div>
            <div className="flex flex-col gap-1 tracking-littelwider">
              <h1 className="text-lg text-thm_primary_color">Price Match</h1>
              <p className="text-thm_secondary_color text-sm ">
                Get the lowest price for your repair!. Take a look at our{" "}
                <a data-toggle="modal" data-target="#pricePolicy">
                  <span className=" font-bold text-thm_primary_color">
                    price match policy.
                  </span>{" "}
                </a>{" "}
              </p>
            </div>
          </div>

          <div className="group flex items-center gap-10   md:p-5 hover:shadow-2xl lg:h-fit lg:basis-1/3">
          <div className="w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-20 h-20 shadow-2xl p-5 rounded-full"
            >
              <path
                d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
                className="fill-thm_secondary_color group-hover:fill-thm_root1_color"
              ></path>
            </svg>
            </div>
            <div className="flex flex-col gap-1 tracking-littelwider">
            <h1 className="text-lg text-thm_primary_color">Quick Turnaround</h1>
            <p className="text-thm_secondary_color text-sm ">
              Most of our repairs can be done in less than 30 minutes.{" "}
            </p>
            </div>
          </div>

          <div className="group flex items-center  gap-10   md:p-5 hover:shadow-2xl lg:h-fit lg:basis-1/3">
          <div className="w-16 h-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-20 h-20 shadow-2xl p-5 rounded-full"
            >
              <path
                d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"
                className="fill-thm_secondary_color group-hover:fill-thm_root1_color"
              ></path>
            </svg>
            </div>
            <div className="flex flex-col gap-1 tracking-littelwider">

            <h1 className="text-lg text-thm_primary_color">Lifetime Warranty</h1>
            <p className="text-thm_secondary_color text-sm ">
              Your repair is secure! Valid nationwide. Apply{" "}
              <a data-toggle="modal" data-target="#lifetimePolicy">
                <span className="font-bold text-thm_primary_color">
                  terms and conditions.
                </span>
              </a>{" "}
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LocationDetails;
