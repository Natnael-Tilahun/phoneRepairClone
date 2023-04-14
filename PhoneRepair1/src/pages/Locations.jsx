import React from "react";
import Banner from "../components/Banner";
import StoreSearchInput from "../components/StoreSearchInput";
import Process from "../features/Process";

function Locations() {
  return (
    <div className="h-full w-full">
      <Banner
        title="Find your store"
        img="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/locations_banner.jpg"
      />
      <div className="flex w-full flex-col items-center gap-5 p-20 px-[5%] sm:px-[12%] md:px-[10%] lg:flex-row lg:px-[5%] xl:px-32">
        <div className="basis-full flex-col  items-center justify-center lg:basis-[30%] xl:basis-1/2">
          <StoreSearchInput />
          <img
            alt=""
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/stores.jpg"
            className="lazyload hidden lg:block"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center lg:basis-[70%] xl:basis-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.506171268007!2d-95.16394808490709!3d29.647082882028634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864098de5f791c6b%3A0x4d7e5db2acb8a738!2siFixandRepair%20-%20Phones%20%2C%20Computer%20%26%20Tablet%20Repair%20Pasadena!5e0!3m2!1sen!2sus!4v1681484017019!5m2!1sen!2sus"
            className="h-80 w-full lg:h-[350px] lg:w-[600px] xl:h-[450px] xl:w-[700px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Process
        className="gap-10 bg-thm_background py-5 md:py-10"
        horizontalLine={true}
      />
    </div>
  );
}

export default Locations;
