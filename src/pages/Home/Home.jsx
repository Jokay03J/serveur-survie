import React from "react";
import Header from "../../components/Header/Header";
import ServerPlayerCount from "../../components/ServerPlayerCount/ServerPlayerCount";
import ServerStatus from "../../components/ServerStatus/ServerStatus";
import "./Home.scss";

export default function Home() {
  return (
    <div className="home__container">
      <Header></Header>
      <ServerStatus></ServerStatus>
      <ServerPlayerCount></ServerPlayerCount>
    </div>
  );
}
