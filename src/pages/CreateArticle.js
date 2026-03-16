import React, { useState } from 'react';
import { PenLine, Image, Tag, Send, CheckCircle } from 'lucide-react';
import { CATEGORIES } from '../data/articles';
import './CreateArticle.css';

export default function CreateArticle() {
  const [form, setForm] = useState({ title: '', excerpt: '', category: '', content: '', tags: '', image: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const cats = CATEGORIES.filter(c => c.id !== 'all');

  return (
    <main className="create-page">
      <div className="create-orb" />
      <div className="container create-inner">
        {submitted ? (
          <div className="create-success animate-fade-up">
            <CheckCircle size={56} />
            <h2>Article Submitted!</h2>
            <p>Your article has been received and is under review. We'll publish it shortly.</p>
            <button onClick={() => { setSubmitted(false); setForm({ title:'',excerpt:'',category:'',content:'',tags:'',image:'' }); }}>
              Write Another
            </button>
          </div>
        ) : (
          <>
            <header className="create-header animate-fade-up">
              <span className="create-tag">✦ Share Your Story</span>
              <h1><PenLine size={28} /> Create <span>Article</span></h1>
              <p>Have an idea worth sharing? Write it up and join our community of contributors.</p>
            </header>

            <form className="create-form animate-fade-up delay-2" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Article Title *</label>
                <input id="title" name="title" type="text" placeholder="An engaging title for your article..." value={form.title} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="excerpt">Short Summary *</label>
                <input id="excerpt" name="excerpt" type="text" placeholder="A one-sentence hook that makes people want to read..." value={form.excerpt} onChange={handleChange} required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select id="category" name="category" value={form.category} onChange={handleChange} required>
                    <option value="">Select a category</option>
                    {cats.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="image"><Image size={13} /> Cover Image URL</label>
                  <input id="image" name="image" type="url" placeholder="https://..." value={form.image} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="content">Article Content *</label>
                <textarea id="content" name="content" placeholder="Write your article here. Use double line breaks to separate paragraphs..." rows={14} value={form.content} onChange={handleChange} required />
                <span className="char-count">{form.content.length} characters</span>
              </div>

              <div className="form-group">
                <label htmlFor="tags"><Tag size={13} /> Tags (comma-separated)</label>
                <input id="tags" name="tags" type="text" placeholder="e.g. Technology, React, Design" value={form.tags} onChange={handleChange} />
              </div>

              {form.image && (
                <div className="image-preview animate-fade-in">
                  <p className="preview-label">Cover Preview</p>
                  <img src={form.image} alt="preview" onError={e => e.target.style.display='none'} />
                </div>
              )}

              <button type="submit" className="create-submit" disabled={loading}>
                {loading ? <><span className="spinner" /> Submitting...</> : <><Send size={16} /> Submit Article</>}
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
