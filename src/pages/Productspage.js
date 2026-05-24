import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO.js';
import '../styles/ProductsPage.css';

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

const FEATURED_PRODUCTS = [
  
  {
    slug: 'supporthub',
    name: 'SupportHub',
    tagline: 'Centralized Support Hub for Teams',
    desc: 'WIMOBOT — a comprehensive platform for canned responses, private notes, team feedback, and broadcast messaging with role-based access control.',
    tags: ['Node.js', 'MongoDB', 'WebSockets', 'Open Source'],
    status: 'LTS · v2.4.9',
    statusColor: '#004cff',
    icon: '🛡️',
    gradient: 'linear-gradient(135deg, rgba(0,76,255,0.06), rgba(0,188,212,0.04))',
    borderColor: 'rgba(0,76,255,0.2)',
    accent: '#004cff',
    accentSecondary: '#00bcd4',
    highlights: ['Canned Responses Library', 'Private Notes System', 'Feedback & Voting', 'Role-Based Access'],
  },
  {
    slug: 'nexlog',
    name: 'NEXLOG',
    tagline: 'B2B Logistics & Dispatch Platform',
    desc: 'End-to-end fleet management SaaS with real-time tracking, intelligent dispatch, and support automation for high-volume delivery networks.',
    tags: ['Logistics', 'Dispatch', 'WebSockets', 'SaaS'],
    status: 'Launched in 2026',
    statusColor: '#009dff',
    icon: '🚚',
    gradient: 'linear-gradient(135deg, rgba(0, 55, 255, 0.06), rgba(34, 60, 255, 0.04))',
    borderColor: 'rgba(0, 30, 255, 0.25)',
    accent: '#0099ff',
    accentSecondary: '#1100ff',
    highlights: ['Real-Time Fleet Tracking', 'Intelligent Dispatch Engine', 'Support Lifeline Dashboard', 'Shipment Lifecycle Designer'],
  },
  {
    slug: 'revenueos',
    name: 'RevenueOS',
    tagline: 'AI Revenue Engine for Your Business',
    desc: 'Uses AI to optimize your pricing, rebuild your funnels, and convert more customers — without hiring a growth team.',
    tags: ['AI', 'SaaS', 'Revenue', 'Pricing'],
    status: 'Launched in 2026',
    statusColor: '#00bcd4',
    icon: '📊',
    gradient: 'linear-gradient(135deg, rgba(0,188,212,0.06), rgba(0,68,170,0.04))',
    borderColor: 'rgba(0,188,212,0.25)',
    accent: '#0044aa',
    accentSecondary: '#004cff',
    highlights: ['AI Pricing Suggestions', 'Funnel Analyzer', 'WhatsApp Automation', 'Landing Page Builder'],
  },
];

const SERVICE_PRODUCTS = [
  {
    icon: '🌐',
    title: 'Modern Business Website',
    category: 'Website',
    desc: 'Professional corporate website with modern design, responsive layout, and powerful features.',
    price: '₹25,000',
    tags: ['React', 'SEO', 'Responsive'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    desc: 'Complete online store with payment integration, inventory management, and admin panel.',
    price: '₹45,000',
    tags: ['React', 'Stripe', 'MongoDB'],
  },
  {
    icon: '📊',
    title: 'Admin Dashboard',
    category: 'Dashboard',
    desc: 'Comprehensive admin dashboard with analytics, user management, and real-time monitoring.',
    price: '₹40,000',
    tags: ['React', 'Chart.js', 'Node.js'],
  },
  {
    icon: '🎓',
    title: 'Educational Platform',
    category: 'EdTech',
    desc: 'Learning management system with course creation, student tracking, and interactive features.',
    price: '₹35,000',
    tags: ['React', 'Firebase', 'Video.js'],
  },
  {
    icon: '🏥',
    title: 'Healthcare Portal',
    category: 'Healthcare',
    desc: 'Medical practice management with appointment booking and patient records.',
    price: '₹55,000',
    tags: ['React', 'PostgreSQL', 'HIPAA'],
  },
  {
    icon: '📈',
    title: 'Analytics Board',
    category: 'Analytics',
    desc: 'Business intelligence with KPI tracking, data visualization, and predictive insights.',
    price: '₹70,000',
    tags: ['React', 'D3.js', 'Python'],
  },
];

export default function ProductsPage() {
  const [heroRef, heroInView] = useInView(0.1);
  const [prodRef, prodInView] = useInView();
  const [svcRef, svcInView] = useInView();

  return (
    <div className="pp-page">
      <SEO
        title="Products — Aditya Tech & Devoops"
        description="Explore our flagship products RevenueOS, SupportHub, and NEXLOG, plus our library of website templates, dashboards, and custom digital solutions."
      />

      {/* HERO */}
      <section className="pp-hero" ref={heroRef}>
        <div className="pp-hero-grid" />
        <div className="pp-hero-glow" />
        <div
          className="pp-hero-content"
          style={{
            opacity: heroInView ? 1 : 0,
            transform: heroInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s ease',
          }}
        >
          <div className="pp-badge">
            <span className="pp-badge-dot" />
            // PRODUCTS
          </div>
          <h1 className="pp-h1">
            Tools & Solutions<br />
            <span className="pp-h1-gradient">We Actually Ship</span>
          </h1>
          <p className="pp-sub">
            From our own AI-powered products to custom-built digital solutions — everything is crafted with precision, shipped fast, and built to scale.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="pp-featured" ref={prodRef}>
        <div className="pp-section-inner">
          <div className="pp-section-label">// OUR PRODUCTS</div>
          <h2 className="pp-section-h">Flagship Products</h2>
          <p className="pp-section-sub">Products we build and maintain — purpose-built for real business problems.</p>

          <div className="pp-featured-grid">
            {FEATURED_PRODUCTS.map((p, i) => (
              <div
                key={p.slug}
                className="pp-featured-card"
                style={{
                  background: p.gradient,
                  borderColor: p.borderColor,
                  opacity: prodInView ? 1 : 0,
                  transform: prodInView ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.7s ease ${i * 0.15}s`,
                }}
              >
                <div className="pp-featured-header">
                  <div className="pp-featured-icon-wrap" style={{ background: `${p.accent}15` }}>
                    <span style={{ fontSize: 36 }}>{p.icon}</span>
                  </div>
                  <div
                    className="pp-featured-status"
                    style={{
                      color: p.statusColor,
                      background: `${p.statusColor}12`,
                      border: `1px solid ${p.statusColor}30`,
                    }}
                  >
                    <span
                      className="pp-status-dot"
                      style={{ background: p.statusColor }}
                    />
                    {p.status}
                  </div>
                </div>

                <h3 className="pp-featured-name">{p.name}</h3>
                <p className="pp-featured-tagline" style={{ color: p.accent }}>{p.tagline}</p>
                <p className="pp-featured-desc">{p.desc}</p>

                <ul className="pp-featured-highlights">
                  {p.highlights.map((h, j) => (
                    <li key={j} style={{ borderLeftColor: `${p.accent}50` }}>
                      <span style={{ color: p.accent }}>✓</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="pp-featured-tags">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="pp-tag"
                      style={{ color: p.accent, background: `${p.accent}10`, borderColor: `${p.accent}25` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/products/${p.slug}`}
                  className="pp-featured-cta"
                  style={{ background: `linear-gradient(135deg, ${p.accent}, ${p.accentSecondary || '#004cff'})` }}
                >
                  Explore {p.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE PRODUCTS */}
      <section className="pp-services" ref={svcRef}>
        <div className="pp-section-inner">
          <div className="pp-section-label">// WHAT WE BUILD</div>
          <h2 className="pp-section-h">Custom Solutions</h2>
          <p className="pp-section-sub">Off-the-shelf starting points we tailor to your business — websites, dashboards, and analytics boards.</p>

          <div className="pp-services-grid">
            {SERVICE_PRODUCTS.map((s, i) => (
              <div
                key={i}
                className="pp-service-card"
                style={{
                  opacity: svcInView ? 1 : 0,
                  transform: svcInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div className="pp-service-header">
                  <div className="pp-service-icon">{s.icon}</div>
                  <div className="pp-service-category">{s.category}</div>
                </div>
                <h3 className="pp-service-title">{s.title}</h3>
                <p className="pp-service-desc">{s.desc}</p>
                <div className="pp-service-tags">
                  {s.tags.map((t, j) => (
                    <span key={j} className="pp-tag pp-tag-default">{t}</span>
                  ))}
                </div>
                <div className="pp-service-footer">
                  <span className="pp-service-price">Starting {s.price}</span>
                  <Link to="/contact" className="pp-service-cta">Request →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pp-cta">
        <div className="pp-cta-glow" />
        <div className="pp-section-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 className="pp-section-h" style={{ maxWidth: 560, margin: '0 auto 20px' }}>
            Need something custom?
          </h2>
          <p className="pp-section-sub" style={{ margin: '0 auto 40px' }}>
            Tell us what you're building — we'll architect, build, and ship it.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="pp-btn-primary">Start a Project →</Link>
            <Link to="/pricing" className="pp-btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}