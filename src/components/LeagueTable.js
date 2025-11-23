import React from "react";
import { Table, Image } from "react-bootstrap";
import "./LeagueTable.css";

export const FormIndicator = ({ status }) => {
  let bg;
  if (status === "W") bg = "#00A650"; // เขียว
  else if (status === "D") bg = "#9C9C9C"; // เทา
  else bg = "#D00027"; // แดง

  return (
    <span
      style={{
        display: "inline-block",
        width: 22,
        height: 22,
        lineHeight: "22px",
        fontSize: 11,
        borderRadius: "50%",
        textAlign: "center",
        color: "white",
        backgroundColor: bg,
        marginRight: 4,
      }}
    >
      {status}
    </span>
  );
};

export default function LeagueTable({ title, data }) {
  return (
    <div className="league-container">
      <h4 className="table-title">{title}</h4>
      <Table bordered hover responsive className="league-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Club</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>PTS</th>
            <th>Form</th>
          </tr>
        </thead>
        <tbody>
          {data.map((club) => (
            <tr key={club.position}>
              <td className="text-center">{club.position}</td>
              <td>
                <div className="club-cell">
                  <Image
                    src={club.logo}
                    alt={club.club}
                    width={22}
                    height={22}
                    className="club-logo"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <span className="club-name">{club.club}</span>
                </div>
              </td>
              <td className="text-center">{club.played}</td>
              <td className="text-center">{club.won}</td>
              <td className="text-center">{club.drawn}</td>
              <td className="text-center">{club.lost}</td>
              <td className="text-center">{club.gf}</td>
              <td className="text-center">{club.ga}</td>
              <td className="text-center">
                {club.gd > 0 ? `+${club.gd}` : club.gd}
              </td>
              <td className="text-center fw-bold">{club.pts}</td>
              <td className="text-center">
                {club.form.map((f, i) => (
                  <FormIndicator key={i} status={f} />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}