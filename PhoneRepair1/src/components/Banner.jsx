import React from "react";

function Banner({title, img}) {
  return (
    <div>
      <div className={` relative flex h-16 w-full  items-center  bg-cover bg-center bg-no-repeat text-lg md:h-56  md:bg-[url(${img})]`}>
        <div className="absolute inset-0 bg-thm_root1_color bg-gradient-to-r from-cyan-500 to-indigo-800 opacity-40"></div>
        <div className="absolute left-[10%] right-[10%] py-2 lg:w-1/2 rounded-lg  bg-gray-800 px-6 opacity-70 md:bottom-[10%] md:py-2">
          <h1 className="max-w-3xl text-center  text-2xl font-medium text-white md:text-left md:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;
