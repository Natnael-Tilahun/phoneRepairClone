import React, { useState } from "react";
import Banner from "../components/Banner";
import StoreSearchInput from "../components/StoreSearchInput";
import { Button } from "../components/Button";

function ContactUs() {
  const [collapse, setCollapse] = useState(false);
  const collapseHandler = () => setCollapse((prevState) => !prevState);
  return (
    <div>
      <Banner
        title="Contact Us"
        img="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/banner/contact_banner.jpg"
      />
      <div className="flex w-full flex-col items-center gap-16 p-0 px-[5%] sm:px-[12%] md:px-[10%] lg:px-[5%] xl:px-32">
        <div className="flex h-full w-full flex-col  items-center justify-center bg-thm_background px-[5%] py-8 md:px-[10%] lg:px-[5%]">
          <h1 className="py-8 uppercase tracking-littelwider text-thm_primary_color">
            Broken Device? #Wecanfixit
          </h1>
          <div
            className=" flex w-full rounded-lg bg-thm_root1_color p-4 text-lg uppercase md:w-2/3 lg:w-1/2 "
            onClick={collapseHandler}
          >
            <h1 className="w-full text-center tracking-wider">
              Start your repair
            </h1>
            <p className="text-right">
              {!collapse ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  className=""
                >
                  <path
                    d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
                    fill="#000"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  className=""
                >
                  <path d="M19 11H5V13H19V11Z" fill="#000"></path>
                </svg>
              )}
            </p>
          </div>

          {collapse && (
            <div className=" flex  w-full flex-col  items-center gap-3 py-4">
              <p className="text-base  tracking-littelwider">
                Step 1: Find your nearest store
              </p>
              <StoreSearchInput />
            </div>
          )}
        </div>

        {/* Contact form Start */}
        <div className="w-full px-0 py-0">
          <h1 className="px-2 text-center text-lg uppercase tracking-littelwider">
            Have a question? Need help? get in touch with us
          </h1>
          <form className="flex flex-col gap-6 px-5 py-10 shadow-lg  lg:flex-row lg:flex-wrap lg:gap-x-10">
            <div className="flex flex-col gap-2 text-sm lg:basis-[48%]">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                required
                placeholder="Name"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              />
            </div>
            <div className="flex flex-col  gap-2 text-sm lg:basis-[48%]">
              <label htmlFor="name">Phone</label>
              <input
                type="number"
                required
                placeholder="Phone Number"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm lg:basis-[48%]">
              <label htmlFor="name">Email</label>
              <input
                type="email"
                required
                placeholder="Email"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm lg:basis-[48%]">
              <label htmlFor="name">Zip Code</label>
              <input
                type="text"
                required
                placeholder="Zip Code"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm lg:basis-[48%]">
              <label htmlFor="name">Invoice Number</label>
              <input
                type="text"
                placeholder="Invoice or receipt number (optional)"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              />
            </div>
            <div className="flex flex-col gap-2 text-sm lg:basis-[48%]">
              <label htmlFor="name">Store</label>
              <select
                name="store"
                required
                placeholder="Select Store (Optional)"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              >
                <option value="store one" selected disabled>
                  Select Store (Optional)
                </option>
                <option value="store one">Store one</option>
                <option value="store one">Store one</option>
                <option value="store one">Store one</option>
                <option value="store one">Store one</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 text-sm lg:basis-full">
              <label htmlFor="name">Comments</label>
              <textarea
                name="comment"
                placeholder="Leave a comment (optional)"
                className="h-36 rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color "
              ></textarea>
            </div>
            <Button
              firstLetter=""
              text="Send Message"
              className="rounded-md py-3 text-white"
            />
          </form>
        </div>
        {/* Contact form End */}

        {/* Get in touch section Start */}
        <div className="flex flex-col gap-10 py-0 lg:flex-row-reverse">
          <div className="flex flex-col gap-5 lg:justify-center">
            <h1 className="px-2 text-lg uppercase tracking-littelwider text-thm_primary_color">
              Other ways to get in touch with us
            </h1>
            <h1 className="text-lg tracking-littelwider">Social Media</h1>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="h-10 w-10 rounded-md border-2 p-2 "
              >
                <path
                  d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"
                  fill="#000"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="16"
                height="16"
                className="h-10 w-10 border-2 p-2"
              >
                <path
                  d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"
                  fill="#000"
                ></path>
              </svg>{" "}
            </div>
            <h1 className="text-lg tracking-littelwider">Email</h1>
            <div className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path
                    d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
                    fill="#000"
                    className="fill-thm_root1_color"
                  ></path>
                </svg>
              </span>
              <p className="text-sm tracking-wide text-thm_primary_color">
                info@ifixandrepair.com
              </p>
            </div>
          </div>
          <img
            alt="Contact Us Now"
            width="400px"
            src="https://ifixandrepair.com/wp-content/themes/ifix-theme-2.0/images/team/contact_daniela.png"
            className=" lazyload"
          />
        </div>
        {/* Get in touch section End */}
      </div>
    </div>
  );
}

export default ContactUs;
