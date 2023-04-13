import React from "react";
import HorizontalLine from "../utils/HorizontalLine";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

function About() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    initialSlide: 0,
    lazyLoad: true,
    autoplay: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: false,
      //   },
      // },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 750,
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

const myStyle = {
  backgroundColor: "blue",
  marginRight: "10px",
  marginLeft: "10px"
}

  return (
    <div className="h-full w-full ">
      <div>
        {/* Banner start */}
        <div className="relative flex h-16 w-full  items-center  bg-cover bg-center bg-no-repeat text-lg md:h-56 md:bg-[url('https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/about_banner.jpg')]">
        <div className="absolute inset-0 bg-thm_root1_color bg-gradient-to-r from-cyan-500 to-indigo-800 opacity-40"></div>
        <div className="absolute left-[10%] right-[10%]  bg-gray-800 opacity-80 md:py-4 px-6 rounded-lg">
          <h1 className="text-2xl md:text-6xl font-medium text-white text-center md:text-left max-w-3xl">
           About Us
          </h1>
    </div>
        </div>
        {/* Banner End */}

        <div className="flex w-full flex-col p-20 px-[5%] sm:px-[12%] md:px-[8%] lg:px-[5%]  xl:px-12">
          <div className="flex w-full flex-col gap-5 md:gap-0 lg:flex-row">
            <div className="flex basis-[50%] flex-col items-center gap-3">
              <img
                alt=""
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/ceo.jpg"
                className="lazyload rounded-xl lg:w-[75%]"
              />
              <p className="text-thm_secondary_color">Our Founders</p>
            </div>
            <div className="flex basis-1/2 flex-col items-start justify-start gap-2 lg:gap-5">
              <h1 className="text-3xl tracking-littelwider text-thm_primary_color">
                iFixandRepair
              </h1>
              <HorizontalLine className="" />
              <p className="leading-7 tracking-wider text-thm_secondary_color">
                With 100+ locations Nationwide, here at iFixandRepair we
                specialize in cellphone repairs and other smart devices such as
                tablets, computers, drones, game consoles and much more. We’re
                committed to offer the best wireless repair services.
                Understanding the customer needs, we transform device issues
                into optimal solutions in the blink of an eye.
              </p>
              <h5 className="pt-3 text-2xl tracking-wider text-thm_primary_color lg:pt-0">
                Why trust us?
              </h5>
    
              <div className="w-8 h-8 relative">
      <div className="absolute inset-0 border border-blue-500 animate-square"></div>
    </div>

              <p className="leading-7 tracking-wider text-thm_secondary_color">
                We are proud of our years of expertise that have turned into
                countless successful repairs and happy customers. Thanks to the
                good-quality products we carry and the best repair skills in the
                market, we position ourselves as industry leaders in device
                repairs.
              </p>
            </div>
          </div>

          {/* core value Start */}
          <div className="flex w-full flex-col flex-wrap gap-10 py-10 md:flex-row lg:p-20 ">
            <div className="flex w-full items-center justify-center gap-6 md:basis-[45%]">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-thm_background p-5 shadow-xl drop-shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 "
                >
                  <path
                    d="M3.16113 4.46875C5.58508 2.0448 9.44716 1.9355 12.0008 4.14085C14.5528 1.9355 18.4149 2.0448 20.8388 4.46875C23.2584 6.88836 23.3716 10.741 21.1785 13.2947L13.4142 21.0858C12.6686 21.8313 11.4809 21.8652 10.6952 21.1874L10.5858 21.0858L2.82141 13.2947C0.628282 10.741 0.741522 6.88836 3.16113 4.46875ZM4.57534 5.88296C2.86819 7.59011 2.81942 10.3276 4.42902 12.0937L4.57534 12.2469L12 19.6715L17.3026 14.3675L13.7677 10.8327L12.7071 11.8934C11.5355 13.0649 9.636 13.0649 8.46443 11.8934C7.29286 10.7218 7.29286 8.8223 8.46443 7.65073L10.5656 5.54823C8.85292 4.17713 6.37076 4.23993 4.7286 5.73663L4.57534 5.88296ZM13.0606 8.71139C13.4511 8.32086 14.0843 8.32086 14.4748 8.71139L18.7168 12.9533L19.4246 12.2469C21.1819 10.4896 21.1819 7.64032 19.4246 5.88296C17.7174 4.17581 14.9799 4.12704 13.2139 5.73663L13.0606 5.88296L9.87864 9.06494C9.51601 9.42757 9.49011 9.99942 9.80094 10.3919L9.87864 10.4792C10.2413 10.8418 10.8131 10.8677 11.2056 10.5569L11.2929 10.4792L13.0606 8.71139Z"
                    fill="#000"
                    className="fill-thm_secondary_color"
                  ></path>
                </svg>{" "}
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h4 className="text-lg tracking-wider text-thm_primary_color md:text-2xl">
                  Integrity
                </h4>
                <p className="text-sm leading-6 tracking-wide text-thm_secondary_color md:text-base md:leading-7">
                  Transparency is what defines us. We strive to create clear
                  long term business and customer relationships.
                </p>
              </div>
            </div>
            <div className="flex basis-[45%] items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-thm_background p-5 shadow-xl drop-shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                >
                  <path
                    d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"
                    fill="#000"
                    className="fill-thm_secondary_color"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-lg tracking-wider text-thm_primary_color md:text-2xl">
                  Commitment
                </h4>
                <p className="text-sm leading-6 tracking-wide text-thm_secondary_color md:text-base md:leading-7">
                  Thanks to the hard work of each person who works in this
                  company, all of us can improve, create added value and hit the
                  goals.
                </p>
              </div>
            </div>
            <div className="flex basis-[45%] items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-thm_background p-5 shadow-xl drop-shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                >
                  <path
                    d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13Z"
                    fill="#000"
                    className="fill-thm_secondary_color"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-lg tracking-wider text-thm_primary_color md:text-2xl">
                  Excellence
                </h4>
                <p className="text-sm leading-6 tracking-wide text-thm_secondary_color md:text-base md:leading-7">
                  Everything that we do or make is in the best and correct way
                  respecting all of our suppliers, colleagues, partners and
                  customers.
                </p>
              </div>
            </div>
            <div className="flex basis-[45%] items-center gap-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-thm_background p-5 shadow-xl drop-shadow-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-10 w-10"
                >
                  <path
                    d="M14.5998 8.00033H21C22.1046 8.00033 23 8.89576 23 10.0003V12.1047C23 12.3659 22.9488 12.6246 22.8494 12.8662L19.755 20.3811C19.6007 20.7558 19.2355 21.0003 18.8303 21.0003H2C1.44772 21.0003 1 20.5526 1 20.0003V10.0003C1 9.44804 1.44772 9.00033 2 9.00033H5.48184C5.80677 9.00033 6.11143 8.84246 6.29881 8.57701L11.7522 0.851355C11.8947 0.649486 12.1633 0.581978 12.3843 0.692483L14.1984 1.59951C15.25 2.12534 15.7931 3.31292 15.5031 4.45235L14.5998 8.00033ZM7 10.5878V19.0003H18.1606L21 12.1047V10.0003H14.5998C13.2951 10.0003 12.3398 8.77128 12.6616 7.50691L13.5649 3.95894C13.6229 3.73105 13.5143 3.49353 13.3039 3.38837L12.6428 3.0578L7.93275 9.73038C7.68285 10.0844 7.36341 10.3746 7 10.5878ZM5 11.0003H3V19.0003H5V11.0003Z"
                    fill="#000"
                    className="fill-thm_secondary_color"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-lg tracking-wider text-thm_primary_color md:text-2xl">
                  Customer is First
                </h4>
                <p className="text-sm leading-6 tracking-wide text-thm_secondary_color md:text-base md:leading-7">
                  Customer service is an integral component to our business
                  success. It’s all about knowing what our customers want, their
                  needs, and their habits.
                </p>
              </div>
            </div>
          </div>
          {/* core value End */}
        </div>

        {/* Company Status Start */}
        <div className="flex w-full flex-col flex-wrap gap-10 md:gap-5 bg-thm_secondary_background px-[5%] py-12 sm:px-[12%] md:flex-row md:px-[8%] lg:flex-nowrap lg:px-[5%]  xl:px-12">
          <div className="flex flex-col items-center justify-center gap-4  rounded-lg bg-thm_background p-10 shadow-md md:basis-[45%] lg:basis-[25%] ">
            <h1 className="whitespace-nowrap text-4xl tracking-wide text-thm_primary_color md:text-6xl lg:text-4xl">
              10+
            </h1>
            <p className="text-center text-xl tracking-littelwider text-thm_secondary_color lg:text-2xl">
              Years of Experience
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4  rounded-lg bg-thm_background p-10 shadow-md md:basis-[45%] lg:basis-[25%] ">
            <h1 className="whitespace-nowrap text-4xl tracking-wide text-thm_primary_color md:text-6xl lg:text-4xl">
              80+
            </h1>
            <p className="text-center text-xl tracking-littelwider text-thm_secondary_color lg:text-2xl">
              Repair Stores
            </p>
          </div>
          <div className="flex flex-col items-center justify-center  gap-4  rounded-lg bg-thm_background p-10 shadow-md md:basis-[45%] lg:basis-[25%] ">
            <h1 className="whitespace-nowrap text-4xl tracking-wide text-thm_primary_color md:text-6xl lg:text-4xl">
              280+
            </h1>
            <p className="text-center text-xl tracking-littelwider text-thm_secondary_color lg:text-2xl">
              Qualified Staff
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4  rounded-lg bg-thm_background p-10 shadow-md md:basis-[45%] lg:basis-[25%] ">
            <h1 className="whitespace-nowrap text-4xl tracking-wide text-thm_primary_color md:text-6xl lg:text-4xl">
              2 Million
            </h1>
            <p className="text-center text-xl tracking-littelwider text-thm_secondary_color lg:text-2xl">
              Happy Customers
            </p>
          </div>
        </div>
        {/* Company Status End */}

        {/* Comapany Teams Start */}
        <div className="flex w-full flex-col flex-wrap items-center gap-3 bg-thm_background px-[5%] py-12 sm:px-[12%] md:px-[8%] lg:flex-nowrap lg:px-[5%]  xl:px-12">
          <h1 className="text-center text-2xl tracking-wider">
            iFixandReapir Team
          </h1>
          <HorizontalLine className="" />
          <p className="text-center tracking-wider text-thm_secondary_color ">
            Meet the people behind our company, we are as human as you, that's
            why we understand you
          </p>

          <Slider {...settings} className="team_slider w-full  py-4 slick-list">
            <div style={myStyle} className="team_slide relative max-w-sm overflow-hidden rounded shadow-lg group">
              <img
                className="w-full"
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/Andrea.jpg"
                alt="Andrea Osoria photo"
              />
              <div className="absolute group-hover:py-6 bottom-0 text-center w-full bg-thm_background px-6 py-4 transition-all duration-500">
                <h1>Team Leader</h1>
                <p className="text-2xl text-thm_root1_color">Andreaa Osorio</p>
              </div>
            </div>

            <div  className="team_slide relative max-w-sm overflow-hidden rounded shadow-lg group">
              <img
                className="w-full"
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/will.jpg"
                alt="Andrea Osoria photo"
              />
              <div className="absolute group-hover:py-6 bottom-0 text-center w-full bg-thm_background px-6 py-4 transition-all duration-500">
                <h1>Sales Director</h1>
                <p className="text-2xl text-thm_root1_color">Will Iremonger</p>
              </div>
            </div>

            <div  className="team_slide relative max-w-sm overflow-hidden rounded shadow-lg group">
              <img
                className="w-full"
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/felipe.jpg"
                alt="Andrea Osoria photo"
              />
              <div className="absolute group-hover:py-6 bottom-0 text-center w-full bg-thm_background px-6 py-4 transition-all duration-500">
                <h1>Graphic Designer</h1>
                <p className="text-2xl text-thm_root1_color">Felipe Cervera</p>
              </div>
            </div>

            <div  className="team_slide relative max-w-sm overflow-hidden rounded shadow-lg group">
              <img
                className="w-full"
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/daniela.jpg"
                alt="Andrea Osoria photo"
              />
              <div className="absolute group-hover:py-6 bottom-0 text-center w-full bg-thm_background px-6 py-4 transition-all duration-500">
                <h1>Marketing Executive</h1>
                <p className="text-2xl text-thm_root1_color">Daniela Marmolejo</p>
              </div>
            </div>

            <div className="team_slide relative max-w-sm overflow-hidden rounded shadow-lg group">
              <img
                className="w-full"
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/pili.jpg"
                alt="Andrea Osoria photo"
              />
              <div className="absolute group-hover:py-6 bottom-0 text-center w-full bg-thm_background px-6 py-4 transition-all duration-500">
                <h1>Bookkeeper</h1>
                <p className="text-2xl text-thm_root1_color">Maria Castaño</p>
              </div>
            </div>


            <div className="team_slide relative max-w-sm overflow-hidden rounded shadow-lg group">
              <img
                className="w-full"
                src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/ron.jpg"
                alt="Andrea Osoria photo"
              />
              <div className="absolute group-hover:py-6 bottom-0 text-center w-full bg-thm_background px-6 py-4 transition-all duration-500">
                <h1>District Manager</h1>
                <p className="text-2xl text-thm_root1_color">Ron Coleman</p>
              </div>
            </div>
          </Slider>
        </div>
        {/* Comapany Teams End */}
      </div>
    </div>
  );
}

export default About;
