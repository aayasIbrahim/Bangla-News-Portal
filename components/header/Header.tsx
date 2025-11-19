import React from "react";
import TopBar from "./TopBar";
import NavBar from "./Navber";
import NewsTicker from "./NewsTricker";
import AdvertisementBanner from "./AdvertisementBanner";

function Header() {
  return (
    <header className="bg-white py-5">
      <TopBar />
      <div className="mt-[12px] border-b-[3px] border-black">
      </div>
      <NavBar/>
      <NewsTicker/>
      <AdvertisementBanner/>
    
    </header>
  );
}

export default Header;
