import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO.js';
import './SupportHubPage.css';

function useInView(threshold = 0) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const FEATURES = [
  {
    icon: '📋',
    title: 'Canned Responses',
    tag: 'Core',
    desc: 'Build a searchable library of pre-written responses organized by categories and tags. Agents find the perfect reply in seconds.',
  },
  {
    icon: '🔒',
    title: 'Private Notes',
    tag: 'Productivity',
    desc: 'Personal note-taking system with full categorization. Each agent\'s notes are private and isolated, keeping context sharp.',
  },
  {
    icon: '📣',
    title: 'Feedback System',
    tag: 'Quality',
    desc: 'Collect, vote, and act on team feedback. Bug reports, feature requests, and suggestions — all with priority tracking.',
  },
  {
    icon: '📡',
    title: 'Broadcast Messaging',
    tag: 'Communication',
    desc: 'Send targeted announcements to roles or specific users. Track read status, set expiry dates, and attach files.',
  },
  {
    icon: '🛡️',
    title: 'Role-Based Access',
    tag: 'Security',
    desc: 'User, Editor, and Admin roles with fine-grained permissions. Admins manage everything; Editors handle feedback.',
  },
  {
    icon: '⚡',
    title: 'Real-Time WebSocket',
    tag: 'Live',
    desc: 'Live updates across the entire platform. When something changes, everyone sees it instantly — no refresh needed.',
  },
];

const STATS = [
  { value: '89+', label: 'Commits shipped' },
  { value: '3', label: 'User roles' },
  { value: '< 2s', label: 'Average response lookup' },
  { value: '100%', label: 'Open source' },
];

const PANELS = [
  {
    icon: '📋',
    title: 'Canned Panel',
    desc: 'Search, filter, and copy canned responses in one keystroke. Bulk import/export with JSON for easy migration.',
    features: ['Smart search by text or tag', 'Category organization', 'Auto-tag generation', 'Bulk JSON import/export'],
  },
  {
    icon: '💬',
    title: 'Feedback Panel',
    desc: 'Everyone can submit and upvote. Editors and admins manage status — turning suggestions into shipped features.',
    features: ['Public visibility for all users', 'Upvote / downvote system', 'Status: Pending → In Progress → Resolved', 'Priority levels: Low to Critical'],
  },
  {
    icon: '📡',
    title: 'Message Center',
    desc: 'Broadcast targeted announcements with priority levels, expiry dates, and real-time notification badges.',
    features: ['Target by role or user', 'Message types: Announcement, Warning, Info', 'Read tracking with notification bell', 'Auto-expire old messages'],
  },
  {
    icon: '🛡️',
    title: 'Admin Panel',
    desc: 'Full control over users, roles, canned responses, and system logs — all from one dashboard.',
    features: ['Bulk user creation', 'Role management (User / Editor / Admin)', 'System log viewer', 'Password reset & management'],
  },
];

const TECH_STACK = [
  { label: 'Node.js', color: '#0044aa' },
  { label: 'Express.js', color: '#004cff' },
  { label: 'MongoDB', color: '#0044aa' },
  { label: 'EJS', color: '#00bcd4' },
  { label: 'WebSockets', color: '#004cff' },
  { label: 'Mongoose', color: '#0044aa' },
  { label: 'Multer', color: '#00bcd4' },
  { label: 'Session Auth', color: '#004cff' },
  { label: 'CSS3', color: '#0044aa' },
  { label: 'Vanilla JS', color: '#00bcd4' },
];

const ROLES = [
  {
    icon: '👤',
    name: 'User',
    color: 'rgba(0,188,212,0.07)',
    borderColor: 'rgba(0,188,212,0.25)',
    textColor: '#0097a7',
    perms: ['View all canned responses', 'Create & manage private notes', 'Submit feedback', 'View & respond to messages', 'Vote on public feedback'],
  },
  {
    icon: '✏️',
    name: 'Editor',
    color: 'rgba(0,76,255,0.06)',
    borderColor: 'rgba(0,76,255,0.2)',
    textColor: '#004cff',
    perms: ['All User permissions', 'Respond to feedback', 'Update feedback status', 'Manage feedback lifecycle', 'Tag canned responses'],
  },
  {
    icon: '⚙️',
    name: 'Admin',
    color: 'rgba(0,68,170,0.07)',
    borderColor: 'rgba(0,68,170,0.25)',
    textColor: '#0044aa',
    perms: ['All Editor permissions', 'User management', 'Create & manage messages', 'Bulk operations', 'System logs access'],
  },
];

export default function SupportHubPage() {
  const [activePanel, setActivePanel] = useState(0);
  const [featRef, featInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [rolesRef, rolesInView] = useInView();

  return (
    <div className="sh-page">
      <SEO
        title="SupportHub (WIMOBOT) — Team Support Platform | Aditya Tech & Devoops"
        description="SupportHub is a comprehensive support hub for teams — canned responses, private notes, feedback, broadcast messaging, and admin tools. Built with Node.js & MongoDB."
      />

      {/* HERO */}
      <section className="sh-hero">
        <div className="sh-hero-grid" />
        <div className="sh-hero-glow" />

        <div className="sh-hero-content">
          <div className="sh-badge">
            <span className="sh-badge-dot" />
            Open Source · v2.4.9 · Node.js + MongoDB
          </div>

          <h1 className="sh-h1">
            The Support Hub<br />
            <span className="sh-h1-accent">Your Team</span>{' '}
            <span className="sh-h1-secondary">Deserves.</span>
          </h1>

          <p className="sh-sub">
            SupportHub (WIMOBOT) is a centralized platform for managing canned responses, private notes, team feedback, and broadcast messaging — with role-based access built in from day one.
          </p>

          <div className="sh-ctas">
            <a
              href="https://github.com/Codexadi25/SupportHub"
              target="_blank"
              rel="noopener noreferrer"
              className="sh-btn-primary"
            >
              View on GitHub →
            </a>
            <Link to="/contact" className="sh-btn-secondary">
              Get This Built For Us
            </Link>
          </div>

          {/* MOCK TERMINAL / DASHBOARD */}
          <div className="sh-dashboard-wrap">
            <div className="sh-dashboard">
              <div className="sh-dash-topbar">
                <div className="sh-dots">
                  <span className="sh-dot sh-dot-r" />
                  <span className="sh-dot sh-dot-y" />
                  <span className="sh-dot sh-dot-g" />
                </div>
                <div className="sh-dash-title">SupportHub — Canned Responses Panel</div>
              </div>
              <div className="sh-dash-body">
                {/* Sidebar */}
                <div className="sh-dash-sidebar">
                  <div className="sh-dash-sidebar-label">Panels</div>
                  {[
                    { icon: '📋', label: 'Canned', active: true },
                    { icon: '🔒', label: 'Notes' },
                    { icon: '📣', label: 'Feedback' },
                    { icon: '📡', label: 'Messages' },
                    { icon: '🛡️', label: 'Admin' },
                    { icon: '📊', label: 'Logs' },
                  ].map((item, i) => (
                    <div key={i} className={`sh-nav-item ${item.active ? 'sh-nav-active' : ''}`}>
                      <span>{item.icon}</span> {item.label}
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="sh-dash-main">
                  <div className="sh-dash-header">
                    <span className="sh-dash-section-title">Canned Responses</span>
                    <div className="sh-dash-search">🔍 Search responses...</div>
                  </div>

                  <div className="sh-cand-list">
                    {[
                      { tag: 'GREETING', text: 'Hi! Thanks for reaching out. How can I help you today?', tags: ['welcome', 'greeting'] },
                      { tag: 'REFUND', text: 'I\'ve initiated your refund. It will reflect in 3-5 business days.', tags: ['refund', 'billing'] },
                      { tag: 'ESCALATE', text: 'I\'m escalating this to our senior team. You\'ll hear back in 2 hours.', tags: ['escalation', 'urgent'] },
                      { tag: 'CLOSE', text: 'Is there anything else I can help you with today?', tags: ['closing', 'follow-up'] },
                    ].map((c, i) => (
                      <div key={i} className="sh-cand-card">
                        <div className="sh-cand-tag">{c.tag}</div>
                        <div className="sh-cand-text">{c.text}</div>
                        <div className="sh-cand-tags">
                          {c.tags.map((t, j) => (
                            <span key={j} className="sh-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="sh-stats" ref={statsRef}>
        <div className="sh-stats-grid">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="sh-stat-item"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="sh-stat-num">{s.value}</div>
              <div className="sh-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="sh-features" ref={featRef}>
        <div className="sh-section-inner">
          <div className="sh-section-tag">// WHAT IT DOES</div>
          <h2 className="sh-section-h">Everything your support team needs</h2>
          <p className="sh-section-sub">Six core modules covering the complete support workflow — from instant replies to team administration.</p>

          <div className="sh-features-grid">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="sh-feature-card"
                style={{
                  opacity: featInView ? 1 : 0,
                  transform: featInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div className="sh-feature-icon">{f.icon}</div>
                  <span className="sh-feature-tag">{f.tag}</span>
                </div>
                <div className="sh-feature-title">{f.title}</div>
                <div className="sh-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANELS DEEP DIVE */}
      <section className="sh-panels">
        <div className="sh-section-inner">
          <div className="sh-section-tag">// DEEP DIVE</div>
          <h2 className="sh-section-h">Four powerful panels</h2>
          <p className="sh-section-sub">Each panel is purpose-built for a specific workflow, with clean UX that gets out of your team's way.</p>

          <div className="sh-panels-grid">
            <div className="sh-panels-tabs">
              {PANELS.map((p, i) => (
                <div
                  key={i}
                  className={`sh-panel-tab ${activePanel === i ? 'sh-panel-tab-active' : ''}`}
                  onClick={() => setActivePanel(i)}
                >
                  <span style={{ fontSize: 20 }}>{p.icon}</span>
                  <span>{p.title}</span>
                </div>
              ))}
            </div>
            <div className="sh-panel-detail">
              <div className="sh-panel-detail-icon">{PANELS[activePanel].icon}</div>
              <h3 className="sh-panel-detail-title">{PANELS[activePanel].title}</h3>
              <p className="sh-panel-detail-desc">{PANELS[activePanel].desc}</p>
              <ul className="sh-panel-features">
                {PANELS[activePanel].features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="sh-tech">
        <div className="sh-section-inner">
          <div className="sh-section-tag">// TECH STACK</div>
          <h2 className="sh-section-h">Built on solid foundations</h2>
          <p className="sh-section-sub">A proven Node.js backend with MongoDB, real-time WebSockets, and a clean EJS frontend.</p>
          <div className="sh-tech-grid">
            {TECH_STACK.map((t, i) => (
              <span
                key={i}
                className="sh-tech-tag"
                style={{ color: t.color, borderColor: `${t.color}30`, background: `${t.color}08` }}
              >
                {t.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="sh-roles" ref={rolesRef}>
        <div className="sh-section-inner">
          <div className="sh-section-tag">// ACCESS CONTROL</div>
          <h2 className="sh-section-h">Three roles. Perfectly balanced.</h2>
          <p className="sh-section-sub">Role-based access control ensures everyone has exactly the permissions they need — nothing more, nothing less.</p>

          <div className="sh-roles-grid">
            {ROLES.map((r, i) => (
              <div
                key={i}
                className="sh-role-card"
                style={{
                  background: r.color,
                  borderColor: r.borderColor,
                  opacity: rolesInView ? 1 : 0,
                  transform: rolesInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.12}s`,
                }}
              >
                <div className="sh-role-icon">{r.icon}</div>
                <div className="sh-role-name" style={{ color: r.textColor }}>{r.name}</div>
                <ul className="sh-role-perms">
                  {r.perms.map((p, j) => (
                    <li key={j} style={{ borderLeftColor: r.textColor + '40' }}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sh-cta-section">
        <div className="sh-cta-glow" />
        <div className="sh-section-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="sh-section-tag" style={{ marginBottom: 24 }}>Get Started</div>
          <h2 className="sh-section-h" style={{ maxWidth: 640, margin: '0 auto 24px' }}>
            Want SupportHub customized for your team?
          </h2>
          <p className="sh-section-sub" style={{ margin: '0 auto 48px' }}>
            We can deploy and customize SupportHub for your organization — branded, hosted, and maintained by us.
          </p>
          <div className="sh-ctas">
            <Link to="/contact" className="sh-btn-primary">
              Get a Custom Deployment →
            </Link>
            <a
              href="https://github.com/Codexadi25/SupportHub"
              target="_blank"
              rel="noopener noreferrer"
              className="sh-btn-secondary"
            >
              View Source on GitHub
            </a>
          </div>
          <p className="sh-cta-small">MIT License · Open Source · Free to self-host</p>
        </div>
      </section>
    </div>
  );
}
