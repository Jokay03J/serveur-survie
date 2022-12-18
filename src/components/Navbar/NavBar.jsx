import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import discordLogo from "../../assets/discord-icon.svg";
import bedLogo from "../../assets/bed.png";
export default function NavBar() {
  return (
    <div className="navbar__container">
      <img src={bedLogo} alt="bed" className="navbar__icon"></img>
      <Link className="navbar__link">s</Link>
      <img
        src={discordLogo}
        alt="discord logo"
        className="navbar__discord"
      ></img>
    </div>
  );
}
