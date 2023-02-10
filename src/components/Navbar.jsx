import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import menu from "../images/menu.svg";
import PopupMenu from "./PopupMenu";

function Navbar({ navlinks }) {
  const [popUpState, setPopUpState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopUp = () => setPopUpState(!popUpState);

  const onNavScroll = () => {
    if (window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  return (
    <>
      <header className={`nav-default ${navState && "nav-sticky"}`}>
        <nav className="flex items-center justify-between travelapp-container ">
          <NavLink to={`/`} className="flex items-center">
            <img src={logo} alt="logo-img" className="w-22 h-9 object-fill" />
          </NavLink>
          <ul className="flex items-center lg:hidden gap-7">
            {navlinks.map((val, i) => (
              <li key={i}>
                <NavLink to={`#`} className="text-lg text-slate-900">
                  {val.link}
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center lg:hidden gap-7">
            <li>
              <button type="button" className="button-emerald px-7 text-base ">
                join us
              </button>
            </li>
          </ul>
          <ul className="hidden lg:flex items-center">
            <li>
              <button
                type="button"
                className="flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
                onClick={onTriggerPopUp}
              >
                <img
                  src={menu}
                  alt="menu-svg"
                  className="object-cover shadow-sm filter "
                />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popUpState={popUpState} />
    </>
  );
}

export default Navbar;
