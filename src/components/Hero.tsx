"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Search, 
  BarChart, 
  Target,
  Flame,
  Clock,
  ShieldCheck
} from "lucide-react";

export default function Hero() {
  return (
    <section 
      style={{
        position: "relative",
        paddingTop: "60px",
        paddingBottom: "90px",
        overflow: "hidden",
        textAlign: "center"
      }}
      aria-labelledby="hero-heading"
    >
      {/* Background Central Cyber Globe / Radial Glow */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "550px",
          background: "radial-gradient(ellipse at center, rgba(0, 242, 254, 0.12) 0%, rgba(168, 85, 247, 0.08) 45%, rgba(6, 9, 19, 0) 75%)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      {/* Decorative Grid Lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.6
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "980px" }}>
        
        {/* Top Glowing Badge */}
        <div style={{ display: "inline-block", marginBottom: "24px" }}>
          <div className="pill-badge" style={{ padding: "8px 20px", fontSize: "0.85rem", gap: "10px" }}>
            <span className="pill-dot"></span>
            <span>AI-Powered Digital Marketing Institute</span>
          </div>
        </div>

        {/* Primary H1 Heading */}
        <h1 
          id="hero-heading"
          style={{
            fontSize: "clamp(2.3rem, 5.5vw, 4rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "20px",
            letterSpacing: "-0.03em",
            color: "#ffffff"
          }}
        >
          Master Advanced <span className="gradient-text-cyan-purple">Digital Marketing</span> with Robot Genie
        </h1>

        {/* Core Subtitle / Supporting text */}
        <p 
          style={{
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            color: "var(--text-muted)",
            maxWidth: "760px",
            margin: "0 auto 28px auto",
            lineHeight: 1.65,
            fontWeight: 400
          }}
        >
          Build practical digital marketing skills in SEO, social media marketing, content marketing, paid advertising and more through real-world live projects and industry mentorship.
        </p>

        {/* Discipline Tag Highlights */}
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "36px",
            fontSize: "0.95rem",
            fontWeight: 600
          }}
        >
          <span style={{ color: "#00f2fe" }}>Digital Marketing</span>
          <span style={{ color: "var(--text-dim)" }}>•</span>
          <span style={{ color: "#c084fc" }}>SEO & Organic Growth</span>
          <span style={{ color: "var(--text-dim)" }}>•</span>
          <span style={{ color: "#38bdf8" }}>Google Ads & PPC</span>
          <span style={{ color: "var(--text-dim)" }}>•</span>
          <span style={{ color: "#f472b6" }}>Social Media</span>
          <span style={{ color: "var(--text-dim)" }}>•</span>
          <span style={{ color: "#34d399" }}>GA4 Analytics</span>
        </div>

        {/* Action CTAs */}
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginBottom: "36px"
          }}
        >
          <Link
            href="/courses"
            className="btn btn-primary btn-lg"
            style={{
              padding: "16px 36px",
              fontSize: "1.05rem"
            }}
          >
            <span>Explore Courses</span>
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="btn btn-outline btn-lg"
            style={{
              padding: "16px 32px",
              fontSize: "1.05rem"
            }}
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Batch Urgency & Trust Micro-indicators */}
        <div 
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            padding: "10px 22px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "9999px",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            marginBottom: "40px"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#f97316" }}>
            <Flame size={16} />
            <span style={{ fontWeight: 600 }}>Only 30 Seats Left for Upcoming Batch</span>
          </div>
          <span style={{ color: "var(--text-dim)" }}>•</span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#38bdf8" }}>
            <Clock size={16} />
            <span>Admissions Closing Soon</span>
          </div>
          <span style={{ color: "var(--text-dim)" }}>•</span>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#10b981" }}>
            <ShieldCheck size={16} />
            <span>100% Practical Training</span>
          </div>
        </div>

        {/* Hero Interactive Live Dashboard Preview Box */}
        <div
          style={{
            marginTop: "20px",
            background: "rgba(11, 16, 32, 0.8)",
            border: "1px solid rgba(0, 242, 254, 0.25)",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 242, 254, 0.15)",
            position: "relative"
          }}
          className="hero-dashboard-preview"
        >
          <div 
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              paddingBottom: "16px",
              marginBottom: "20px",
              flexWrap: "wrap",
              gap: "12px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginLeft: "8px", fontWeight: 600 }}>
                Robot Genie • Live Campaign Performance Console
              </span>
            </div>

            <div style={{ display: "flex", gap: "8px" }}>
              <span className="pill-badge" style={{ fontSize: "0.72rem", padding: "3px 10px" }}>
                Active Simulation: Q4 E-Commerce Launch
              </span>
            </div>
          </div>

          {/* Metric KPI cards */}
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              textAlign: "left"
            }}
          >
            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "4px" }}>Organic Search Traffic</div>
              <div style={{ fontSize: "1.45rem", fontWeight: 700, color: "#00f2fe" }}>+348.6%</div>
              <div style={{ fontSize: "0.74rem", color: "#10b981", marginTop: "4px" }}>↑ Semantic SEO Cluster</div>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "4px" }}>Average ROAS (Ads)</div>
              <div style={{ fontSize: "1.45rem", fontWeight: 700, color: "#c084fc" }}>4.82x</div>
              <div style={{ fontSize: "0.74rem", color: "#10b981", marginTop: "4px" }}>↑ Google PMax + Meta CAPI</div>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "4px" }}>Conversion Rate</div>
              <div style={{ fontSize: "1.45rem", fontWeight: 700, color: "#38bdf8" }}>5.4%</div>
              <div style={{ fontSize: "0.74rem", color: "#10b981", marginTop: "4px" }}>↑ CRO & Landing Page A/B</div>
            </div>

            <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "16px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "4px" }}>Students Placed</div>
              <div style={{ fontSize: "1.45rem", fontWeight: 700, color: "#34d399" }}>94.2%</div>
              <div style={{ fontSize: "0.74rem", color: "var(--text-muted)", marginTop: "4px" }}>Agency & In-house roles</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
