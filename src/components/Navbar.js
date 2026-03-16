import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, PenLine, Menu } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(
      ARTICLES.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q))
      ).slice(0, 5)
    );
  }, [query]);

  const handleSelect = (slug) => {
    navigate(`/article/${slug}`);
    setQuery('');
    setResults([]);
    setSearchOpen(false);
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">
            <PenLine size={18} />
          </span>
          <span className="logo-text">Ahmad<span>Blog</span></span>
        </Link>

        <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/create" className="btn-create" onClick={() => setMenuOpen(false)}>
            <PenLine size={15} />
            Create Article
          </Link>
        </div>

        <div className="navbar-actions">
          <button className="search-toggle" onClick={() => setSearchOpen(v => !v)} aria-label="Search">
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <div className={`search-bar${searchOpen ? ' open' : ''}`}>
        <div className="container">
          <div className="search-input-wrap">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              autoFocus={searchOpen}
            />
            {query && <button onClick={() => setQuery('')}><X size={14} /></button>}
          </div>
          {results.length > 0 && (
            <ul className="search-results">
              {results.map(r => (
                <li key={r.id} onClick={() => handleSelect(r.slug)}>
                  <span className="result-title">{r.title}</span>
                  <span className="result-cat">{r.category}</span>
                </li>
              ))}
            </ul>
          )}
          {query && results.length === 0 && (
            <p className="no-results">No articles found for "{query}"</p>
          )}
        </div>
      </div>
    </nav>
  );
}
