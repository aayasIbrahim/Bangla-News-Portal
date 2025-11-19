import React from "react";
import TopBar from "./TopBar";
import NavBar from "./Navber";

function Header() {
  return (
    <header className="bg-white shadow-md py-5">
      <TopBar />
      <div className="mt-[12px] border-b-[3px] border-black">
      </div>
      <NavBar/>
    </header>
  );
}

export default Header;
