import React from "react";
import { Link } from "react-router-dom";   
import "./NewsCard.css";

export default function NewsCard({ item }) {
  const { id, image, category, title, excerpt, date, href } = item;

  
  if (id) {
    return (
      <Link className="news-card" to={`/news/${id}`} state={{ item }}>
        <div className="news-media">
          <img src={image} alt={title} loading="lazy" />
        </div>
        <div className="news-body">
          <div className="news-overline">{category}</div>
          <h3 className="news-title">{title}</h3>
          {excerpt && <p className="news-excerpt">{excerpt}</p>}
          <div className="news-meta">{date}</div>
          <hr className="news-divider" />
        </div>
      </Link>
    );
  }

  // fallback: ลิงก์ภายนอก
  return (
    <a
      className="news-card"
      href={href || "#"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="news-media">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="news-body">
        <div className="news-overline">{category}</div>
        <h3 className="news-title">{title}</h3>
        {excerpt && <p className="news-excerpt">{excerpt}</p>}
        <div className="news-meta">{date}</div>
        <hr className="news-divider" />
      </div>
    </a>
  );
}
