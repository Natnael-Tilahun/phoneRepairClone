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

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging: function(i) {
      return (
        <a className="">
          <div className="w-3 rounded-sm active:bg-thm_root1_color hover:bg-thm_root1_color hover:w-5  h-2 bg-black transform ease-in-out duration-700">
          </div>
        </a>
      );
    },
  };
  return (
    <>
      <div className="flex flex-col bg-thm_background px-4 py-2 md:py-12 md:px-12 lg:flex-row xl:px-32">
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
            iFixandRepair we strive to be experts in everything about repairs
            and accessories, from iPhone screen repairs to any brand water
            damage repairs. And we have achieved it! Repair is what we do, but
            the reason to do it is our customers.
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

      {/* <div className="w-full px-8 py-8 text-center md:px-12 md:text-left lg:flex-row xl:px-32">
        <h1 className="text-lg tracking-littelwider text-thm_primary_color">
          Your feedback makes us better, share your experience with us across
          our social media channels.
        </h1>
      </div> */}

      <div className="h-full z-10 w-screen bg-thm_background  px-0 py-12  md:px-12 xl:px-32">
        <h1 className="md:text-lg tracking-littelwider text-thm_primary_color px-6">
          Your feedback makes us better, share your experience with us across
          our social media channels.
        </h1>{" "}
        <Slider {...settings} className="w-full py-10">
        <div className="relative drop-shadow-xl shadow-md shadow-slate-200  rounded-lg h-full xl:h-72 flex w-full flex-col bg-thm_background py-14 px-8">
            <p className=" tracking-wider text-thm_secondary_color">
              Friendly people, great prices! They do price match with reputable
              phone stores and their repairs come with lifetime warranties! You
              cant beat it! 😁😁😁 Aleah has a very knowledgable staff and the
              owner Ron is awesome!
            </p>
            <h5 className="text-left text-lg tracking-wider py-5">Filipe C.</h5>
            <img
              alt="Satisfied Customer Profile Picture"
              src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/testimonial/review_1.jpg"
              className=" lazyload absolute inset-0  -top-10 left-5 z-50 h-16 w-16 rounded-full border-4 border-thm_background shadow-xl md:-left-10 md:top-1/3"
            />
          </div>
          <div className="drop-shadow-xl shadow-md  rounded-lg xl:h-72 z-50 flex w-full flex-col bg-thm_background py-14 px-8">
          <p className=" tracking-wider text-thm_secondary_color">
          Ive been there a few times and the customer service has always been great. Never had a problem and always left the store satisfied. Last time Natalie took care of me and solved the issue without a flaw.
          </p>
          <h5 className="text-left text-lg tracking-wider py-5">Bailey Salinger</h5>
            <img
              alt="Satisfied Customer Profile Picture"
              src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/testimonial/review_4.jpg"
              className="img-center lazyload absolute inset-0 block -top-10 left-5 z-50 h-16 w-16 rounded-full border-4 border-thm_background shadow-xl md:-left-10 md:top-1/3"
            />
          </div>
          <div className="drop-shadow-xl shadow-md  rounded-lg xl:h-72 z-50 flex w-full flex-col bg-thm_background py-14 px-8">
          <p className=" tracking-wider text-thm_secondary_color">
          Great Service and friendly staff! I brought my iPhone is believing that I had broken my screen, it was just my screen protector, these guys could have taken advantage of me. I will definitely be back and refer them to my friends!
          </p>
          <h5 className="text-left text-lg tracking-wider py-5">James Thomas</h5>
                 <img
              alt="Satisfied Customer Profile Picture"
              src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/testimonial/review_2.jpg"
              className="img-center lazyload absolute inset-0 block -top-10 left-5 z-50 h-16 w-16 rounded-full border-4 border-thm_background shadow-xl md:-left-10 md:top-1/3"
            />
          </div>
          <div className="drop-shadow-xl shadow-md  rounded-lg xl:h-72 z-50 flex w-full flex-col bg-thm_background py-14 px-8">
          <p className=" tracking-wider text-thm_secondary_color">
          Just had my phone looked at here and Robert went out of his way to help me . I really recommend this place for your phone repair. Very nice and helpful. He really helped us through this very pain of a time.
          </p>
          <h5 className="text-left text-lg tracking-wider py-5">Richard M.</h5>
          <img
            alt="Satisfied Customer Profile Picture"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/testimonial/review_3.jpg"
            className="img-center lazyload absolute inset-0 block -top-10 left-5 z-50 h-16 w-16 rounded-full border-4 border-thm_background shadow-xl md:-left-10 md:top-1/3"
            />    
          </div>
          <div className="drop-shadow-xl shadow-md  rounded-lg xl:h-72 z-50 flex w-full flex-col bg-thm_background py-14 px-8">
          <p className=" tracking-wider text-thm_secondary_color">
          These guys were great and were able to repair  my Apple Watch after the screen popped out of the case.  They replaced the battery, replaced the LED screen then ran all kinds of diagnostics at no extra cost. Highly recommend!
          </p>
          <h5 className="text-left text-lg tracking-wider py-5">Amy K.</h5>
          <img
            alt="Satisfied Customer Profile Picture"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/testimonial/review_5.jpg"
            className="img-center lazyload absolute inset-0 block -top-10 left-5 z-50 h-16 w-16 rounded-full border-4 border-thm_background shadow-xl md:-left-10 md:top-1/3"
            />
          </div>
          <div className="drop-shadow-xl shadow-md  rounded-lg xl:h-72 z-50 flex w-full flex-col bg-thm_background py-14 px-8">
          <p className=" tracking-wider text-thm_secondary_color">
          Chris was so knowledgeable and just a genuine guy!! He didn't try to just sell me a case. He gave me options, opinions and direction!! His customer service was top notch!! Thank You again, Chris for taking the time to connect and care!!
          </p>
          <h5 className="text-left text-lg tracking-wider py-5">Danyelle Grant</h5>
          <img
            alt="Satisfied Customer Profile Picture"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/testimonial/review_6.jpg"
            className="img-center lazyload absolute inset-0 block -top-10 left-5 z-50 h-16 w-16 rounded-full border-4 border-thm_background shadow-xl md:-left-10 md:top-1/3"
            />  
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
