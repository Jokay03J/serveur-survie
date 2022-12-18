import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ServerPlayerCount.scss";
export default function ServerPlayerCount() {
  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    fetch(
      `https://api.mcsrvstat.us/2/${import.meta.env.VITE_SERVER_IP}:${
        import.meta.env.VITE_SERVER_PORT
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlayerCount(data.players ? data.players.online : 0);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function handleClipBoard() {
    navigator.clipboard.writeText(import.meta.env.VITE_SERVER_IP);
  }

  return (
    <div className="serverplayercount__container">
      <h2 className="serverplayercount__title">
        le serveur a:
        <span className={`serverplayercount__number`}> {playerCount} </span>
        joueur(s)
      </h2>
      <p className="serverplayercount__description">
        venez jouer avec eux !<br />
        surviver, construisez, et amusez-vous !
      </p>
      <button className="serverplayercount__button" onClick={handleClipBoard}>
        copier l'adresse du serveur !
      </button>
    </div>
  );
}
