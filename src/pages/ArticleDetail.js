import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, ArrowLeft, Tag, Share2, BookOpen } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import './ArticleDetail.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const article = ARTICLES.find(a => a.slug === slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!article) {
    return (
      <div className="not-found">
        <div className="container">
          <h2>Article not found</h2>
          <Link to="/" className="back-btn"><ArrowLeft size={16}/> Back to home</Link>
        </div>
      </div>
    );
  }

  const cat = CATEGORIES.find(c => c.id === article.category);
  const related = ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: article.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied!');
    }
  };

  return (
    <main className="article-detail">
      <div className="container">
        <div className="article-nav">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={16} /> Back
          </button>
          <button className="share-btn" onClick={handleShare}>
            <Share2 size={15} /> Share
          </button>
        </div>

        <article className="article-main">
          {/* Hero image */}
          <div className="article-hero-img">
            <img src={article.image} alt={article.title} />
            <div className="article-img-overlay" />
          </div>

          {/* Header */}
          <header className="article-header animate-fade-up">
            <div className="article-labels">
              <span className="article-cat" style={{ color: cat?.color, borderColor: cat?.color }}>
                {cat?.label}
              </span>
              {article.featured && <span className="badge-featured-sm">★ Featured</span>}
            </div>
            <h1 className="article-title">{article.title}</h1>
            <p className="article-excerpt">{article.excerpt}</p>

            <div className="article-meta">
              <div className="article-author">
                <span className="author-av">{article.author.avatar}</span>
                <div>
                  <p className="author-nm">{article.author.name}</p>
                  <p className="author-role">{article.author.role}</p>
                </div>
              </div>
              <div className="article-stats">
                <span><Clock size={13}/> {article.readTime}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="article-content animate-fade-up delay-2">
            {article.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="article-tags animate-fade-up delay-3">
            <Tag size={14} />
            {article.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {/* Author card */}
          <div className="author-card animate-fade-up delay-4">
            <span className="author-av-lg">{article.author.avatar}</span>
            <div>
              <p className="author-card-name">{article.author.name}</p>
              <p className="author-card-role">{article.author.role}</p>
              <p className="author-card-bio">{article.author.bio}</p>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="related animate-fade-up">
            <div className="related-header">
              <BookOpen size={18} />
              <h2>More in <span>{cat?.label}</span></h2>
            </div>
            <div className="related-grid">
              {related.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
