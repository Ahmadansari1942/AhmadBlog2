import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard';
import CategoryFilter from '../components/CategoryFilter';
import { ARTICLES } from '../data/articles';
import './Home.css';

const STATS = [
  { value: '15', label: 'Articles' },
  { value: '9',  label: 'Categories' },
  { value: '20', label: 'Authors' },
];

export default function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(searchParams.get('cat') || 'all');

  useEffect(() => {
    const cat = searchParams.get('cat') || 'all';
    setActive(cat);
  }, [searchParams]);

  const handleCat = (id) => {
    setActive(id);
    if (id === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ cat: id });
    }
  };

  const filtered = active === 'all'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === active);

  const featured = ARTICLES.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured || active !== 'all');

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb orb1" />
          <div className="hero-orb orb2" />
          <div className="hero-grid" />
        </div>
        <div className="container hero-content">
          <div className="hero-tag animate-fade-up">
            <span>✦</span> New Articles Every Week
          </div>
          <h1 className="hero-title animate-fade-up delay-1">
            Ideas That<br />
            <span className="hero-accent">Inspire</span>
          </h1>
          <p className="hero-sub animate-fade-up delay-2">
            Dive into a world of insightful articles covering technology,<br className="hide-mobile" />
            creativity, lifestyle, and beyond.
          </p>
          <div className="hero-stats animate-fade-up delay-3">
            {STATS.map(s => (
              <div key={s.label} className="stat">
                <span className="stat-num">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="articles-section">
        <div className="container">
          <div className="section-header animate-fade-up">
            <CategoryFilter active={active} onChange={handleCat} />
          </div>

          {active === 'all' && featured && (
            <div className="featured-row animate-fade-up delay-1">
              <ArticleCard article={featured} featured />
            </div>
          )}

          {rest.length > 0 ? (
            <div className="articles-grid">
              {rest.map((article, i) => (
                <div key={article.id} className={`animate-fade-up delay-${(i % 4) + 1}`}>
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Marquee ticker */}
      <div className="ticker">
        <div className="ticker-track">
          {['Technology', 'Creativity', 'Lifestyle', 'Travel', 'Health', 'Books', 'Movies', 'History', 'Art', 'Web Dev'].map((t, i) => (
            <span key={i} className="ticker-item">{t} <span className="ticker-dot">✦</span></span>
          ))}
          {['Technology', 'Creativity', 'Lifestyle', 'Travel', 'Health', 'Books', 'Movies', 'History', 'Art', 'Web Dev'].map((t, i) => (
            <span key={`d${i}`} className="ticker-item">{t} <span className="ticker-dot">✦</span></span>
          ))}
        </div>
      </div>
    </main>
  );
}
