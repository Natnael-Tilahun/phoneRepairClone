import React from "react";

function Features() {
  return (
    <>
      <section className="relative flex h-[450px] w-full items-center justify-center bg-[url('https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/why_choose_us.jpg')] bg-cover bg-center bg-no-repeat p-5">
        <div className="absolute inset-0 bg-thm_root1_color bg-gradient-to-r from-cyan-400 to-indigo-950 opacity-60"></div>
        <div className="absolute inset-0 left-6 right-6 top-1/3 flex h-fit flex-col justify-center bg-gray-600 p-4 text-center text-white opacity-80 lg:left-[20%] lg:right-[20%]">
          <h1 className="text-2xl lg:text-3xl tracking-littelwider">
            Why <strong>choose</strong> iFixandRepair?
          </h1>
          <p className="pt-2 text-center tracking-wider lg:text-xl">
            We understand the frustration of a broken divice. Let us be the
            superheroes you need to bring your device back to life, expertly and
            in a timely manner.
          </p>
        </div>
      </section>

      <div className=" z-50 -mt-10 flex flex-col gap-3 px-4 md:px-12 xl:px-32 lg:flex-row lg:gap-6">
        <div className="flex flex-col gap-3 rounded-md bg-thm_background p-5 shadow-lg lg:h-fit lg:basis-1/3  hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20"
          >
            <path
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z"
              fill="#000"
              className="fill-thm_secondary_color hover:fill-thm_root1_color"
            ></path>
          </svg>{" "}
          <h1 className="text-xl">Free Diagnostic</h1>
          <p className="text-thm_secondary_color">
            Save time and find out what's wrong with your device at no cost.
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-md bg-thm_background p-5 shadow-lg lg:h-fit lg:basis-1/3 hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20"
          >
            <path
              d="M12.0004 16C14.2095 16 16.0004 14.2091 16.0004 12 16.0004 9.79086 14.2095 8 12.0004 8 9.79123 8 8.00037 9.79086 8.00037 12 8.00037 14.2091 9.79123 16 12.0004 16ZM21.0049 4.00293H3.00488C2.4526 4.00293 2.00488 4.45064 2.00488 5.00293V19.0029C2.00488 19.5552 2.4526 20.0029 3.00488 20.0029H21.0049C21.5572 20.0029 22.0049 19.5552 22.0049 19.0029V5.00293C22.0049 4.45064 21.5572 4.00293 21.0049 4.00293ZM4.00488 15.6463V8.35371C5.13065 8.017 6.01836 7.12892 6.35455 6.00293H17.6462C17.9833 7.13193 18.8748 8.02175 20.0049 8.3564V15.6436C18.8729 15.9788 17.9802 16.8711 17.6444 18.0029H6.3563C6.02144 16.8742 5.13261 15.9836 4.00488 15.6463Z"
              className="fill-thm_secondary_color hover:fill-thm_root1_color"
            ></path>
          </svg>
          <h1 className="text-xl">Price Match</h1>
          <p className="text-thm_secondary_color">
            Get the lowest price for your repair!. Take a look at our{" "}
            <a data-toggle="modal" data-target="#pricePolicy">
              <span className=" font-bold text-thm_primary_color">
                price match policy.
              </span>{" "}
            </a>{" "}
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-md bg-thm_background p-5 shadow-lg lg:h-fit lg:basis-1/3 hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20"
          >
            <path
              d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
              className="fill-thm_secondary_color hover:fill-thm_root1_color"
            ></path>
          </svg>
          <h1 className="text-xl">Quick Turnaround</h1>
          <p className="text-thm_secondary_color">
            Most of our repairs can be done in less than 30 minutes.{" "}
          </p>
        </div>

        <div className="flex flex-col gap-3 rounded-md bg-thm_background p-5 shadow-lg lg:h-fit lg:basis-1/3 hover:shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-20"
          >
            <path
              d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM5 4.60434V13.7889C5 15.1263 5.6684 16.3752 6.7812 17.1171L12 20.5963L17.2188 17.1171C18.3316 16.3752 19 15.1263 19 13.7889V4.60434L12 3.04879L5 4.60434Z"
              className="fill-thm_secondary_color hover:fill-thm_root1_color"
            ></path>
          </svg>
          <h1 className="text-xl">Lifetime Warranty</h1>
          <p className="text-thm_secondary_color">
            Your repair is secure! Valid nationwide. Apply{" "}
            <a data-toggle="modal" data-target="#lifetimePolicy">
              <span className="font-bold text-thm_primary_color">
                terms and conditions.
              </span>
            </a>{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default Features;
