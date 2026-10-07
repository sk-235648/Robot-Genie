import React from "react";
import { Star, Quote, Award } from "lucide-react";
import { testimonials } from "@/data/courses";

export default function TestimonialSection() {
  return (
    <section 
      style={{
        padding: "90px 0",
        position: "relative",
        background: "rgba(10, 15, 29, 0.4)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)"
      }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: "14px" }}>
            <Award size={14} color="#00f2fe" />
            <span>Student Outcomes</span>
          </div>
          <h2 id="testimonials-heading">
            Student <span className="gradient-text-cyan-purple">Success Stories</span>
          </h2>
          <p>
            Read how aspiring digital marketers, professionals, and career switchers built practical skills with Robot Genie.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px"
          }}
        >
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px 28px"
              }}
            >
              <div>
                {/* Rating Stars and Quote Icon */}
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "18px"
                  }}
                >
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#fbbf24" color="#fbbf24" />
                    ))}
                  </div>

                  <Quote size={20} color="rgba(0, 242, 254, 0.4)" />
                </div>

                <p 
                  style={{
                    fontSize: "0.95rem",
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "24px"
                  }}
                >
                  "{item.content}"
                </p>
              </div>

              {/* Author Row */}
              <div 
                style={{
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  paddingTop: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <div 
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(168, 85, 247, 0.3))",
                    border: "1px solid rgba(0, 242, 254, 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem"
                  }}
                >
                  {item.avatar}
                </div>

                <div>
                  <h4 style={{ fontSize: "0.98rem", color: "#ffffff", fontWeight: 700 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                    {item.role}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#00f2fe", marginTop: "2px" }}>
                    Completed: {item.course}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
