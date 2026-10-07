import React from "react";
import { BookOpen, Wrench, Rocket, TrendingUp, ArrowRight } from "lucide-react";

export default function LearningJourney() {
  const steps = [
    {
      stage: "01",
      title: "Learn",
      subtitle: "Master Core Concepts",
      description: "Understand consumer psychology, search indexing mechanics, advertising algorithms, and data attribution frameworks.",
      icon: BookOpen,
      color: "#00f2fe"
    },
    {
      stage: "02",
      title: "Practice",
      subtitle: "Hands-on Sandbox Work",
      description: "Use real industry tools including SEMrush, GA4, and Meta Ads Manager to conduct audits and design mock campaigns.",
      icon: Wrench,
      color: "#38bdf8"
    },
    {
      stage: "03",
      title: "Apply",
      subtitle: "Live Capstone Project",
      description: "Deploy end-to-end digital marketing funnels, configure conversion tracking, analyze live metrics, and optimize ROAS.",
      icon: Rocket,
      color: "#c084fc"
    },
    {
      stage: "04",
      title: "Grow",
      subtitle: "Career & Agency Launch",
      description: "Present verified campaign portfolios to employers or scale your own venture with predictable customer acquisition.",
      icon: TrendingUp,
      color: "#34d399"
    }
  ];

  return (
    <section 
      style={{
        padding: "90px 0",
        position: "relative"
      }}
      aria-labelledby="journey-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: "14px" }}>
            <Rocket size={14} color="#00f2fe" />
            <span>The 4-Stage Roadmap</span>
          </div>
          <h2 id="journey-heading">
            Build Your <span className="gradient-text-cyan-purple">Digital Marketing Career</span>
          </h2>
          <p>
            A clear, repeatable learning journey designed to take you from foundational understanding to agency-grade mastery.
          </p>
        </div>

        {/* Steps Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            position: "relative"
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="glass-card"
                style={{
                  position: "relative",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {/* Step Number Top Badge */}
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                  }}
                >
                  <div 
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 12px ${step.color}20`
                    }}
                  >
                    <Icon size={22} color={step.color} />
                  </div>

                  <span 
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      fontFamily: "var(--font-heading)",
                      color: "rgba(255, 255, 255, 0.15)"
                    }}
                  >
                    {step.stage}
                  </span>
                </div>

                <div style={{ fontSize: "0.8rem", color: step.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>
                  Step {step.stage} • {step.subtitle}
                </div>

                <h3 style={{ fontSize: "1.35rem", color: "#ffffff", marginBottom: "12px" }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
