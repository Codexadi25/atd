import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO.js';
import './RevenueOSPage.css';

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
    icon: '📊',
    title: 'Revenue Dashboard',
    desc: 'One-glance view of conversions, order value, and revenue trends. See what\'s working and what\'s bleeding money.',
  },
  {
    icon: '🧠',
    title: 'AI Suggestions Engine',
    desc: 'Real-time cards like "Your pricing is 18% above market" or "Add urgency to boost conversions +12%." Actionable, not just data.',
  },
  {
    icon: '💰',
    title: 'Smart Pricing Tool',
    desc: 'Enter your cost price. AI suggests psychological pricing, bundle deals, and limited-time offers that buyers can\'t ignore.',
  },
  {
    icon: '🏗️',
    title: 'AI Landing Page Builder',
    desc: 'Describe your product. Get a high-converting landing page in seconds — headline, offer, CTA, and all.',
  },
  {
    icon: '📉',
    title: 'Funnel Analyzer',
    desc: 'See exactly where customers drop off. "62% leave at checkout" — with specific fixes: reduce steps, add COD, add trust badges.',
  },
  {
    icon: '💬',
    title: 'WhatsApp Conversion Tools',
    desc: 'India runs on WhatsApp. Auto-reply templates, abandoned cart nudges, and follow-up sequences that close sales while you sleep.',
  },
];

const STATS = [
  { value: '₹2.4Cr+', label: 'Revenue generated for clients' },
  { value: '240+', label: 'Businesses on platform' },
  { value: '4.2×', label: 'Average ROI in 30 days' },
  { value: '87%', label: 'See results in under a week' },
];

const STEPS = [
  {
    title: 'Connect Your Business',
    desc: 'Share your website, Instagram link, or Shopify store. Tell us your business type and monthly revenue range. Takes 2 minutes.',
    visual: '🔗',
    visualTitle: 'Connect in 2 minutes',
    visualDesc: 'Paste your link, pick your business type, and you\'re in.',
  },
  {
    title: 'AI Analyzes Everything',
    desc: 'Our engine scans your prices, funnel, competitors, and customer behavior. Generates a Revenue Score and priority action list.',
    visual: '⚡',
    visualTitle: 'AI finds your leaks',
    visualDesc: '3 revenue issues identified instantly.',
  },
  {
    title: 'Apply Smart Fixes',
    desc: 'One-click improvements: update pricing, rebuild your landing page, activate WhatsApp automations. Every action tracked.',
    visual: '🛠️',
    visualTitle: 'One-click improvements',
    visualDesc: 'Every change tracked, every result measured.',
  },
  {
    title: 'Watch Revenue Grow',
    desc: 'See conversions and revenue climb in real time. AI keeps learning and improving suggestions. New insights weekly.',
    visual: '📈',
    visualTitle: 'Revenue grows automatically',
    visualDesc: 'AI keeps improving as it learns your business.',
  },
];

const PRICING = [
  {
    tier: 'Starter',
    price: '499',
    period: 'per month',
    desc: 'Perfect for solopreneurs and Instagram sellers just getting started.',
    features: ['AI Revenue Dashboard', '5 AI Suggestions/month', 'Smart Pricing Tool', '1 Landing Page', 'Basic Funnel Analyzer', 'Email Support'],
    cta: 'Get Started Free',
    featured: false,
  },
  {
    tier: 'Growth',
    price: '1,499',
    period: 'per month',
    desc: 'For serious D2C brands ready to scale revenue with AI.',
    features: ['Everything in Starter', 'Unlimited AI Suggestions', '10 Landing Pages', 'Advanced Funnel Analyzer', 'WhatsApp Automation (500/mo)', 'Priority Support', 'Competitor Pricing Intel'],
    cta: 'Start 14-Day Trial',
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Scale',
    price: '3,999',
    period: 'per month',
    desc: 'For high-volume sellers and agencies managing multiple brands.',
    features: ['Everything in Growth', 'Multi-store Dashboard', 'Unlimited Landing Pages', 'WhatsApp Automation (5,000/mo)', 'Dedicated AI Manager', 'Custom Integrations', 'White-label Options'],
    cta: 'Talk to Sales',
    featured: false,
  },
];

const FAQS = [
  {
    q: 'Do I need to be technical to use RevenueOS?',
    a: 'Not at all. RevenueOS is built for business owners, not developers. Everything is point-and-click — no code, no complicated setup.',
  },
  {
    q: 'How long does it take to see results?',
    a: '87% of our customers see measurable improvement in conversion rates within the first 7 days. AI starts working the moment you connect your business.',
  },
  {
    q: 'Which platforms does RevenueOS connect to?',
    a: 'We support Shopify, WooCommerce, custom websites, Instagram shops, and any business with a web presence. If you have a URL, we can analyze it.',
  },
  {
    q: 'What makes RevenueOS different from Google Analytics?',
    a: 'Google Analytics tells you what happened. RevenueOS tells you what to do about it — with specific, actionable AI fixes ranked by revenue impact.',
  },
  {
    q: 'Is my business data secure?',
    a: 'Absolutely. We use bank-grade encryption, never sell your data, and are fully GDPR compliant. Your business insights stay private.',
  },
];

export default function RevenueOSPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [featRef, featInView] = useInView();
  const [statsRef, statsInView] = useInView();
  const [pricingRef, pricingInView] = useInView();

  return (
    <div className="ros-page">
      <SEO
        title="RevenueOS — AI Revenue Engine | Aditya Tech & Devoops"
        description="RevenueOS uses AI to optimize your pricing, rebuild your funnels, and convert more customers — without hiring a growth team."
      />

      {/* HERO */}
      <section className="ros-hero">
        <div className="ros-hero-bg-grid" />
        <div className="ros-hero-glow" />

        <div className="ros-hero-content">
          <div className="ros-badge">
            <span className="ros-badge-dot" />
            Launching 2025 · AI-Powered Revenue Growth
          </div>

          <h1 className="ros-h1">
            Turn Visitors Into{' '}
            <span className="ros-h1-accent">Revenue.</span>
            <br />
            <span className="ros-h1-orange">Automatically.</span>
          </h1>

          <p className="ros-sub">
            RevenueOS uses AI to optimize your pricing, rebuild your funnels, and convert more customers — without hiring a growth team.
          </p>

          <div className="ros-ctas">
            <a href="mailto:hello@adityatechndevoops.com" className="ros-btn-primary">
              Start Free — No Card Needed
            </a>
            <a href="#ros-how" className="ros-btn-secondary">
              See How It Works
            </a>
          </div>

          <div className="ros-social-proof">
            <div className="ros-avatars">
              {['AK', 'SR', 'PV', 'MJ'].map(a => (
                <div key={a} className="ros-avatar">{a}</div>
              ))}
              <div className="ros-avatar ros-avatar-plus">+</div>
            </div>
            <div>
              <div className="ros-stars">★★★★★</div>
              <div className="ros-proof-text"><strong>240+ businesses</strong> growing with RevenueOS</div>
            </div>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="ros-dashboard-wrap">
            <div className="ros-dashboard">
              <div className="ros-dash-topbar">
                <div className="ros-dots">
                  <span className="ros-dot ros-dot-r" />
                  <span className="ros-dot ros-dot-y" />
                  <span className="ros-dot ros-dot-g" />
                </div>
                <div className="ros-dash-title">RevenueOS Dashboard — revenueOS.app</div>
              </div>
              <div className="ros-dash-body">
                <div className="ros-dash-sidebar">
                  <div className="ros-dash-sidebar-label">Menu</div>
                  {[
                    { icon: '📊', label: 'Dashboard', active: true },
                    { icon: '🧠', label: 'AI Suggestions' },
                    { icon: '💰', label: 'Smart Pricing' },
                    { icon: '🏗️', label: 'Page Builder' },
                    { icon: '📉', label: 'Funnel Analyzer' },
                    { icon: '💬', label: 'WhatsApp Tools' },
                  ].map((item, i) => (
                    <div key={i} className={`ros-nav-item ${item.active ? 'ros-nav-active' : ''}`}>
                      <span>{item.icon}</span> {item.label}
                    </div>
                  ))}
                </div>
                <div className="ros-dash-main">
                  <div className="ros-dash-row">
                    {[
                      { label: 'Monthly Revenue', value: '₹84K', delta: '↑ +23%' },
                      { label: 'Conversion Rate', value: '4.7%', delta: '↑ +1.2%' },
                      { label: 'Avg. Order Value', value: '₹1,240', delta: '↑ +18%' },
                      { label: 'AI Score', value: '86/100', delta: '↑ Excellent' },
                    ].map((c, i) => (
                      <div key={i} className="ros-dash-card">
                        <div className="ros-card-label">{c.label}</div>
                        <div className="ros-card-value">{c.value}</div>
                        <div className="ros-card-delta">{c.delta}</div>
                      </div>
                    ))}
                  </div>
                  <div className="ros-insights">
                    <div className="ros-insight-card">
                      <div className="ros-insight-icon" style={{ background: 'rgba(0,188,212,0.12)', color: '#00bcd4' }}>💡</div>
                      <div>
                        <div className="ros-insight-tag">AI Insight · High Impact</div>
                        <div className="ros-insight-text">Your checkout has 3 unnecessary steps. Removing them could increase conversions by <strong>+14%</strong>.</div>
                      </div>
                    </div>
                    <div className="ros-insight-card">
                      <div className="ros-insight-icon" style={{ background: 'rgba(0,76,255,0.1)', color: '#004cff' }}>🔥</div>
                      <div>
                        <div className="ros-insight-tag" style={{ color: '#004cff' }}>Pricing Alert</div>
                        <div className="ros-insight-text">Changing ₹500 to <strong>₹499</strong> (psychological pricing) can lift add-to-cart by up to 9%.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div className="ros-logos-strip">
        <span className="ros-logos-label">Trusted by</span>
        <div className="ros-logos-track">
          {['CloudKitchen.in', 'StyleNova', 'FreshLeaf D2C', 'GrowthHive', 'MakerPal', 'UrbanEats'].map(l => (
            <div key={l} className="ros-logo-item">{l}</div>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section className="ros-features" id="ros-features" ref={featRef}>
        <div className="ros-section-inner">
          <div className="ros-section-tag">What We Build</div>
          <h2 className="ros-section-h">Your AI-powered<br />revenue team</h2>
          <p className="ros-section-sub">Six powerful tools that replace an entire growth, pricing, and marketing team — at a fraction of the cost.</p>

          <div className="ros-features-grid">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="ros-feature-cell"
                style={{
                  opacity: featInView ? 1 : 0,
                  transform: featInView ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.08}s`,
                }}
              >
                <div className="ros-feature-icon">{f.icon}</div>
                <div className="ros-feature-title">{f.title}</div>
                <div className="ros-feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="ros-how" id="ros-how">
        <div className="ros-section-inner">
          <div className="ros-section-tag">The Process</div>
          <h2 className="ros-section-h">From signup to<br />revenue in 7 days</h2>
          <p className="ros-section-sub">No developers, no agencies, no guesswork. Just connect your business and let AI do the heavy lifting.</p>

          <div className="ros-how-grid">
            <div className="ros-steps">
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  className={`ros-step ${activeStep === i ? 'ros-step-active' : ''}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="ros-step-num">{i + 1}</div>
                  <div>
                    <div className="ros-step-title">{s.title}</div>
                    <div className="ros-step-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="ros-step-visual">
              <div style={{ fontSize: 48, marginBottom: 16 }}>{STEPS[activeStep].visual}</div>
              <div className="ros-step-visual-title">{STEPS[activeStep].visualTitle}</div>
              <div className="ros-step-visual-desc">{STEPS[activeStep].visualDesc}</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="ros-stats" ref={statsRef}>
        <div className="ros-stats-grid">
          {STATS.map((s, i) => (
            <div
              key={i}
              className="ros-stat-item"
              style={{
                opacity: statsInView ? 1 : 0,
                transform: statsInView ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease ${i * 0.12}s`,
              }}
            >
              <div className="ros-stat-num">{s.value}</div>
              <div className="ros-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PRICING */}
      <section className="ros-pricing" id="ros-pricing" ref={pricingRef}>
        <div className="ros-section-inner">
          <div className="ros-section-tag" style={{ background: 'rgba(0,188,212,0.15)', color: '#00bcd4', borderColor: 'rgba(0,188,212,0.3)' }}>Pricing</div>
          <h2 className="ros-section-h" style={{ color: '#fff' }}>Pay for revenue.<br />Not software.</h2>
          <p className="ros-section-sub" style={{ color: 'rgba(255,255,255,0.6)' }}>Every plan pays for itself. If we don't grow your revenue, we don't deserve your money.</p>

          <div className="ros-pricing-grid">
            {PRICING.map((p, i) => (
              <div
                key={i}
                className={`ros-pricing-card ${p.featured ? 'ros-pricing-featured' : ''}`}
                style={{
                  opacity: pricingInView ? 1 : 0,
                  transform: pricingInView
                    ? p.featured ? 'scale(1.03)' : 'translateY(0)'
                    : 'translateY(30px)',
                  transition: `all 0.6s ease ${i * 0.12}s`,
                }}
              >
                {p.badge && <div className="ros-pricing-badge">{p.badge}</div>}
                <div className="ros-pricing-tier">{p.tier}</div>
                <div className="ros-pricing-price"><sup>₹</sup>{p.price}</div>
                <div className="ros-pricing-period">{p.period}</div>
                <div className="ros-pricing-desc">{p.desc}</div>
                <div className="ros-pricing-divider" />
                <ul className="ros-pricing-features">
                  {p.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a
                  href="mailto:hello@adityatechndevoops.com"
                  className={p.featured ? 'ros-btn-white' : 'ros-btn-outline-white'}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ros-faq" id="ros-faq">
        <div className="ros-section-inner">
          <div className="ros-section-tag">FAQ</div>
          <h2 className="ros-section-h">Common questions</h2>

          <div className="ros-faq-list">
            {FAQS.map((f, i) => (
              <div key={i} className={`ros-faq-item ${openFaq === i ? 'ros-faq-open' : ''}`}>
                <div className="ros-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <div className="ros-faq-toggle">{openFaq === i ? '−' : '+'}</div>
                </div>
                {openFaq === i && (
                  <div className="ros-faq-a">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ros-cta-section">
        <div className="ros-cta-glow" />
        <div className="ros-section-inner" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="ros-section-tag" style={{ marginBottom: 24 }}>Get Started</div>
          <h2 className="ros-section-h" style={{ maxWidth: 600, margin: '0 auto 24px' }}>
            Ready to grow your revenue with AI?
          </h2>
          <p className="ros-section-sub" style={{ margin: '0 auto 48px' }}>
            Join 240+ businesses already using RevenueOS to scale smarter.
          </p>
          <div className="ros-ctas">
            <a href="mailto:hello@adityatechndevoops.com" className="ros-btn-primary">
              Start Free Today →
            </a>
            <Link to="/contact" className="ros-btn-secondary">
              Talk to Us
            </Link>
          </div>
          <p className="ros-cta-small">No credit card required · 14-day free trial · Cancel anytime</p>
        </div>
      </section>
    </div>
  );
}
