import React from "react";
import sidebarData from "./navbarData";
const NavLinks = (props) => {
  return (
    <ul className={props.list}>
      {sidebarData.map((link, index) => (
        <li onClick={props.close} className={props.item} key={index}>
          <a href={`#${link.path}`}>{link.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
