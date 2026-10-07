import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#040711",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "70px",
        paddingBottom: "35px",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative background glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "200px",
          background: "radial-gradient(circle, rgba(0, 242, 254, 0.06) 0%, rgba(4, 7, 17, 0) 70%)",
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "50px"
          }}
        >
          {/* Col 1: Brand & Bio */}
          <div>
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px"
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(168, 85, 247, 0.2))",
                  border: "1px solid rgba(0, 242, 254, 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="#00f2fe" strokeWidth="1.8" />
                  <circle cx="12" cy="11" r="2.5" fill="#a855f7" />
                </svg>
              </div>
              <span style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.2rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#ffffff"
              }}>
                ROBOT <span style={{ color: "#00f2fe" }}>GENIE</span>
              </span>
            </Link>

            <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
              Robot Genie is a premier digital marketing education and training platform. We provide hands-on curriculum in SEO, performance advertising, social media strategy, content marketing, and data analytics.
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <span className="pill-badge" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                <CheckCircle size={12} color="#00f2fe" /> AI-Augmented
              </span>
              <span className="pill-badge pill-badge-purple" style={{ fontSize: "0.75rem", padding: "4px 10px" }}>
                100% Practical
              </span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "18px", letterSpacing: "0.02em" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/" style={{ color: "var(--text-muted)", fontSize: "0.92rem", transition: "color 0.2s" }}>
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: "var(--text-muted)", fontSize: "0.92rem", transition: "color 0.2s" }}>
                  About Robot Genie
                </Link>
              </li>
              <li>
                <Link href="/courses" style={{ color: "var(--text-muted)", fontSize: "0.92rem", transition: "color 0.2s" }}>
                  Explore All Courses
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "var(--text-muted)", fontSize: "0.92rem", transition: "color 0.2s" }}>
                  Contact & Mentorship
                </Link>
              </li>
              <li>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#00f2fe", fontSize: "0.92rem", display: "inline-flex", alignItems: "center", gap: "5px" }}
                >
                  Medium Article <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "18px", letterSpacing: "0.02em" }}>
              Specialized Programs
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/courses/advanced-digital-marketing" style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Advanced Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/courses/seo" style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Search Engine Optimization (SEO)
                </Link>
              </li>
              <li>
                <Link href="/courses/social-media-marketing" style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link href="/courses/google-ads-ppc" style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Google Ads & PPC Advertising
                </Link>
              </li>
              <li>
                <Link href="/courses/analytics-strategy" style={{ color: "var(--text-muted)", fontSize: "0.92rem" }}>
                  Analytics & Digital Marketing Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "18px", letterSpacing: "0.02em" }}>
              Contact & Inquiries
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.92rem", color: "var(--text-muted)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <MapPin size={18} color="#00f2fe" style={{ marginTop: "2px", flexShrink: 0 }} />
                <span>METRO PILLAR NO 35, B-29 1st office no 301, Laxmi Nagar, Delhi, 110092, India</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={18} color="#00f2fe" style={{ flexShrink: 0 }} />
                <span>contact@robotgenie.in</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={18} color="#00f2fe" style={{ flexShrink: 0 }} />
                <span>+91 9891707129</span>
              </div>
              <div style={{ marginTop: "10px" }}>
                <Link
                  href="/contact"
                  className="btn btn-outline btn-sm"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <span>Drop an Inquiry</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "14px",
            fontSize: "0.85rem",
            color: "var(--text-dim)"
          }}
        >
          <div>
            © 2026 Robot Genie. All rights reserved. Developed for Digital Marketing Practical Examination.
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/courses" style={{ color: "var(--text-muted)" }}>Course Catalog</Link>
            <Link href="/about" style={{ color: "var(--text-muted)" }}>About Platform</Link>
            <Link href="/contact" style={{ color: "var(--text-muted)" }}>Support & Admissions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
