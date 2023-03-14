import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
    <g fill="none" fillRule="evenodd">
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
        <Link to='/' className="header-right-item"><span>00</span> HOME</Link>
        <Link to='/destination' className="header-right-item"><span>01</span> DESTINATION</Link>
        <Link to='/crew' className="header-right-item"><span>02</span> CREW</Link>
        <Link to='/technology' className="header-right-item"><span>03</span> TECHNOLOGY</Link>
      </ul>
    </div>
  );
};

export default Header;
