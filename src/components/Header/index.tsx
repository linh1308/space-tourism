import React from "react";
import "./style.scss";

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <g fill="none" fill-rule="evenodd">
      <circle cx="24" cy="24" r="24" fill="#FFF" />
      <path
        fill="#0B0D17"
        d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
      />
    </g>
  </svg>
);

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <Logo />
      </div>
      <ul className="header-right">
        <li className="header-right-item">00 HOME</li>
        <li className="header-right-item">01 DESTINATION</li>
        <li className="header-right-item">02 CREW</li>
        <li className="header-right-item">03 TECHNOLOGY</li>
      </ul>
    </div>
  );
};

export default Header;
