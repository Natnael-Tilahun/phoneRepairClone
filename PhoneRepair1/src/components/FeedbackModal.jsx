import React, { useState } from "react";
import { Button } from "./Button";

function FeedbackModal({ModalClosed, handleModalState}) {


  return (
    <>
      {ModalClosed && (
        <div className="fixed z-50 flex h-full w-full items-center justify-center bg-transparent">
          <div className="left-1/3 right-1/3 top-1/4 z-40 flex w-1/3 flex-col gap-4  rounded-lg bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <h1 className="text-sm tracking-wide text-thm_primary_color">
                Do you have any feedback about our new website?
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                onClick={handleModalState}
              >
                <path
                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                  fill="#000"
                  className="fill-thm_secondary_color"
                ></path>
              </svg>
            </div>
            <hr />
            <form   className="flex flex-col gap-6 text-sm">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color"
              />
              <textarea
                name="comment"
                required
                placeholder="Write your feedback"
                className="h-36 rounded-sm bg-thm_secondary_background p-3 outline-none ring-thm_root1_color focus:ring-1 focus:ring-thm_root1_color "
              ></textarea>
              <div className="flex gap-5">
                <Button
                  className="basis-1/2 cursor-pointer rounded-lg bg-thm_root1_color py-2 text-center"
                  firstLetter=""
                  text="Send"
                />
                <Button
                  className="w-full basis-1/2 cursor-pointer rounded-lg bg-thm_background bg-white py-2 text-center shadow-lg drop-shadow-2xl"
                  firstLetter=""
                  text="Close"
                  btnOnClick={handleModalState}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default FeedbackModal;
