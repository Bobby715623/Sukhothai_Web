
import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { newsData } from "../newData";
import "./NewsDetail.css";

function Block({ b }) {
  if (b.type === "p") {
    return (
      <p>
        {b.text}
        {b.links?.map((l, i) => (
          <a key={i} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
        ))}
        {b.textAfter || null}
      </p>
    );
  }
  if (b.type === "ul") {
    return <ul>{b.items.map((it, i)=><li key={i}>{it}</li>)}</ul>;
  }
  if (b.type === "quote") {
    return <blockquote>{b.text}</blockquote>;
  }
  return null;
}

export default function NewsDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const article = state?.item || newsData.find(n => n.id === id);

  useEffect(() => {
    const header = document.getElementById("site-header") || document.querySelector(".navbar.fixed-top");
    const setH = () => document.documentElement.style.setProperty("--header-h", `${header ? header.offsetHeight : 96}px`);
    setH();
    const ro = header ? new ResizeObserver(setH) : null;
    ro?.observe?.(header);
    return () => ro?.disconnect?.();
  }, []);

  if (!article) return <div className="container" style={{paddingTop:"var(--header-h,96px)"}}>Article not found.</div>;

  return (
    <div className="nd-wrap" style={{paddingTop:"var(--header-h,96px)"}}>
      <div className="container">
        <div className="nd-meta">
          <Link to="/news" className="nd-back">← All NEWS</Link>
          <span className="nd-date">{article.date}</span>
        </div>

        <h1 className="nd-title">{article.title}</h1>
      </div>

      <figure className="nd-hero">
        <img src={article.image} alt={article.title} />
        <h2 className="nd-excerpt">{article.excerpt}</h2>
        <h5 className="nd-detail">{article.detail.map((para, i) => <p key={i}>{para}</p>)}</h5>
      </figure>

      <div className="container nd-body">
        {article.dek && <p className="nd-dek">{article.dek}</p>}
        {article.blocks?.map((b, i) => <Block key={i} b={b} />)}
      </div>
    </div>
  );
}
