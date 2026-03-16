import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Twitter, Github, Instagram, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <main className="contact">
      <section className="contact-hero">
        <div className="contact-orb" />
        <div className="container contact-hero-inner">
          <span className="contact-tag animate-fade-up">✦ Get In Touch</span>
          <h1 className="contact-title animate-fade-up delay-1">
            Let's Start a<br /><span>Conversation</span>
          </h1>
          <p className="contact-sub animate-fade-up delay-2">
            Have a story to share, a question, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container contact-body">
        <div className="contact-info animate-fade-up">
          <h2>Contact Info</h2>
          <div className="info-item">
            <div className="info-icon"><Mail size={18} /></div>
            <div>
              <p className="info-label">Email</p>
              <a href="mailto:contact@ahmadblog.com">contact@ahmadblog.com</a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><MapPin size={18} /></div>
            <div>
              <p className="info-label">Location</p>
              <p>Pakistan</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><MessageSquare size={18} /></div>
            <div>
              <p className="info-label">Response Time</p>
              <p>Usually within 24 hours</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="https://github.com/Ahmadansari1942" target="_blank" rel="noreferrer" aria-label="Github"><Github size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
          </div>
        </div>

        <div className="contact-form-wrap animate-fade-up delay-2">
          {sent ? (
            <div className="form-success">
              <CheckCircle size={48} />
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name:'', email:'', subject:'', message:'' }); }}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..." rows={6} value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="form-submit" disabled={loading}>
                {loading ? <span className="spinner" /> : <><Send size={16} /> Send Message</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
