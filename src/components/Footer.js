import React from 'react';
import { Link } from 'react-router-dom';
import { PenLine, Twitter, Github, Instagram, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon-sm"><PenLine size={16} /></span>
            Ahmad<span>Blog</span>
          </Link>
          <p>Dive into a world of insightful articles covering technology, creativity, lifestyle, and beyond.</p>
          <div className="footer-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="https://github.com/Ahmadansari1942" target="_blank" rel="noreferrer" aria-label="Github"><Github size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="mailto:contact@ahmadblog.com" aria-label="Email"><Mail size={18} /></a>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/create">Create Article</Link>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <Link to="/?cat=web">Web</Link>
            <Link to="/?cat=apps">Apps</Link>
            <Link to="/?cat=art">Art</Link>
            <Link to="/?cat=travel">Travel</Link>
            <Link to="/?cat=health">Health</Link>
          </div>
          <div className="footer-col">
            <h4>More</h4>
            <Link to="/?cat=books">Books</Link>
            <Link to="/?cat=history">History</Link>
            <Link to="/?cat=movies">Movies</Link>
            <Link to="/?cat=other">Other</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} AhmadBlog · Built by <a href="https://github.com/Ahmadansari1942" target="_blank" rel="noreferrer">Ahmad Ansari</a></p>
          <p>Deployed on AWS Amplify</p>
        </div>
      </div>
    </footer>
  );
}
