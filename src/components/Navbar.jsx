import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [isPastHero, setIsPastHero] = useState(false);

  // Navbar backgrounds
  const navBackgroundClosed = {
    background: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(0px)",
  };

  const navBackgroundOpen = {
    background: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(20px)",
  };

  // Hide navbar after scrolling past hero section
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight || 0;
      const pastHeroThreshold = heroHeight * 0.85;
      setIsPastHero(window.scrollY > pastHeroThreshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when menu is open for a more immersive, luxury feel
  useEffect(() => {
    if (typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = previousOverflow || "";
    }

    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleExclusiveAccessClick = (e) => {
    e.preventDefault();
    if (location.pathname !== "/apply") {
      navigateWithTransition("/apply");
    }
  };

  const handleMenuItemClick = (e, path) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (location.pathname !== path) {
      navigateWithTransition(path);
    }
  };

  const menuItems = navItems.filter(
    (item) => item.label !== "Exclusive Access"
  );

  const subNavItems = {
    Legacy: [
      { label: "Our Legacy", path: "/about" },
      { label: "Our Location", path: "/about#location" },
      { label: "Our Team", path: "/about#team" },
    ],
  };

  // Set active menu item when overlay opens, default to current route match
  useEffect(() => {
    if (!isMenuOpen) {
      setActiveMenuItem(null);
      return;
    }
    const current = menuItems.find((item) => item.path === location.pathname);
    setActiveMenuItem(current ? current.label : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen, location.pathname]);

  const currentBackground = isMenuOpen
    ? navBackgroundOpen
    : navBackgroundClosed;

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[9999] transform transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)] ${
        isPastHero && !isMenuOpen
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      style={currentBackground}
    >
      <nav className="text-white flex items-center justify-between px-4 sm:px-[9rem] py-3">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname !== "/") {
              navigateWithTransition("/");
            }
          }}
          className="inline-flex items-center cursor-pointer"
        >
          <img src={logoImage} alt="Logo" className="h-10 sm:h-24 w-auto" />
        </a>
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handleMenuToggle}
            className="flex items-center justify-center rounded-full border border-[#BB924D] px-8 py-1.5 sm:px-11 sm:py-3 text-[10px] sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] uppercase relative overflow-hidden group transition-colors duration-500 hover:bg-white/5"
            style={{
              color: "#BB924D",
              fontFamily: "BonaNova",
            }}
          >
            <span className="relative inline-flex items-center justify-center h-[1.2em] leading-none">
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(.19,1,.22,1)] ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  fontFamily: "BonaNova",
                  letterSpacing: "0.2em",
                  fontWeight: "400",
                }}
              >
                MENU
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(.19,1,.22,1)] ${
                  isMenuOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  color: "#BB924D",
                  fontFamily: "BonaNova",
                  letterSpacing: "0.2em",
                  fontWeight: "400",
                }}
              >
                CLOSE
              </span>
            </span>
          </button>

          <a
            href="/apply"
            onClick={handleExclusiveAccessClick}
            className="hidden sm:inline-flex items-center justify-center rounded-full border border-[#BB924D] px-8 py-1.5 sm:px-11 sm:py-3 text-[10px] sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-white/5"
            style={{
              color: "#BB924D",
              fontFamily: "BonaNova",
              fontWeight: "400",
            }}
          >
            EXCLUSIVE&nbsp;ACCESS
          </a>
        </div>
      </nav>

      {/* Overlay Menu (appears below navbar, keeps navbar visible, full viewport height) */}
      <div
        className={`w-full text-white overflow-hidden origin-top transform transition-opacity duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)] ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="px-8 sm:px-[9rem] pt-[2vw] sm:pt-[2vw] flex flex-col gap-5 sm:gap-5">
          {menuItems.map((item, index) => {
            const delay = index * 80;
            const isActive = activeMenuItem === item.label;
            const hasSub = !!subNavItems[item.label];
            const isSubActive = isActive && isMenuOpen && hasSub;

            return (
              <div
                key={item.label}
                className="relative flex items-start justify-between gap-4 sm:gap-2"
              >
                {/* Left: main nav item */}
                <button
                  type="button"
                  onClick={(e) => {
                    if (hasSub) {
                      e.preventDefault();
                      setActiveMenuItem((prev) =>
                        prev === item.label ? null : item.label
                      );
                    } else {
                      handleMenuItemClick(e, item.path);
                    }
                  }}
                  className={`cursor-pointer text-left text-lg sm:text-[3vw] uppercase tracking-[0.18em] transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] hover:text-[#EDB161] ${
                    isMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  } ${isActive ? "" : ""}`}
                  style={{
                    width: "auto",
                    fontWeight: "400",
                    fontFamily: "BonaNova",
                    letterSpacing: "0.1em",
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {item.label}
                </button>

                {/* Right: sub-nav aligned with LEGACY but not affecting row height */}
                <div className="hidden sm:block flex-1">
                  {hasSub && (
                    <div className="absolute top-0 right-[20vw] flex flex-col space-y-3">
                      {subNavItems[item.label].map((subItem, idx) => (
                        <a
                          key={subItem.label}
                          href={subItem.path}
                          onClick={(e) => handleMenuItemClick(e, subItem.path)}
                          className={`block tracking-[0.2em] uppercase text-[#EDB161] transition-all duration-[900ms] ease-[cubic-bezier(.19,1,.22,1)] ${
                            isSubActive
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2 pointer-events-none"
                          }`}
                          style={{
                            fontSize: "2vw",
                            letterSpacing: "0.1em",
                            fontWeight: "400",
                            fontFamily: "BonaNova",
                            transitionDelay: `${220 + idx * 120}ms`,
                          }}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Exclusive Access pill at end of nav items */}
          <div
            className={`pt-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)] ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${150 + menuItems.length * 80}ms` }}
          >
            <a
              href="/apply"
              onClick={handleExclusiveAccessClick}
              className="inline-flex items-center justify-center rounded-full border border-[#BB924D] px-8 py-1.5 sm:px-11 sm:py-3 text-[10px] sm:text-sm tracking-[0.16em] sm:tracking-[0.2em] uppercase transition-colors duration-500 hover:bg-white/5"
              style={{
                color: "#BB924D",
                fontFamily: "BonaNova",
                fontWeight: "400",
              }}
            >
              EXCLUSIVE&nbsp;ACCESS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
