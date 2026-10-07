import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { 
  Clock, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Award, 
  HelpCircle, 
  BookOpen, 
  Layers, 
  ChevronRight,
  PhoneCall,
  Calendar,
  Users
} from "lucide-react";
import { coursesData } from "@/data/courses";
import StructuredData from "@/components/StructuredData";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    return {
      title: "Course Not Found | Robot Genie",
      description: "The requested digital marketing course could not be found."
    };
  }

  return {
    title: `${course.name} Course | Robot Genie`,
    description: course.shortDescription,
    alternates: {
      canonical: `/courses/${course.slug}`
    },
    openGraph: {
      title: `${course.name} | Robot Genie Digital Marketing`,
      description: course.shortDescription
    }
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = coursesData.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main style={{ paddingBottom: "90px" }}>
      <StructuredData type="course" data={course} />

      {/* Course Hero Section Matching Screenshot 3 */}
      <section 
        style={{
          paddingTop: "50px",
          paddingBottom: "70px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="container">
          
          {/* Breadcrumb Navigation */}
          <nav 
            aria-label="Breadcrumb"
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              fontSize: "0.85rem", 
              color: "var(--text-dim)",
              marginBottom: "28px" 
            }}
          >
            <Link href="/" style={{ color: "var(--text-muted)" }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/courses" style={{ color: "var(--text-muted)" }}>Courses</Link>
            <ChevronRight size={14} />
            <span style={{ color: "#00f2fe" }}>{course.name}</span>
          </nav>

          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            {/* Left Content */}
            <div>
              {/* Category pill indicator */}
              <div 
                style={{
                  fontSize: "0.82rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#00f2fe",
                  fontWeight: 700,
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span>— COURSE —</span>
              </div>

              {/* Title with Gradient Accent */}
              <h1 
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1.18,
                  marginBottom: "20px"
                }}
              >
                {course.name.split(" ")[0]}{" "}
                <span className="gradient-text-cyan-purple">
                  {course.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>

              {/* Full Description */}
              <p 
                style={{
                  fontSize: "1.05rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "24px"
                }}
              >
                {course.fullDescription}
              </p>

              {/* Meta Tags Row (Clock & Role) */}
              <div 
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "26px"
                }}
              >
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "rgba(168, 85, 247, 0.12)",
                    border: "1px solid rgba(168, 85, 247, 0.3)",
                    color: "#d8b4fe",
                    fontSize: "0.9rem",
                    fontWeight: 600
                  }}
                >
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>

                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "rgba(0, 242, 254, 0.12)",
                    border: "1px solid rgba(0, 242, 254, 0.3)",
                    color: "#00f2fe",
                    fontSize: "0.9rem",
                    fontWeight: 600
                  }}
                >
                  <Briefcase size={16} />
                  <span>{course.careerRole}</span>
                </div>
              </div>

              {/* Price Row matching Screenshot 3 */}
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  marginBottom: "32px",
                  padding: "14px 20px",
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  width: "fit-content"
                }}
              >
                <span style={{ fontSize: "1.8rem", fontWeight: 800, color: "#ffffff" }}>
                  {course.price}
                </span>
                <span style={{ fontSize: "1.05rem", color: "var(--text-dim)", textDecoration: "line-through" }}>
                  {course.originalPrice}
                </span>
                <span 
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    background: "rgba(168, 85, 247, 0.25)",
                    border: "1px solid rgba(168, 85, 247, 0.5)",
                    color: "#e9d5ff"
                  }}
                >
                  {course.discount}
                </span>
              </div>

              {/* Action Buttons Matching Screenshot 3 */}
              <div 
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "14px"
                }}
              >
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{
                    padding: "14px 30px",
                    fontSize: "1rem"
                  }}
                >
                  <span>Enroll Now</span>
                  <ChevronRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="btn btn-outline"
                  style={{
                    padding: "14px 26px",
                    fontSize: "0.95rem"
                  }}
                >
                  <span>Talk to Counsellor</span>
                </Link>

                <div 
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    background: "rgba(234, 179, 8, 0.08)",
                    border: "1px solid rgba(234, 179, 8, 0.25)",
                    color: "#fde047",
                    fontSize: "0.88rem",
                    fontWeight: 600
                  }}
                >
                  <Award size={18} />
                  <span>Verified Certificate</span>
                </div>
              </div>
            </div>

            {/* Right Course Preview Banner Graphic Card */}
            <div>
              <div 
                className="glass-card"
                style={{
                  padding: "36px",
                  border: "1px solid rgba(0, 242, 254, 0.3)",
                  boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 242, 254, 0.15)",
                  position: "relative"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span className="pill-badge" style={{ fontSize: "0.78rem" }}>
                    Live Cohort Learning
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: 600 }}>
                    ● 100% Practical Training
                  </span>
                </div>

                <h3 style={{ fontSize: "1.35rem", color: "#fff", marginBottom: "16px" }}>
                  Course Highlights & Outcomes
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "28px" }}>
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <CheckCircle2 size={18} color="#00f2fe" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.92rem", color: "#e2e8f0" }}>{highlight}</span>
                    </div>
                  ))}
                </div>

                <h4 style={{ fontSize: "0.92rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  Software & Tool Stacks Covered
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {course.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      style={{
                        padding: "6px 12px",
                        borderRadius: "8px",
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        fontSize: "0.82rem",
                        color: "#cbd5e1",
                        fontWeight: 500
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Syllabus Roadmap */}
      <section 
        style={{
          padding: "70px 0",
          background: "rgba(10, 15, 29, 0.5)",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        <div className="container" style={{ maxWidth: "980px" }}>
          <div className="section-header">
            <div className="pill-badge" style={{ marginBottom: "14px" }}>
              <BookOpen size={14} color="#00f2fe" />
              <span>Structured Curriculum</span>
            </div>
            <h2>
              Program <span className="gradient-text-cyan-purple">Syllabus & Modules</span>
            </h2>
            <p>
              Step-by-step practical progression designed to give you portfolio-ready mastery.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {course.syllabus.map((mod, idx) => (
              <div 
                key={idx}
                className="glass-card"
                style={{ padding: "30px 28px" }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", gap: "10px" }}>
                  <span 
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "#00f2fe",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}
                  >
                    {mod.week}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                    Module 0{idx + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "10px" }}>
                  {mod.title}
                </h3>

                <p style={{ fontSize: "0.94rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "16px" }}>
                  {mod.description}
                </p>

                <div>
                  <h4 style={{ fontSize: "0.82rem", color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
                    Key Practical Deliverables:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {mod.outcomes.map((outcome, oIdx) => (
                      <li key={oIdx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                        <CheckCircle2 size={14} color="#34d399" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course FAQs */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div className="section-header">
            <div className="pill-badge" style={{ marginBottom: "14px" }}>
              <HelpCircle size={14} color="#00f2fe" />
              <span>Questions & Answers</span>
            </div>
            <h2>
              Frequently <span className="gradient-text-cyan-purple">Asked Questions</span>
            </h2>
            <p>Common questions about prerequisites, tools, certification, and learning format.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {course.faqs.map((faq, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "10px" }}>
                  {faq.question}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.65 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Internal Cross-link Banner */}
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "16px" }}>
              Looking for other specialized digital marketing programs?
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
              {coursesData
                .filter((c) => c.slug !== course.slug)
                .slice(0, 4)
                .map((otherCourse) => (
                  <Link
                    key={otherCourse.slug}
                    href={`/courses/${otherCourse.slug}`}
                    className="btn btn-outline btn-sm"
                    style={{ fontSize: "0.82rem" }}
                  >
                    <span>{otherCourse.name}</span>
                    <ArrowRight size={12} />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
