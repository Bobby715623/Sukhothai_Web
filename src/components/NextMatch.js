import React, { useState, useEffect, useMemo } from 'react';
import './NextMatch.css';
import Logo from '../img/logo.png';
import Lamphun from '../img/Lamphun.png';
import Ais from '../img/ais.png';
import Byd from '../img/byd.png';

export default function NextMatch({
  competition = 'BYD SEALION 6 LEAGUE I',
  dateLabel = 'SUN 26 OCTOBER - 18:30',
  stadium = 'THALAY LUANG STADIUM',
  target = '2025-10-26T18:30:00',
  homeLogo = Logo,
  awayLogo = Lamphun,
}) {
  const targetDate = useMemo(() => new Date(target), [target]);

  const calc = () => {
    const now = new Date();
    const diff = +targetDate - +now;

    if (diff <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        done: true,
      };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      done: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((prev) => {
        const next = calc();
        if (next.done) {
          clearInterval(id);
        }
        return next;
      });
    }, 1000);

    setTimeLeft(calc());

    return () => clearInterval(id);
  }, [targetDate]); 

  const format2 = (n) => n.toString().padStart(2, '0');

  const units = [
    { key: 'days', label: 'DAYS' },
    { key: 'hours', label: 'HOURS' },
    { key: 'minutes', label: 'MINUTES' },
    { key: 'seconds', label: 'SECONDS' },
  ];

  return (
    <section className="nextmatch">
      <div className="nm-inner">
        <h2>NEXT MATCH</h2>

        <div className="match-card">
          <div className="p-6">
            <p>{competition}</p>
            <div className="match-info">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="16" height="16" style={{ marginRight: '8px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{`${dateLabel} ${stadium ? `- ${stadium}` : ''}`}</span>
            </div>
          </div>

          <div className="countdown-container">
            <div className="team-logo">
              <img
                src={homeLogo}
                alt="Home Team"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/80x80/fef2f2/ef4444?text=HOME';
                }}
              />
            </div>

            {/* ถ้าถึงเวลาแล้ว โชว์ LIVE แทนตัวเลข */}
            {!timeLeft.done ? (
              <div style={{ display: 'flex', gap: '16px' }}>
                {units.map(({ key, label }) => (
                  <div className="countdown-item" key={key}>
                    <div className="countdown-number">{format2(timeLeft[key])}</div>
                    <span className="countdown-label">{label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    background: '#ef4444',
                    color: '#fff',
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  LIVE
                </span>
                <span>Kickoff now</span>
              </div>
            )}
          </div>

          <hr className="divider" />

          <div className="countdown-container">
            <div className="team-logo">
              <img
                src={awayLogo}
                alt="Away Team"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/80x80/eef2ff/6366f1?text=AWAY';
                }}
              />
            </div>

            <div className="broadcasts">
              <img
                src={Ais}
                alt="AIS Play"
                style={{ height: '36px' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/100x40/ffffff/000000?text=PLAY';
                }}
              />
              <img
                src={Byd}
                alt="BYD Sealion 6"
                style={{ height: '36px' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/150x40/ffffff/000000?text=SEALION+6';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
