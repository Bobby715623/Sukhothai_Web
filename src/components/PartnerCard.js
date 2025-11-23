import React from "react";
import "./PartnerCard.css";

export default function PartnerCard({ name, logo, href, size = "md" }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      className={`partner-card partner-${size}`}
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={name}
      title={name}
    >
      <img src={logo} alt={name} loading="lazy" />
    </Tag>
  );
}
