import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";

export default function CTASection() {
  return (
    <section 
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden"
      }}
      aria-labelledby="cta-heading"
    >
      <div className="container">
        <div 
          style={{
            background: "linear-gradient(135deg, rgba(11, 17, 36, 0.95), rgba(20, 15, 38, 0.95))",
            border: "1px solid rgba(0, 242, 254, 0.3)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.15)",
            borderRadius: "24px",
            padding: "60px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >
          {/* Ambient Glows */}
          <div 
            style={{
              position: "absolute",
              top: "-50px",
              left: "20%",
              width: "350px",
              height: "200px",
              background: "radial-gradient(circle, rgba(0, 242, 254, 0.15) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />
          <div 
            style={{
              position: "absolute",
              bottom: "-50px",
              right: "20%",
              width: "350px",
              height: "200px",
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)",
              pointerEvents: "none"
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "750px", margin: "0 auto" }}>
            <div className="pill-badge" style={{ marginBottom: "20px" }}>
              <Sparkles size={14} color="#00f2fe" />
              <span>Next Cohort Admissions Open</span>
            </div>

            <h2 
              id="cta-heading"
              style={{
                fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "20px",
                lineHeight: 1.2
              }}
            >
              Ready to Build Your <span className="gradient-text-cyan-purple">Digital Marketing Skills</span>?
            </h2>

            <p 
              style={{
                fontSize: "1.1rem",
                color: "var(--text-muted)",
                marginBottom: "36px",
                lineHeight: 1.65
              }}
            >
              Join Robot Genie today to learn practical SEO, paid ad campaigns, social media management, and web analytics under live industry guidance.
            </p>

            <div 
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "16px"
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
                <PhoneCall size={18} color="#00f2fe" />
                <span>Contact Admissions</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
