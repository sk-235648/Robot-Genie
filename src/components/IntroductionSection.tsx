import React from "react";
import Link from "next/link";
import { CheckCircle, Zap, Globe, Sparkles, ArrowRight } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section 
      style={{
        padding: "80px 0",
        position: "relative",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)"
      }}
      aria-labelledby="intro-heading"
    >
      <div className="container">
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center"
          }}
        >
          {/* Left Column: Story & Positioning */}
          <div>
            <div className="pill-badge" style={{ marginBottom: "16px" }}>
              <Sparkles size={14} color="#00f2fe" />
              <span>About Robot Genie</span>
            </div>

            <h2 
              id="intro-heading"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                marginBottom: "20px",
                lineHeight: 1.25
              }}
            >
              Transforming Digital Marketing Education Through{" "}
              <span className="gradient-text-cyan-purple">Practical Mastery</span>
            </h2>

            <p style={{ fontSize: "1.02rem", color: "var(--text-muted)", marginBottom: "18px", lineHeight: 1.7 }}>
              Robot Genie is built on a clear realization: traditional marketing courses focus heavily on outdated textbooks, leaving graduates unprepared for modern agencies and digital brands.
            </p>

            <p style={{ fontSize: "1.02rem", color: "var(--text-muted)", marginBottom: "28px", lineHeight: 1.7 }}>
              Our platform bridges this divide. Every student is immersed in active campaign simulators, real-time keyword research, live Google Ads and Meta budgets, semantic SEO audits, and conversion attribution using Google Analytics 4.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(0, 242, 254, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle size={15} color="#00f2fe" />
                </div>
                <span style={{ fontSize: "0.95rem", color: "#e2e8f0" }}>
                  Curriculum engineered by active digital marketing practitioners & agency founders
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(168, 85, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle size={15} color="#c084fc" />
                </div>
                <span style={{ fontSize: "0.95rem", color: "#e2e8f0" }}>
                  Live training on GA4, SEMrush, Meta Ads Manager, and Google Tag Manager
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(0, 242, 254, 0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle size={15} color="#00f2fe" />
                </div>
                <span style={{ fontSize: "0.95rem", color: "#e2e8f0" }}>
                  Verified certificates backed by audited portfolio projects
                </span>
              </div>
            </div>

            <Link
              href="/about"
              className="btn btn-outline"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <span>Read Full Story About Robot Genie</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Visual Feature Grid */}
          <div style={{ position: "relative" }}>
            <div 
              style={{
                position: "absolute",
                top: "20%",
                right: "-10%",
                width: "350px",
                height: "350px",
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
                zIndex: 0,
                pointerEvents: "none"
              }}
            />

            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "20px",
                position: "relative",
                zIndex: 1
              }}
            >
              <div className="glass-card" style={{ padding: "24px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(0, 242, 254, 0.1)", border: "1px solid rgba(0, 242, 254, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <Zap size={22} color="#00f2fe" />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>Live Simulations</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Run campaigns with simulated ad spend and real-time CPC and CTR feedback loops.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "24px", marginTop: "24px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(168, 85, 247, 0.1)", border: "1px solid rgba(168, 85, 247, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <Globe size={22} color="#c084fc" />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>Global Tool Stack</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Direct exposure to SEMrush, Google Ads, Meta Business Suite, and GA4 dashboards.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "24px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.1)", border: "1px solid rgba(56, 189, 248, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <Sparkles size={22} color="#38bdf8" />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>AI Automation</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Harness AI for prompt engineering, generative SEO outlines, and copywriting velocity.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "24px", marginTop: "24px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(52, 211, 153, 0.1)", border: "1px solid rgba(52, 211, 153, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                  <CheckCircle size={22} color="#34d399" />
                </div>
                <h3 style={{ fontSize: "1.15rem", marginBottom: "8px" }}>Audit Portfolio</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Graduate with 3 complete, verified case studies to impress hiring managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
