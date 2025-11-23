import React from "react";
import LeagueTable from "../components/LeagueTable";
<div>
    
</div>
const leagueData = [
  { position: 1, club: 'Buriram United', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Buriram_United_logo.svg/270px-Buriram_United_logo.svg.png', played: 7, won: 6, drawn: 1, lost: 0, gf: 20, ga: 8,  gd: 12, pts: 19, form: ['W','W','W','W','D'] },
  { position: 2, club: 'Bangkok United', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Bangkok_United%2C_2018.png/375px-Bangkok_United%2C_2018.png', played: 7, won: 5, drawn: 1, lost: 1, gf: 14, ga: 9,  gd: 5,  pts: 16, form: ['W','D','W','L','W'] },
  { position: 3, club: 'Ratchaburi FC', logo: 'https://upload.wikimedia.org/wikipedia/en/4/44/Ratchaburi_Mitr_Phol_logo_2019.png', played: 7, won: 4, drawn: 1, lost: 2, gf: 8,  ga: 4,  gd: 4,  pts: 13, form: ['W','W','D','L','W'] },
  { position: 4, club: 'Rayong FC', logo: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Rayong_F.C._logo_2025_version.png', played: 7, won: 3, drawn: 2, lost: 2, gf: 11, ga: 9,  gd: 2,  pts: 11, form: ['W','D','W','L','D'] },
  { position: 5, club: 'BG Pathum Utd', logo: 'https://upload.wikimedia.org/wikipedia/en/2/22/BGFC_Logo_2019.png', played: 7, won: 3, drawn: 2, lost: 2, gf: 10, ga: 8,  gd: 2,  pts: 11, form: ['W','D','L','W','L'] },
  { position: 6, club: 'Port FC', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Port_FC_logo.svg/939px-Port_FC_logo.svg.png', played: 7, won: 3, drawn: 1, lost: 3, gf: 15, ga: 6,  gd: 9,  pts: 10, form: ['L','D','W','L','W'] },
  { position: 7, club: 'Chiangrai United', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Chiangrai_United_FC_logo.svg/738px-Chiangrai_United_FC_logo.svg.png', played: 7, won: 2, drawn: 3, lost: 2, gf: 7,  ga: 7,  gd: 0,  pts: 9,  form: ['D','L','W','D','W'] },
  { position: 8, club: 'Prachuap', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f3/PT_Prachuap_2018_logo.png', played: 7, won: 2, drawn: 3, lost: 2, gf: 7,  ga: 7,  gd: 0,  pts: 9,  form: ['L','W','D','W','D'] },
  { position: 9, club: 'Muangthong Utd', logo: 'https://upload.wikimedia.org/wikipedia/en/e/ed/MTUTD.png', played: 7, won: 2, drawn: 3, lost: 2, gf: 9,  ga: 10, gd: -1, pts: 9,  form: ['L','D','W','W','L'] },
  { position: 10, club: 'Sukhothai FC', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cb/Sukhothai_FC_2020.png', played: 7, won: 1, drawn: 4, lost: 2, gf: 5,  ga: 6,  gd: -1, pts: 7,  form: ['D','W','L','D','D'] },
  { position: 11, club: 'Ayutthaya United', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Ayutthaya_United_F.C._logo.png', played: 7, won: 1, drawn: 4, lost: 2, gf: 12, ga: 14, gd: -2, pts: 7,  form: ['D','D','W','L','D'] },
  { position: 12, club: 'Nakhon Ratchasima', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Nakhon_Ratchasima_Mazda%2C_2018.png', played: 7, won: 1, drawn: 4, lost: 2, gf: 6,  ga: 9,  gd: -3, pts: 7,  form: ['W','D','L','D','D'] },
  { position: 13, club: 'Lamphun Warrior', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Lamphun_warrior_2013.png', played: 7, won: 1, drawn: 3, lost: 3, gf: 11, ga: 16, gd: -5, pts: 6,  form: ['W','L','D','L','D'] },
  { position: 14, club: 'Kanchanaburi Power', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Kanchanaburi_Football_Club_2021.png', played: 7, won: 1, drawn: 3, lost: 3, gf: 8,  ga: 16, gd: -8, pts: 6,  form: ['W','L','D','W','L'] },
  { position: 15, club: 'Chonburi FC', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Chonburi_FC_Logo_2024.png', played: 7, won: 0, drawn: 4, lost: 3, gf: 4,  ga: 9,  gd: -5, pts: 4,  form: ['D','L','D','L','D'] },
  { position: 16, club: 'Uthai Thani FC', logo: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Uthai_Thani_FC_2020.png', played: 7, won: 0, drawn: 3, lost: 4, gf: 6,  ga: 15, gd: -9, pts: 3,  form: ['L','D','L','D','L'] },
];

export default function TablePage() {
  return (
    <div style={{ paddingTop: "100px" }}>
      <LeagueTable title="BYD SEALION 6 LEAGUE I" data={leagueData} />
    </div>
  );
}