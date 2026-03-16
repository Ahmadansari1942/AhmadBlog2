import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import './ArticleCard.css';

export default function ArticleCard({ article, featured = false }) {
  const cat = CATEGORIES.find(c => c.id === article.category);
  return (
    <Link to={`/article/${article.slug}`} className={`article-card${featured ? ' featured' : ''}`}>
      <div className="card-img-wrap">
        <img src={article.image} alt={article.title} loading="lazy" />
        <div className="card-overlay" />
        {article.featured && <span className="badge-featured">★ Featured</span>}
        <span className="badge-cat" style={{ '--cat-color': cat?.color }}>
          {cat?.label}
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{article.title}</h3>
        <p className="card-excerpt">{article.excerpt}</p>
        <div className="card-meta">
          <div className="card-author">
            <span className="author-avatar">{article.author.avatar}</span>
            <span className="author-name">{article.author.name}</span>
          </div>
          <div className="card-info">
            <Clock size={12} />
            <span>{article.readTime}</span>
            <span className="card-date">{article.date}</span>
          </div>
        </div>
      </div>
      <div className="card-arrow">
        <ArrowUpRight size={16} />
      </div>
    </Link>
  );
}
