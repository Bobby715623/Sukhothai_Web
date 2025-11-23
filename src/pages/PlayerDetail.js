import React, { useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./PlayerDetail.css";

export default function PlayerDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const player = state?.player;

  // กัน header ทับ
  useEffect(() => {
    const header =
      document.getElementById("site-header") ||
      document.querySelector(".navbar.fixed-top");
    const setH = () =>
      document.documentElement.style.setProperty(
        "--header-h",
        `${header ? header.offsetHeight : 96}px`
      );
    setH();
    const ro = header ? new ResizeObserver(setH) : null;
    ro?.observe?.(header);
    return () => ro?.disconnect?.();
  }, []);

  if (!player)
    return (
      <div className="container" style={{ paddingTop: "var(--header-h,96px)" }}>
        <p>Player not found (id: {id})</p>
        <Link to="/player-staff">← Back to Team</Link>
      </div>
    );

  return (
    <div className="player-detail" style={{ paddingTop: "var(--header-h,96px)" }}>
      <div className="pd-hero">
        <div className="container">
          <Link to="/player-staff" className="pd-back">← TEAM</Link>
          <div className="pd-header">
            <img src={player.img} alt={player.lastname} className="pd-img" />
            <div className="pd-info">
              <h1 className="pd-name">
                {player.name} {player.lastname}
              </h1>
              <p className="pd-pos">{player.position}</p>
                <SocialLinks socials={player.socials} />
            </div>
          </div>
        </div>
      </div>

      <div className="container pd-body">
        <h2 className="pd-section-title">PLAYER STATS</h2>
        <div className="pd-stats">
          <div className="pd-stat"><span>Appearances</span><b>12</b></div>
          <div className="pd-stat"><span>Goals</span><b>4</b></div>
          <div className="pd-stat"><span>Assists</span><b>2</b></div>
          <div className="pd-stat"><span>Yellow Cards</span><b>1</b></div>
          <div className="pd-stat"><span>Red Cards</span><b>0</b></div>
        </div>
      </div>
    </div>
  );
}

function SocialLinks({ socials = {} }) {
  const items = [
    { key: "x", label: "X",      color: "#111", svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.3 2H22l-9.6 10.9L22.8 22h-8.3l-6-7.1L1.7 22H-2l10.6-12.1L-1.9 2h8.5l5.4 6.4L18.3 2z"/></svg>
    )},
    { key: "ig", label: "Instagram", color: "#E1306C", svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2c3 0 3.4 0 4.6.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.4.4 1.1.5 2.3.1 1.2.1 1.6.1 4.6s0 3.4-.1 4.6c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.4.2-1.1.4-2.3.5-1.2.1-1.6.1-4.6.1s-3.4 0-4.6-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.4-.4-1.1-.5-2.3C2.2 15.4 2.2 15 2.2 12s0-3.4.1-4.6c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .4-.2 1.1-.4 2.3-.5C8.6 2.2 9 2.2 12 2.2m0 1.8c-3 0-3.3 0-4.5.1-1 .1-1.6.3-2 .4-.5.2-.8.4-1.1.7-.3.3-.6.6-.7 1.1-.1.4-.3 1-.4 2-.1 1.2-.1 1.5-.1 4.5s0 3.3.1 4.5c.1 1 .3 1.6.4 2 .2.5.4.8.7 1.1.3.3.6.6 1.1.7.4.1 1 .3 2 .4 1.2.1 1.5.1 4.5.1s3.3 0 4.5-.1c1-.1 1.6-.3 2-.4.5-.2.8-.4 1.1-.7.3-.3.6-.6.7-1.1.1-.4.3-1 .4-2 .1-1.2.1-1.5.1-4.5s0-3.3-.1-4.5c-.1-1-.3-1.6-.4-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.6-1.1-.7-.4-.1-1-.3-2-.4-1.2-.1-1.5-.1-4.5-.1Zm0 3.5a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.8a3 3 0 1 0 0 6.1 3 3 0 0 0 0-6.1Zm5.3-2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z"/></svg>
    )},
    { key: "tiktok", label: "TikTok", color: "#000000", svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21 8.4a7.3 7.3 0 0 1-4-1.3v6.8a6.9 6.9 0 1 1-6.9-6.9c.3 0 .6 0 .9.1v3.1a3.8 3.8 0 1 0 2.7 3.6V2h3a4.4 4.4 0 0 0 4.3 3.8V8.4z"/></svg>
    )},
    { key: "fb", label: "Facebook", color: "#1877F2", svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8.3h2.8l.4-3.2h-3.2V8.4c0-.9.3-1.6 1.6-1.6h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.4H8.1v3.2h2.3V22h3.1z"/></svg>
    )},
    { key: "yt", label: "YouTube", color: "#FF0000", svg: (
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 7.1s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.9 3.5 12 3.5 12 3.5h0s-4.9 0-8 .3c-.4 0-1.3.1-2.1 1C.2 5.5 0 7.1 0 7.1S0 8.9 0 10.7v1.7c0 1.8.2 3.6.2 3.6s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.6.3 7.6.3s4.9 0 8-.3c.4 0 1.6 0 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6zM9.5 13.9V7.7l6.3 3.1-6.3 3.1z"/></svg>
    )}
  ];

  return (
    <div className="pd-socials">
      {items
        .filter(({ key }) => socials[key])            
        .map(({ key, label, color, svg }) => (
          <a
            key={key}
            href={socials[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="pd-social"
            style={{ "--brand": color }}
            title={label}
          >
            {svg}
          </a>
        ))}
    </div>
  );
}
