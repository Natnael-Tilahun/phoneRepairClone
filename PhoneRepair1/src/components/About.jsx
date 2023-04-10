import React from "react";
import { Button } from "./Button";

function About() {
  return (
    <div className="flex flex-col items-center gap-5 px-4 pt-16 md:px-12 xl:px-32 lg:flex-row">
      <div className="flex flex-col items-center gap-2 lg:basis-1/2">
        <h1 className="text-center text-xl md:text-3xl">
          About{" "}
          <span className="font-medium text-thm_primary_color">
            iFixandRepair
          </span>
        </h1>
        <div className="flex justify-center py-2">
          <hr className="w-7 rounded-md border-[2px] border-gray-300" />
          <hr className="w-7 rounded-md border-[2px] border-orange-700" />
        </div>
        <p className=" pb-4 leading-7 text-gray-600">
          With 100+ locations Nationwide, here at iFixandRepair we specialize in
          cellphone repairs and other smart devices such as tablets, computers,
          drones, game consoles and much more. We’re committed to offer the best
          wireless repair services. Understanding the customer needs, we
          transform device issues into optimal solutions in the blink of an eye.
        </p>

        <Button
          text="ee About"
          firstLetter="S"
          className="rounded-lg font-medium"
        />
      </div>
      <img
        alt="Picture of Three iFixandRepair's Staff Members"
        width="600"
        src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/team.png"
        className="img-fluid lazyload lg:w-1/2 lg:basis-1/3"
      />
    </div>
  );
}

export default About;
