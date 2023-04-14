import React from "react";

export default function Pagination({ className }) {
  return (
    <div>
      <a className="">
        <div
          className={`h-2 transform rounded-sm bg-black  duration-700 ease-in-out hover:w-5 hover:bg-thm_root1_color active:bg-thm_root1_color ${className}`}
        ></div>
      </a>
    </div>
  );
}
