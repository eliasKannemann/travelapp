import React from "react";

function Footer({ footerAPI: { titles, links, sociallinks } }) {
  return (
    <>
      <footer className=" bg-gradient-to-b from-emerald-400 to-green-300 pt-24 pb-7">
        <div className="grid items-center grid-cols-3 justify-items-center">
          {titles?.map((val, i) => {
            <div className="grid items-center justify-items-center" key={i}>
              <h1 className="text-xl lg:text-base uppercase font-semibold">
                {val.title}
              </h1>
            </div>;
          })}
          {links.map((list, i) => (
            <ul
              key={i}
              className="grid items-center justify-items-center gap-1"
            >
              {list?.map((val, i) => (
                <li className="font-mono text-sm sm:text-xs"></li>
              ))}
            </ul>
          ))}
        </div>
        <div className="w-7/12 lg:w-[95vh] m-auto mt-9">
          <div className="h-[0.1vh] bg-black/30 my-7 md:my-5"></div>
          <div className="flex items-center justify-between px-7 md:px-0 md:gap-5 md:flex-col-reverse">
            <p className="text-sm md:text-center">
              Copyright <sup className="text-base font-bold"></sup>
            </p>
            <div className="">&copy;</div> All Reserved Rights 2023
            <span className="font-semibold">Eliasdev</span>
            <div className="flex items-center gap-3">
              {sociallinks?.map((val, i) => (
                <img
                  key={i}
                  src={val.icon}
                  alt="icon-social"
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
