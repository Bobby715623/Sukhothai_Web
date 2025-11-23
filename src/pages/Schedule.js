import React, { useEffect } from "react";
import "./Schedule.css";
import NextMatch from '../components/NextMatch.js';


const fixtures = [
  {
    monthLabel: "OCTOBER 2025",
    items: [
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sun 26 October",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "BG Pathum Utd",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/2/22/BGFC_Logo_2019.png",
        },
        kickoff: "18:30",
      },
    ],
  },
  {
    monthLabel: "NOVEMBER 2025",
    items: [
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sat 1 November",
        venue: "WHA Rayong Stadium",
        home: {
          name: "Rayong",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/9/9e/Rayong_F.C._logo_2025_version.png",
        },
        away: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        kickoff: "19:30",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sat 8 November",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "Kanchanaburi Power",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/a/a9/Kanchanaburi_Football_Club_2021.png",
        },
        kickoff: "18:00",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sun 23 November",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "Chonburi",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/1/1b/Chonburi_FC_Logo_2024.png",
        },
        kickoff: "18:30",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sun 30 November",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "Bangkok United",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Bangkok_United%2C_2018.png/375px-Bangkok_United%2C_2018.png",
        },
        kickoff: "18:00",

      },
    ],
  },
];


const LogoImg = ({ src, alt }) => (
  <img className="fx-logo" src={src} alt={alt} loading="lazy" />
);

const FixtureRow = ({ fx }) => {
  return (
    <div className="fx-row">
      {/* meta */}
      <div className="fx-meta">
        <span className="fx-competition">{fx.competition}</span>
        <span className="fx-dot">•</span>
        <span className="fx-dtv">
          {`${fx.datetime.toUpperCase()} — ${fx.venue.toUpperCase()}`}
        </span>
      </div>

      {/* teams */}
      <div className="fx-teams">
        <div className="fx-team fx-left">
          <LogoImg src={fx.home.logo} alt={fx.home.name} />
          <span className="fx-name">{fx.home.name}</span>
        </div>

        <div className="fx-time">{fx.kickoff}</div>

        <div className="fx-team fx-right">
          <span className="fx-name">{fx.away.name}</span>
          <LogoImg src={fx.away.logo} alt={fx.away.name} />
        </div>
      </div>

    
    </div>
  );
};


export default function Schedule({ data, headerHeight = 40, headerOffset = true }) {
  const sections = data ?? fixtures;

  useEffect(() => {
    document.documentElement.style.setProperty("--header-h", `${headerHeight}px`);
  }, [headerHeight]);

  return (
    <div className={`schedule-wrap ${headerOffset ? "header-offset" : ""}`}>
      <NextMatch />
      {sections.map((sec, i) => (
        <React.Fragment key={i}>
          <div className="fx-month">{sec.monthLabel}</div>
          {sec.items.map((fx, j) => (
            <React.Fragment key={j}>
              <hr className="fx-divider" />
              <FixtureRow fx={fx} />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}



