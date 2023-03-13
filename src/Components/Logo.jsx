import React from "react";
import winLogo from "../assets/win-logo.svg";

const Logo = ({ color }) => {
  return (
    <>
      <div className="win-logo d-inline-block gap-1 py-3 px-1">
        <img src={winLogo} alt="win art" />
        <span className={`fts-3 color-${color} ps-1`}>store.pk</span>
        <div className="c-dot dot1"></div>
        <div className="c-dot dot2"></div>
        <div className="c-dot dot3"></div>
      </div>
    </>
  );
};

export default Logo;
