import React from 'react';
import { Link } from 'react-router-dom';
import { PenLine, Globe, Zap, Users, ArrowRight } from 'lucide-react';
import { AUTHORS } from '../data/articles';
import './About.css';

const VALUES = [
  { icon: PenLine, title: 'Quality Writing',   desc: 'Every article is researched, edited, and written to inform and inspire.' },
  { icon: Globe,   title: 'Diverse Topics',    desc: 'From tech to travel, art to history — something for every curious mind.' },
  { icon: Zap,     title: 'Fast & Accessible', desc: 'Clean, performant, and readable on any device, anywhere in the world.' },
  { icon: Users,   title: 'Community Driven',  desc: 'Built for readers and writers who care about ideas that matter.' },
];

export default function About() {
  return (
    <main className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-orb" />
        <div className="container about-hero-content">
          <span className="about-tag animate-fade-up">✦ Our Story</span>
          <h1 className="about-title animate-fade-up delay-1">
            We Believe in the<br /><span>Power of Ideas</span>
          </h1>
          <p className="about-sub animate-fade-up delay-2">
            AhmadBlog started as a personal journal and grew into a platform where curious minds share knowledge across technology, creativity, culture, and life.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid animate-fade-up">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                In a world of clickbait and noise, AhmadBlog is committed to publishing articles that are worth your time. We cover topics deeply, write honestly, and respect the intelligence of our readers.
              </p>
              <p>
                Whether you're a developer exploring new frameworks, a traveller planning your next adventure, or a reader who loves films and books — there's a place for you here.
              </p>
              <Link to="/" className="mission-cta">
                Explore Articles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mission-visual">
              <div className="visual-grid">
                {['15+', '9', '20+', '5★'].map((n, i) => (
                  <div key={i} className={`visual-cell cell${i}`}>
                    <span className="cell-num">{n}</span>
                    <span className="cell-lbl">{['Articles','Topics','Authors','Rating'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title animate-fade-up">What We Stand For</h2>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className={`value-card animate-fade-up delay-${i + 1}`}>
                <div className="value-icon"><v.icon size={20} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title animate-fade-up">Meet the Team</h2>
          <div className="team-grid">
            {AUTHORS.map((a, i) => (
              <div key={a.id} className={`team-card animate-fade-up delay-${i + 1}`}>
                <div className="team-av">{a.avatar}</div>
                <h3>{a.name}</h3>
                <p className="team-role">{a.role}</p>
                <p className="team-bio">{a.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
