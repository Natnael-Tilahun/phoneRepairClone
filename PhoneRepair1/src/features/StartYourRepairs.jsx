import React,{useState} from 'react'

function StartYourRepairs({}) {
    const [collapse, setCollapse] = useState(false);
    collapseHandler = () => setCollapse((prevState) => !prevState);

  return (
    <div
    className=" flex w-full rounded-lg bg-thm_root1_color p-4 text-lg uppercase md:w-2/3 lg:w-1/2 "
    onClick={onClick}
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
  </div>  )
}

export default StartYourRepairs