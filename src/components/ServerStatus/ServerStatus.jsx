import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./ServerStatus.scss";
export default function ServerStatus() {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.mcsrvstat.us/2/${import.meta.env.VITE_SERVER_IP}:${
        import.meta.env.VITE_SERVER_PORT
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setIsOnline(data.online);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="serverstatus__container">
      <h2 className="serverstatus__title">
        le serveur est:{" "}
        <span
          className={`serverstatus__status ${isOnline ? "online" : "offline"}`}
        >
          {isOnline ? "En ligne" : "Hors ligne"}
        </span>
      </h2>
      <p className="serverstatus__description">
        le serveur s'éteint au bout de 10 minutes quand il n'y a plus personne
        présent sur le serveur.
      </p>
      <button className="serverstatus__button">
        serveur éteint ?<br />
        clique ici pour l’allumer !
      </button>
    </div>
  );
}
