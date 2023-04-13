import React from "react";

function HorizontalLine({ className }) {
  return (
    <div className={`flex justify-center py-2 ${className}`}>
      <hr className="w-8 rounded-md border-[1.9px] border-gray-300" />
      <hr className="w-8 rounded-md border-[1.9px] border-orange-500" />
    </div>
  );
}

export default HorizontalLine;
