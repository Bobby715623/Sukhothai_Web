import React, { useEffect } from "react";
import "./Schedule.css";


const fixtures = [
  {
    monthLabel: "October 2025",
    items: [
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sat 4 October",
        venue: "Ayutthaya Stadium",
        home: {
          name: "Ayutthaya United",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/b/b0/Ayutthaya_United_F.C._logo.png",
        },
        away: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        kickoff: "1-1",
      },
    ], 
  },
  {
    monthLabel: "August 2025",
    items: [
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sat 16 August",
        venue: "Thunder Dome Stadium",
        home: {
          name: "Muangthong Utd",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/e/ed/MTUTD.png",
        },
        away: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        kickoff: "1-0",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sun 24 August",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "Port Fc",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Port_FC_logo.svg/939px-Port_FC_logo.svg.png",
        },
        kickoff: "1-0",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sun 31 August",
        venue: "Sam Ao Stadium",
        home: {
          name: "Prachuap",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/f/f3/PT_Prachuap_2018_logo.png",
        },
        away: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        kickoff: "0-0",
      },
    ], 
  },
  {
    monthLabel: "September 2025",
    items: [
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sat 13 September",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "Lamphun Warrior",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/e/eb/Lamphun_warrior_2013.png",
        },
        kickoff: "1-2",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Sat 20 September",
        venue: "Uthai Thani Province Stadium",
        home: {
          name: "UthaiThani FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/1/1e/Uthai_Thani_FC_2020.png",
        },
        away: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        kickoff: "1-1",
      },
      {
        competition: "BYD SEALION 6 LEAGUE I",
        datetime: "Fri 26 September",
        venue: "Thung Thalay Luang Stadium",
        home: {
          name: "Sukhothai FC",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png",
        },
        away: {
          name: "Chiangrai United",
          logo:
            "https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Chiangrai_United_FC_logo.svg/738px-Chiangrai_United_FC_logo.svg.png",
        },
        kickoff: "1-1",
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


export default function Schedule({ data, headerHeight = 72, headerOffset = true }) {
  const sections = data ?? fixtures;

  useEffect(() => {
    document.documentElement.style.setProperty("--header-h", `${headerHeight}px`);
  }, [headerHeight]);

  return (
    <div className={`schedule-wrap ${headerOffset ? "header-offset" : ""}`}>
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



