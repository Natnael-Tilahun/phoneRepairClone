import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: function (i) {
      return (
        <a className="">
          <div className="h-2 w-3 transform rounded-sm bg-black  duration-700 ease-in-out hover:w-5 hover:bg-thm_root1_color active:bg-thm_root1_color"></div>
        </a>
      );
    },
  };

  return (
    <div className="flex flex-col bg-thm_background px-0 py-4 md:px-12 md:py-20 xl:px-20 xl:py-32">
      <h1 className="text-center text-2xl tracking-wider lg:text-4xl">
        Our Partners
      </h1>
      <div className="flex justify-center py-2">
        <hr className="w-7 rounded-md border-[2px] border-gray-300" />
        <hr className="w-7 rounded-md border-[2px] border-orange-700" />
      </div>

      <Slider {...settings} className="py-10" >
        <div  className="flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/casemate.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            A functional, unique and protective style
          </p>
        </div>

        <div className="flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/cellhelmet.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            Buy with confidence
          </p>
        </div>

        <div className="flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/dji.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            The tools you need to bring your ideas to life
          </p>
        </div>

        <div className="flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/gear4.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            The protection that your phone needs{" "}
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/incipio.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            Enriching your digital lifestyle, protecting your tech
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/lifeproof.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            Action and adventure are primal urges
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/mophie.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            Never worry about staying connected
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/otter.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            Protect what matters most
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/speck.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            NOT only fit your devices but also your lifestyle
          </p>
        </div>

        <div className=" flex flex-col items-center  justify-center p-4 shadow-xl drop-shadow-xl rounded-lg">
          <img
            alt="Case Mate Logo"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/partners/ventev.png"
            className="lazyload mx-auto"
          />
          <p className="py-3 text-center tracking-wider text-thm_secondary_color">
            Designed for life
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default Partners;
