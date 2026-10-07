import React from "react";
import Link from "next/link";
import { Clock, Briefcase, ArrowRight, Star } from "lucide-react";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <article
      style={{
        background: "rgba(12, 17, 32, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        overflow: "hidden"
      }}
      className="course-card-element"
    >
      {/* Top subtle highlight gradient */}
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, rgba(0, 242, 254, 0.4), rgba(168, 85, 247, 0.4))",
          opacity: 0,
          transition: "opacity 0.3s ease"
        }} 
        className="card-top-border"
      />

      <div>
        {/* Rating and Level header */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px"
          }}
        >
          <span 
            style={{
              fontSize: "0.76rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: "6px",
              background: "rgba(255, 255, 255, 0.05)",
              color: "#94a3b8",
              border: "1px solid rgba(255, 255, 255, 0.06)"
            }}
          >
            {course.level}
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.85rem", color: "#fbbf24" }}>
            <Star size={14} fill="#fbbf24" />
            <span style={{ fontWeight: 700, color: "#fff" }}>{course.rating}</span>
            <span style={{ color: "var(--text-dim)", fontSize: "0.78rem" }}>({course.studentsEnrolled})</span>
          </div>
        </div>

        {/* Course Title */}
        <h3 
          style={{
            fontSize: "1.35rem",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "12px",
            lineHeight: 1.3
          }}
        >
          {course.name}
        </h3>

        {/* Short Description */}
        <p 
          style={{
            fontSize: "0.92rem",
            color: "#94a3b8",
            lineHeight: 1.6,
            marginBottom: "22px",
            minHeight: "68px"
          }}
        >
          {course.shortDescription}
        </p>

        {/* Metadata row (Clock & Role) */}
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
            fontSize: "0.86rem"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#c084fc" }}>
            <Clock size={16} />
            <span style={{ fontWeight: 500 }}>{course.duration}</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#00f2fe" }}>
            <Briefcase size={16} />
            <span style={{ fontWeight: 500 }}>{course.careerRole}</span>
          </div>
        </div>
      </div>

      {/* Footer action */}
      <div 
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff" }}>
            {course.price}
          </span>
          <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", textDecoration: "line-through", marginLeft: "6px" }}>
            {course.originalPrice}
          </span>
        </div>

        <Link
          href={`/courses/${course.slug}`}
          className="btn btn-outline btn-sm"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "8px 16px",
            fontSize: "0.85rem",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.03)",
            borderColor: "rgba(255, 255, 255, 0.12)"
          }}
          aria-label={`Explore ${course.name} Course`}
        >
          <span>Explore Course</span>
          <ArrowRight size={14} />
        </Link>
      </div>

    </article>
  );
}
