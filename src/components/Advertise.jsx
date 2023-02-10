import React from "react";

function Advertise({ brands }) {
  return (
    <>
      <div className="my-16 lg:my-7 w-9/12 lg:w-[85vw] m-auto flex items-center justify-between xl:gap-7 overflow-x-scroll scroll-smooth scroll-hidden">
        {brands?.map((val, i) => (
          <img
            key={i}
            src={val.iconSrc}
            alt="brands-icons"
            className="w-44 h-auto object-fill xl:w-38 lg:w-22 hover:scale-105 transition-all duration-300 filter cursor-pointer drop-shadow-md"
          />
        ))}
      </div>
    </>
  );
}

export default Advertise;
