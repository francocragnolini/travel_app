import React, { useState } from "react";
import iconMenu from "../../../assets/iconos/menu.svg";
import crossIcon from "../../../assets/iconos/cross.svg";
import logo from "../../../assets/logo/logo_01.png";
import "./Navbar.scss";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    if (sidebar) {
      document.body.classList.remove("body-overlay");
    } else {
      document.body.classList.add("body-overlay");
    }
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="nav">
        <div className="nav-logo">
          <img src={logo} alt="Viajes" />
        </div>
        <NavLinks item="item" list="nav-desktop" />
        <div className="menu">
          <img src={iconMenu} alt="Open" onClick={showSidebar} />
        </div>
      </div>

      {/* sidebar */}
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <div className="sidebar-ctn">
          <div className="close-sidebar">
            <img src={crossIcon} alt="Close" onClick={showSidebar} />
          </div>
          <NavLinks close={showSidebar} list="nav-menu-items" item="item" />
        </div>
      </nav>
      <div className={sidebar ? "overlay active" : "overlay"}></div>
    </>
  );
};

export default Navbar;
