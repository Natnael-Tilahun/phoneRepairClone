import React from 'react'

function Partners() {
  return (
    <div className="flex flex-col bg-thm_background px-4 py-2 md:py-12 md:px-12 lg:flex-row xl:px-32">
           <h1 className="text-center text-2xl tracking-wider lg:text-4xl">
            Our Partners
          </h1>
          <div className="flex justify-center py-2">
            <hr className="w-7 rounded-md border-[2px] border-gray-300" />
            <hr className="w-7 rounded-md border-[2px] border-orange-700" />
          </div>
    </div>
  )
}

export default Partners