"use client"
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import NavBar from "./Navber";
import NewsTicker from "./NewsTicker";
import AdvertisementBanner from "./AdvertisementBanner";

function Header() {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // scrollY > 48px হলে Navbar ফিক্সড হবে
      if (window.scrollY > 48) {
        setIsNavFixed(true);
      } else {
        setIsNavFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full">
      {/* TopBar always on top */}
      <div className="w-full">
        <TopBar />
      </div>

      {/* Navbar */}
      <div
        className={`w-full bg-white border-b-[3px] border-black transition-all duration-300 ${
          isNavFixed ? "fixed top-0 left-0 z-50 shadow-md" : "relative"
        }`}
      >
        <NavBar />
      </div>

      {/* Main scrollable content */}
      <div className=""> 
        <NewsTicker />
        <AdvertisementBanner />
      </div>
    </header>
  );
}

export default Header;
