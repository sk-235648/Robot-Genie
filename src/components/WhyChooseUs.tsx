import React from "react";
import { 
  Laptop2, 
  Layers, 
  Workflow, 
  Award, 
  Users, 
  CheckCircle2,
  TrendingUp
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "100% Practical Campaign Execution",
      description: "Step away from theoretical slideshows. Students audit real websites, architect keyword clusters, configure Google Tag Manager triggers, and run simulated ads.",
      icon: Laptop2,
      color: "#00f2fe"
    },
    {
      title: "Industry-Standard Tool Stack",
      description: "Gain direct, guided experience with the software modern digital agencies require: Google Analytics 4, Meta Ads Manager, SEMrush, Ahrefs, and Looker Studio.",
      icon: Layers,
      color: "#c084fc"
    },
    {
      title: "Structured, Progressive Curriculum",
      description: "Our learning path systematically elevates you from core marketing psychology and data analysis to advanced multi-touch omnichannel growth funnels.",
      icon: Workflow,
      color: "#38bdf8"
    },
    {
      title: "Verified Portfolio & Credentials",
      description: "Graduate with real capstone artifacts you can present in hiring interviews: technical audits, Looker Studio dashboards, and documented campaign strategies.",
      icon: Award,
      color: "#34d399"
    }
  ];

  return (
    <section 
      style={{
        padding: "90px 0",
        position: "relative",
        background: "rgba(10, 15, 29, 0.5)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
      }}
      aria-labelledby="why-choose-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: "14px" }}>
            <Award size={14} color="#00f2fe" />
            <span>The Robot Genie Advantage</span>
          </div>
          <h2 id="why-choose-heading">
            Why Choose <span className="gradient-text-cyan-purple">Robot Genie</span>?
          </h2>
          <p>
            We focus exclusively on tangible digital marketing competencies that create career-ready professionals and measurable agency results.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px"
          }}
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "32px 26px"
                }}
              >
                <div 
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    boxShadow: `0 0 15px ${item.color}20`
                  }}
                >
                  <Icon size={24} color={item.color} />
                </div>

                <h3 style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "12px" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div 
          style={{
            marginTop: "50px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "16px",
            padding: "30px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
            textAlign: "center"
          }}
        >
          <div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#00f2fe", fontFamily: "var(--font-heading)" }}>
              2,500+
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Students & Marketers Trained
            </div>
          </div>

          <div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#c084fc", fontFamily: "var(--font-heading)" }}>
              8+
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Comprehensive Specializations
            </div>
          </div>

          <div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#38bdf8", fontFamily: "var(--font-heading)" }}>
              15+
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Industry Tools Mastered
            </div>
          </div>

          <div>
            <div style={{ fontSize: "2rem", fontWeight: 800, color: "#34d399", fontFamily: "var(--font-heading)" }}>
              4.9/5
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Average Learner Satisfaction
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
