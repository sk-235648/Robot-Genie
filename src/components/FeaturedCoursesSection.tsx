import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import { coursesData } from "@/data/courses";

export default function FeaturedCoursesSection() {
  // Show 6 core courses on homepage
  const featuredCourses = coursesData.slice(0, 6);

  return (
    <section 
      style={{
        padding: "90px 0",
        position: "relative"
      }}
      aria-labelledby="featured-courses-heading"
    >
      <div className="container">
        
        {/* Section Header matching Screenshot 2 */}
        <div className="section-header" style={{ marginBottom: "50px" }}>
          <h2 
            id="featured-courses-heading"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.02em"
            }}
          >
            Courses offered <span className="gradient-text-cyan-purple">by Robot Genie</span>
          </h2>
          <p style={{ fontSize: "1.08rem", color: "var(--text-muted)", marginTop: "10px" }}>
            Industry-ready skills with job placement support & hands-on practical agency training
          </p>
        </div>

        {/* 3-Column Responsive Course Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "50px"
          }}
        >
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>

        {/* Explore More Button */}
        <div style={{ textAlign: "center" }}>
          <Link
            href="/courses"
            className="btn btn-outline btn-lg"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 34px"
            }}
          >
            <Sparkles size={16} color="#00f2fe" />
            <span>Explore All Digital Marketing Courses</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
