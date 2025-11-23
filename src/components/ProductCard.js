import React from "react";
import "./ProductCard.css";

export default function ProductCard({
  image,
  title,
  price,          
  currency = "THB",
  badge,          
  lowStock = false,
  href = "#",
}) {
  const fmt = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price);

  return (
    <a className="prod-card" href={href} aria-label={title}>
      <div className="prod-media">
        {badge && <span className="prod-badge">{badge}</span>}
        <img src={image} alt={title} loading="lazy"
             onError={(e)=>{e.currentTarget.src="https://placehold.co/600x800/0b1022/ffffff?text=No+Image"}} />
      </div>

      <div className="prod-body">
        <h3 className="prod-title" title={title}>{title}</h3>
        <div className="prod-price">{fmt}</div>
        {lowStock && <div className="prod-low">● Few items remaining</div>}
      </div>
    </a>
  );
}
