import React from "react";

function Testimonial() {
  return (
    <div className="flex flex-col bg-thm_background px-4 py-20 md:px-12 lg:flex-row xl:px-32">
      <div className="lg:basis-[50%]">
        <img
          alt="iFixandReapir's staff member handing a repaired device to a happy customer"
          src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/12.png"
          className="img-fluid lazyload"
        />
      </div>
      <div className="flex flex-col items-center gap-4 pt-10 lg:basis-[50%]">
        <h1 className="text-center text-2xl tracking-wider lg:text-4xl">
          Happy Customers
        </h1>
        <div className="flex justify-center py-2">
          <hr className="w-7 rounded-md border-[2px] border-gray-300" />
          <hr className="w-7 rounded-md border-[2px] border-orange-700" />
        </div>
        <p className="text-left text-thm_secondary_color">
          Our main purpose is to give you the best service. That's why in
          iFixandRepair we strive to be experts in everything about repairs and
          accessories, from iPhone screen repairs to any brand water damage
          repairs. And we have achieved it! Repair is what we do, but the reason
          to do it is our customers.
        </p>
        <div className="flex w-full flex-col gap-6 px-6 md:flex-row">
          <div className="flex basis-1/2 flex-col items-center gap-3 py-12 shadow-lg">
            <h1 className="text-4xl tracking-littelwider text-thm_primary_color">
              1M+
            </h1>
            <h1 className="text-xl tracking-wider">Repairs</h1>
          </div>
          <div className="flex basis-1/2 flex-col items-center gap-3 py-12 shadow-lg">
            <h1 className="text-4xl tracking-littelwider text-thm_primary_color">
              2M+
            </h1>
            <h1 className="text-xl tracking-wider">Happy Customers</h1>
          </div>
        </div>
      </div>
      {/* <div className="w-full px-6 py-12">
        <h1 className="text-thm_primary_color text-lg tracking-wider">
          Your feedback makes us better, share your experience with us across
          our social media channels.
        </h1>
      </div> */}
    </div>
  );
}

export default Testimonial;
