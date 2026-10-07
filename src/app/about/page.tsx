import React from "react";
import Link from "next/link";
import { 
  Target, 
  Eye, 
  CheckCircle, 
  Compass, 
  ArrowRight, 
  Layers, 
  GraduationCap, 
  Lightbulb, 
  ShieldCheck,
  TrendingUp,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "About Robot Genie | Digital Marketing Training",
  description: "Learn about Robot Genie and our approach to practical digital marketing education, including SEO, social media marketing, content marketing and paid advertising.",
  alternates: {
    canonical: "/about"
  }
};

export default function AboutPage() {
  return (
    <main style={{ paddingBottom: "80px" }}>
      {/* Hero Header */}
      <section 
        style={{
          paddingTop: "60px",
          paddingBottom: "60px",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="pill-badge" style={{ marginBottom: "18px" }}>
            <Sparkles size={14} color="#00f2fe" />
            <span>Empowering Next-Gen Marketers</span>
          </div>

          <h1 
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              marginBottom: "18px",
              lineHeight: 1.2
            }}
          >
            About <span className="gradient-text-cyan-purple">Robot Genie</span>
          </h1>

          <p 
            style={{
              fontSize: "1.12rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "740px",
              margin: "0 auto"
            }}
          >
            We are dedicated to bridging the gap between traditional business education and the fast-paced reality of modern digital marketing agencies and high-growth brands.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section style={{ padding: "40px 0 70px 0" }}>
        <div className="container">
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px"
            }}
          >
            {/* Mission */}
            <div 
              className="glass-card"
              style={{
                padding: "36px",
                border: "1px solid rgba(0, 242, 254, 0.25)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(0, 242, 254, 0.12)",
                  border: "1px solid rgba(0, 242, 254, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                <Target size={24} color="#00f2fe" />
              </div>

              <h2 style={{ fontSize: "1.5rem", color: "#ffffff", marginBottom: "14px" }}>
                Our Mission
              </h2>

              <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                To empower learners with actionable, data-driven digital marketing competencies through rigorous project-based learning, authentic tool mastery, and strategic frameworks that translate into real business impact.
              </p>
            </div>

            {/* Vision */}
            <div 
              className="glass-card"
              style={{
                padding: "36px",
                border: "1px solid rgba(168, 85, 247, 0.25)",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div 
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "rgba(168, 85, 247, 0.12)",
                  border: "1px solid rgba(168, 85, 247, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px"
                }}
              >
                <Eye size={24} color="#c084fc" />
              </div>

              <h2 style={{ fontSize: "1.5rem", color: "#ffffff", marginBottom: "14px" }}>
                Our Vision
              </h2>

              <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                To become the benchmark institute for modern performance marketing and organic growth education globally, shaping ethical, analytical, and creative digital leaders capable of driving continuous digital innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Robot Genie Provides */}
      <section 
        style={{
          padding: "70px 0",
          background: "rgba(10, 15, 29, 0.5)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <div className="container">
          <div className="section-header">
            <div className="pill-badge" style={{ marginBottom: "14px" }}>
              <Layers size={14} color="#00f2fe" />
              <span>Comprehensive Ecosystem</span>
            </div>
            <h2>
              What <span className="gradient-text-cyan-purple">Robot Genie Provides</span>
            </h2>
            <p>
              An end-to-end educational framework built around modern industry workflows rather than abstract concepts.
            </p>
          </div>

          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px"
            }}
          >
            <div className="glass-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>
                Live Sandbox Simulations
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                Gain access to realistic campaign environments where you configure keywords, test copy, and analyze traffic metrics without personal financial risk.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>
                Agency-Standard Tool Mastery
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                Direct hands-on training with GA4, Google Tag Manager, Meta Business Suite, SEMrush, Ahrefs, Canva Pro, and Looker Studio.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "10px" }}>
                Verified Project Portfolios
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                Build three in-depth capstone case studies proving your ability to audit sites, optimize ad budgets, and track multi-channel attribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Marketing Skills Matter */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            <div>
              <div className="pill-badge" style={{ marginBottom: "16px" }}>
                <TrendingUp size={14} color="#00f2fe" />
                <span>Industry Demand</span>
              </div>

              <h2 style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.5rem)", marginBottom: "18px", lineHeight: 1.25 }}>
                Why Digital Marketing Skills <span className="gradient-text-cyan-purple">Matter Today</span>
              </h2>

              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "16px" }}>
                Every modern business, from early-stage startups to established enterprises, depends on digital channels to discover, engage, and retain customers. As global commerce shifts irreversibly online, organizations require professionals who understand the quantitative and creative dynamics of search engines, social feeds, and analytics dashboards.
              </p>

              <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "24px" }}>
                Digital marketing is no longer just about posting updates on social media. It is about data attribution, customer acquisition cost (CAC) optimization, lifetime value (LTV) maximization, and search intent satisfaction.
              </p>

              <Link
                href="/courses"
                className="btn btn-primary btn-sm"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <span>Explore In-Demand Programs</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div 
              style={{
                background: "rgba(12, 18, 34, 0.8)",
                border: "1px solid rgba(0, 242, 254, 0.2)",
                borderRadius: "18px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "18px"
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(0, 242, 254, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <CheckCircle size={16} color="#00f2fe" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "4px" }}>High Return on Skills Investment</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>Specialized competencies in performance marketing and technical SEO command premium compensation across agencies and high-growth brands.</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(168, 85, 247, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <CheckCircle size={16} color="#c084fc" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "4px" }}>Cross-Industry Versatility</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>From SaaS and e-commerce to healthcare and financial services, every sector requires digital acquisition and brand positioning experts.</p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "rgba(56, 189, 248, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <CheckCircle size={16} color="#38bdf8" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.05rem", color: "#fff", marginBottom: "4px" }}>Continuous Growth Trajectory</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>With the evolution of AI workflows, search engine algorithms, and privacy changes, practitioners who master fundamentals stay in perpetual demand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section 
        style={{
          padding: "80px 0",
          background: "rgba(10, 15, 29, 0.5)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <div className="container">
          <div className="section-header">
            <div className="pill-badge" style={{ marginBottom: "14px" }}>
              <Compass size={14} color="#00f2fe" />
              <span>Pedagogy</span>
            </div>
            <h2>
              Our <span className="gradient-text-cyan-purple">Learning Approach</span>
            </h2>
            <p>
              Engineered specifically for adult learners, college students, and transitioning professionals who need direct, actionable skills.
            </p>
          </div>

          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px"
            }}
          >
            <div className="glass-card" style={{ padding: "28px" }}>
              <span style={{ fontSize: "0.82rem", color: "#00f2fe", fontWeight: 700, textTransform: "uppercase" }}>Principle 1</span>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", margin: "10px 0" }}>Micro-Projects Every Module</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Each topic ends with an applied sprint: auditing a page, structuring a campaign, or generating an attribution report.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <span style={{ fontSize: "0.82rem", color: "#c084fc", fontWeight: 700, textTransform: "uppercase" }}>Principle 2</span>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", margin: "10px 0" }}>Mentor Feedback Loops</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Work directly with practitioners who review your ad angles, keyword trees, and landing page wireframes.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <span style={{ fontSize: "0.82rem", color: "#38bdf8", fontWeight: 700, textTransform: "uppercase" }}>Principle 3</span>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", margin: "10px 0" }}>Modern Tool Immersion</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Gain familiarity with the software stacks you will open on day one of your next marketing role.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px" }}>
              <span style={{ fontSize: "0.82rem", color: "#34d399", fontWeight: 700, textTransform: "uppercase" }}>Principle 4</span>
              <h3 style={{ fontSize: "1.2rem", color: "#fff", margin: "10px 0" }}>Ethical & Compliant Marketing</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Learn sustainable white-hat SEO tactics, privacy-first data handling, and transparent advertising standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{ paddingTop: "80px" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div 
            className="glass-card"
            style={{
              padding: "50px 30px",
              border: "1px solid rgba(0, 242, 254, 0.3)",
              maxWidth: "800px",
              margin: "0 auto"
            }}
          >
            <h2 style={{ fontSize: "2rem", marginBottom: "14px", color: "#fff" }}>
              Start Your Educational Journey with Robot Genie
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 28px auto" }}>
              Explore our comprehensive courses in SEO, performance ads, social media, and analytics, or talk with our academic advisors.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
              <Link href="/courses" className="btn btn-primary">
                <span>Explore Courses</span>
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn btn-outline">
                <span>Contact Admissions</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
