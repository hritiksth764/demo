import React from "react";
import { useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { useTransitionNavigation } from "../hooks/useTransitionNavigation";
import logoImage from "../assets/REG web assets.svg";

const Navbar = () => {
  const location = useLocation();
  const { navigateWithTransition } = useTransitionNavigation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Legacy", path: "/about" },
    { label: "Community", path: "/community" },
    { label: "Offices", path: "/office" },
    { label: "Retail", path: "/retail" },
    { label: "Exclusive Access", path: "/apply" },
  ];

  return (
    <div className="w-full fixed z-[9999]">
      <nav
        className="text-white flex items-center justify-between px-8 sm:px-[9rem] py-1"
        style={{
          background: "rgba(0, 0, 0, 0.03)",

          backdropFilter: "blur(4px)",
        }}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigateWithTransition("/");
            }
          }}
          className="inline-block cursor-pointer"
        >
          <img src={logoImage} alt="Logo" className="sm:w-45 w-25 h-auto" />
        </a>

        <span className="md:hidden sm:hidden">
          <FiMenu className="text-xl " />
        </span>

        <div className="overflow-hidden m-0 block text-left sm:flex sm:items-center sm:gap-5 hidden ">
          {navItems.map((item, index) => (
            <div key={index}>
              <a
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname !== item.path) {
                    navigateWithTransition(item.path);
                  }
                }}
                style={{
                  color: "#EDB161",
                  fontFamily: "BonaNova",
                  letterSpacing: "0.01em",
                }}
                className={`inline-block cursor-pointer ${
                  location.pathname === item.path ? "underline" : ""
                }`}
              >
                {item.label}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
