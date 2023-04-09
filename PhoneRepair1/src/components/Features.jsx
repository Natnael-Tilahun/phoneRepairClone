import React from "react";

function Features() {
  return (
    <section className="relative block h-[550px] w-full bg-[url('https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/why_choose_us.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-thm_root1_color bg-gradient-to-r from-cyan-600 to-indigo-950 opacity-60"></div>
      <div className="absolute inset-0 z-50 flex gap-3 flex-col items-center justify-center w-1/2 mx-auto text-thm_root2_color bg-gray-700 opacity-70 my-48 px-4">
        <h1 className="text-5xl">Why choose iFixandRepair?</h1>
        <p className="text-xl text-center">
          We understand the frustration of a broken divice. Let us be the
          superheroes you need to bring your device back to life, expertly and
          in a timely manner.
        </p>
      </div>
    </section>
  );
}

export default Features;
