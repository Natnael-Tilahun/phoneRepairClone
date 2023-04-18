import React, { useState, useEffect } from "react";

function ScrollTopAndFeedback({handleModalState}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      {isVisible && (
        <div className="flex gap-3 fixed right-6 bottom-8 ">
          <div
            className=" flex w-full cursor-pointer items-center justify-center rounded-md bg-thm_root1_color shadow-2xl drop-shadow-2xl shadow-gray-500 hover:bg-thm_background"
            onClick={handleModalState}
          >
            <h1 className="tracking-wide">Feedback</h1>
          </div>
          <div
            className=" flex h-14 cursor-pointer w-24 items-center justify-center rounded-md bg-thm_root1_color shadow-2xl drop-shadow-2xl shadow-gray-500 hover:bg-thm_background"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="h-10 w-10"
            >
              <path
                d="M12.9999 7.82843V20H10.9999V7.82843L5.63589 13.1924L4.22168 11.7782L11.9999 4L19.778 11.7782L18.3638 13.1924L12.9999 7.82843Z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScrollTopAndFeedback;
