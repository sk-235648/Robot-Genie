import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  Share2,
  ExternalLink,
  HelpCircle
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Robot Genie | Digital Marketing Courses",
  description: "Contact Robot Genie to learn more about our digital marketing courses, training programs and learning opportunities.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main style={{ paddingBottom: "90px" }}>
      {/* Header */}
      <section
        style={{
          paddingTop: "60px",
          paddingBottom: "40px",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <div className="pill-badge" style={{ marginBottom: "18px" }}>
            <Sparkles size={14} color="#00f2fe" />
            <span>Admissions & Inquiries</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              marginBottom: "18px",
              lineHeight: 1.2
            }}
          >
            Contact <span className="gradient-text-cyan-purple">Robot Genie</span>
          </h1>

          <p
            style={{
              fontSize: "1.12rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            Contact Robot Genie to learn more about our digital marketing courses, training programs, and practical learning opportunities.
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section style={{ paddingTop: "20px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "flex-start"
            }}
          >
            {/* Left: Contact Info & Counseling Channels */}
            <div>
              <div
                className="glass-card"
                style={{
                  padding: "36px",
                  marginBottom: "32px",
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <h2 style={{ fontSize: "1.45rem", color: "#ffffff", marginBottom: "12px" }}>
                  Connect with Admissions
                </h2>

                <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "28px" }}>
                  Have questions regarding our advanced digital marketing syllabus, upcoming cohort dates, or course certifications? Reach out directly.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                  {/* Email */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(0, 242, 254, 0.12)", border: "1px solid rgba(0, 242, 254, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Mail size={20} color="#00f2fe" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Inquiries</div>
                      <a href="mailto:contact@robotgenie.in" style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}>
                        contact@robotgenie.in
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(168, 85, 247, 0.12)", border: "1px solid rgba(168, 85, 247, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Phone size={20} color="#c084fc" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Admissions Helpline</div>
                      <a href="tel:+919891707129" style={{ fontSize: "1rem", color: "#ffffff", fontWeight: 600 }}>
                        +91 9891707129
                      </a>
                    </div>
                  </div>

                  {/* Campus Address */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.12)", border: "1px solid rgba(56, 189, 248, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <MapPin size={20} color="#38bdf8" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Learning Campus</div>
                      <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 500, lineHeight: 1.5 }}>
                        METRO PILLAR NO 35, B-29 1st office no 301, Laxmi Nagar, Delhi, 110092, India
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                    <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: "rgba(52, 211, 153, 0.12)", border: "1px solid rgba(52, 211, 153, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Clock size={20} color="#34d399" />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Counseling Hours</div>
                      <div style={{ fontSize: "0.95rem", color: "#ffffff", fontWeight: 500 }}>
                        Monday – Saturday: 9:00 AM – 7:30 PM IST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels Card */}
              <div className="glass-card" style={{ padding: "28px" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#fff", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                  <Share2 size={18} color="#00f2fe" />
                  <span>Official Online Channels</span>
                </h3>

                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                  Follow Robot Genie for digital marketing industry teardowns, SEO updates, and webinar announcements:
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: "0.82rem" }}
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href="https://medium.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: "0.82rem", borderColor: "rgba(0, 242, 254, 0.3)" }}
                  >
                    Medium Publication
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: "0.82rem" }}
                  >
                    YouTube Channel
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Inquiries Section */}
      <section style={{ marginTop: "80px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="section-header">
            <div className="pill-badge" style={{ marginBottom: "14px" }}>
              <HelpCircle size={14} color="#00f2fe" />
              <span>Admissions FAQ</span>
            </div>
            <h2>
              Frequently Asked <span className="gradient-text-cyan-purple">Admissions Questions</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="glass-card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                How does the 1-on-1 career counseling call work?
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                After submitting the contact form, an academic mentor reviews your educational and professional background to recommend whether you should start with Digital Marketing Fundamentals or dive straight into Advanced Digital Marketing or specialized SEO/PPC tracks.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                Are batch schedules flexible for working professionals or college students?
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                Yes, we offer both weekend immersive cohorts and weekday evening live sessions. All live sessions are recorded and made available with complete practical homework files.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "8px" }}>
                How do I access course tool sandboxes?
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                Enrolled students receive dedicated lab instructions and licenses for Google Analytics 4, SEMrush, Meta Ads Manager, and Google Tag Manager sandbox environments during class assignments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
