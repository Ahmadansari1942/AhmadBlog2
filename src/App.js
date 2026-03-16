import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import CreateArticle from './pages/CreateArticle';
import './App.css';

function ScrollToTop() {
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/article/:slug"  element={<ArticleDetail />} />
        <Route path="/about"          element={<About />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/create"         element={<CreateArticle />} />
        <Route path="*"               element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div style={{
      minHeight: '80vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '16px',
      paddingTop: '80px', textAlign: 'center'
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '8rem', lineHeight: 1, color: 'var(--text-muted)' }}>404</span>
      <p style={{ color: 'var(--text-secondary)' }}>Page not found.</p>
      <a href="/" style={{ color: 'var(--accent-orange)', fontSize: '0.9rem' }}>← Go Home</a>
    </div>
  );
}
