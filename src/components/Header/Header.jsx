import React from "react";
import NavBar from "../Navbar/NavBar";
import "./Header.scss";

export default function Header() {
  function handleClipBoard() {
    navigator.clipboard.writeText(import.meta.env.VITE_SERVER_IP);
  }

  return (
    <header className="header__container">
      <NavBar></NavBar>
      <h1 className="header__title">serveur survie</h1>
      <p className="header__description">un serveur survie entre potes</p>
      <button className="header__play_btn" onClick={handleClipBoard}>
        {import.meta.env.VITE_SERVER_IP}
      </button>
    </header>
  );
}
