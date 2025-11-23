import React from "react";
import { Link } from "react-router-dom";
import "./PlayerCard.css";

export default function PlayerCard({ name, lastname, position, img }) {
  const id = lastname.toLowerCase(); 

  return (
    <Link
      to={`/players/${id}`}
      state={{ player: { name, lastname, position, img, socials: {
        x: "https://x.com/yourplayer",
        ig: "https://www.instagram.com/johnbaggio10/",
        tiktok: "https://www.tiktok.com/@yourplayer",
        fb: "https://www.facebook.com/john.baggio.508920",
        yt: "https://youtube.com/@yourplayer"
      }} }}
      className="player-card"
    >
      <div className="player-image">
        <img src={img} alt={`${name} ${lastname}`} loading="lazy" />
      </div>
      <div className="player-info">
        <h5>
          <span className="name">{name}</span>{" "}
          <span className="lastname">{lastname}</span>
        </h5>
        <p className="position">{position}</p>
        
      </div>
    </Link>
  );
}
