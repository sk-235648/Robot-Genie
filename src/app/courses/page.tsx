"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Filter, 
  Sparkles, 
  BookOpen, 
  Clock, 
  Briefcase, 
  ArrowRight, 
  Star,
  CheckCircle2
} from "lucide-react";
import { coursesData, Course } from "@/data/courses";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("All");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = 
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

  return (
    <main style={{ paddingBottom: "90px" }}>
      {/* Hero Header */}
      <section 
        style={{
          paddingTop: "60px",
          paddingBottom: "50px",
          textAlign: "center",
          position: "relative"
        }}
      >
        <div className="container" style={{ maxWidth: "880px" }}>
          <div className="pill-badge" style={{ marginBottom: "18px" }}>
            <Sparkles size={14} color="#00f2fe" />
            <span>Practical Curriculums</span>
          </div>

          <h1 
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              marginBottom: "18px",
              lineHeight: 1.2
            }}
          >
            Digital Marketing <span className="gradient-text-cyan-purple">Courses</span>
          </h1>

          <p 
            style={{
              fontSize: "1.12rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              maxWidth: "760px",
              margin: "0 auto 36px auto"
            }}
          >
            Explore Robot Genie digital marketing courses covering SEO, social media marketing, Google Ads, content marketing, email marketing, and digital marketing strategy.
          </p>

          {/* Interactive Search & Filter Controls */}
          <div 
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
              maxWidth: "680px",
              margin: "0 auto"
            }}
          >
            {/* Search Input */}
            <div 
              style={{
                position: "relative",
                flex: "1 1 300px"
              }}
            >
              <Search 
                size={18} 
                color="var(--text-dim)" 
                style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }} 
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by skill, tool, or topic (e.g. SEO, GA4, Ads)..."
                style={{
                  width: "100%",
                  padding: "14px 16px 14px 44px",
                  background: "rgba(12, 18, 34, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "9999px",
                  color: "#fff",
                  fontSize: "0.95rem",
                  outline: "none"
                }}
              />
            </div>

            {/* Level Selector */}
            <div style={{ display: "flex", gap: "8px" }}>
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    background: selectedLevel === level ? "rgba(0, 242, 254, 0.2)" : "rgba(255, 255, 255, 0.04)",
                    border: selectedLevel === level ? "1px solid #00f2fe" : "1px solid rgba(255, 255, 255, 0.08)",
                    color: selectedLevel === level ? "#00f2fe" : "var(--text-muted)",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid Section */}
      <section style={{ paddingTop: "20px" }}>
        <div className="container">
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.45rem", color: "#fff" }}>
              Available Programs ({filteredCourses.length})
            </h2>
            <span style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
              Updated for latest search & ad algorithms
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <div 
              className="glass-card" 
              style={{ textAlign: "center", padding: "60px 20px", maxWidth: "500px", margin: "40px auto" }}
            >
              <BookOpen size={40} color="#00f2fe" style={{ margin: "0 auto 16px auto" }} />
              <h3 style={{ fontSize: "1.3rem", color: "#fff", marginBottom: "8px" }}>No courses match your filter</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", marginBottom: "20px" }}>
                Try searching for general keywords such as &quot;SEO&quot;, &quot;Ads&quot;, or &quot;Marketing&quot;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedLevel("All");
                }}
                className="btn btn-outline btn-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div 
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px"
              }}
            >
              {filteredCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Counseling Banner */}
      <section style={{ marginTop: "70px" }}>
        <div className="container">
          <div 
            className="glass-card"
            style={{
              padding: "40px",
              background: "linear-gradient(135deg, rgba(12, 18, 34, 0.9), rgba(26, 17, 44, 0.9))",
              border: "1px solid rgba(0, 242, 254, 0.25)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px"
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.5rem", color: "#fff", marginBottom: "6px" }}>
                Need Help Choosing the Right Digital Marketing Path?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                Our academic counselors can review your background and recommend the optimal course progression.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn btn-primary"
              style={{ padding: "14px 28px", flexShrink: 0 }}
            >
              <span>Speak with a Mentor</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
