import React, { useEffect, useState } from "react";
import PartnerCard from "../components/PartnerCard";
import "./Partners.css";

export default function Partners() {
  const [offsetTop, setOffsetTop] = useState(96); 

  useEffect(() => {
    const header =
      document.getElementById("site-header") ||
      document.querySelector(".navbar.fixed-top") ||
      document.querySelector("header");

    const apply = () => setOffsetTop(header ? header.offsetHeight : 96);

    apply(); 

    const ro = header ? new ResizeObserver(apply) : null;
    ro?.observe(header);

    window.addEventListener("resize", apply);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);


  const titleSponsor = {
    name: "Chang Mineral",
    logo:
      "https://burirammarathon.com/wp-content/uploads/2020/06/Logo-Chang-Mineral_HRZ-2-300x112.png",
    href: "https://www.changdrinks.com/",
  };

  const mainSponsors = [
    {
      name: "Warrix",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Warrix_logo.png",
      href: "https://www.warrix.co.th/",
    },
    {
      name: "CP",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2DSr1l044m9X88mfR0wLuTrQLHqGysE8KEA&s",
      href: "https://www.cpgroupglobal.com/",
    },
    {
      name: "Bangkok Airways",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Bangkok_Airways_Logo.svg/1152px-Bangkok_Airways_Logo.svg.png",
      href: "https://www.bangkokair.com/",
    },
    {
      name: "SC Group",
      logo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqdEATLFLrawCWxWzZ36k5bxzqDwgZIGLEw&sg",
      href: "https://www.scgroupthai.com",
    },
    {
      name: "Zand Morada",
      logo:
        "https://img.salehere.co.th/p/1200x0/2023/04/03/j9yjsbipl5pq.jpg",
      href: "https://www.zandmorada.com/",
    },
  ];

  return (
    <div style={{ paddingTop: offsetTop }}>
      <div className="partners-page container">
        <h1 className="partners-heading">พาร์ทเนอร์</h1>

        {/* Title Sponsor */}
        <section className="partners-section">
          <h2 className="section-title">
            <span>TITLE SPONSOR</span>
          </h2>
          <div className="title-holder">
            <PartnerCard
              name={titleSponsor.name}
              logo={titleSponsor.logo}
              href={titleSponsor.href}
              size="xl"
            />
          </div>
        </section>

        {/* Main Sponsors */}
        <section className="partners-section">
          <h2 className="section-title">
            <span>MAIN SPONSORS</span>
          </h2>
          <div className="sponsors-grid">
            {mainSponsors.map((s, i) => (
              <PartnerCard key={i} name={s.name} logo={s.logo} href={s.href} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
