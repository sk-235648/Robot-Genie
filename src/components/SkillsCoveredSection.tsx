"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Search, 
  Share2, 
  FileText, 
  TrendingUp, 
  Mail, 
  BarChart3, 
  ArrowRight, 
  Layers
} from "lucide-react";

export default function SkillsCoveredSection() {
  const skills = [
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      shortName: "SEO & Growth",
      icon: Search,
      color: "#00f2fe",
      description: "Master modern algorithmic ranking factors, semantic keyword research, structured data schemas, core web vitals, and technical crawl health.",
      topics: ["Technical Crawl Diagnostics", "Semantic Content Clusters", "Schema.org JSON-LD", "Ethical Link Building", "Local Map Pack Optimization"],
      link: "/courses/seo"
    },
    {
      id: "social",
      title: "Social Media Marketing",
      shortName: "Social Media",
      icon: Share2,
      color: "#c084fc",
      description: "Engineer viral short-form video strategies, build passionate brand communities, and run targeted paid acquisition campaigns across Meta and LinkedIn.",
      topics: ["Reels & Shorts Viral Hooks", "B2B LinkedIn Positioning", "Meta Ads Manager", "Community Governance", "Influencer Contract Management"],
      link: "/courses/social-media-marketing"
    },
    {
      id: "content",
      title: "Content Marketing & Copywriting",
      shortName: "Content Strategy",
      icon: FileText,
      color: "#38bdf8",
      description: "Craft persuasive copywriting frameworks (AIDA, PAS), authoritative industry thought leadership, editorial systems, and conversion-focused landing pages.",
      topics: ["Inbound Funnel Architecture", "High-Converting Sales Copy", "Medium & LinkedIn Syndication", "Lead Magnet Production", "AI Editorial Workflows"],
      link: "/courses/content-marketing"
    },
    {
      id: "ads",
      title: "Google Ads & PPC",
      shortName: "Paid Advertising",
      icon: TrendingUp,
      color: "#f472b6",
      description: "Drive high-intent transactional search traffic through Google Search, Performance Max, YouTube ads, smart bidding, and negative keyword governance.",
      topics: ["Single-Theme Ad Group Design", "Performance Max (PMax)", "Target ROAS / Target CPA Bidding", "Negative Keyword Architecture", "Conversion Value Rules"],
      link: "/courses/google-ads-ppc"
    },
    {
      id: "email",
      title: "Email Marketing & CRM",
      shortName: "Lifecycle CRM",
      icon: Mail,
      color: "#34d399",
      description: "Build automated customer journeys, abandoned cart flows, RFM lifecycle segmentation, and enterprise inbox deliverability protocols (SPF/DKIM/DMARC).",
      topics: ["Lead Magnet Opt-In Funnels", "Multi-Stage Nurture Sequences", "Deliverability Hygiene", "Klaviyo & HubSpot Workflows", "A/B Subject Line Testing"],
      link: "/courses/email-marketing"
    },
    {
      id: "analytics",
      title: "Analytics & Marketing Strategy",
      shortName: "GA4 & Analytics",
      icon: BarChart3,
      color: "#fbbf24",
      description: "Translate complex digital data into clear strategic action using Google Analytics 4, Tag Manager custom triggers, and Looker Studio client dashboards.",
      topics: ["GA4 Custom Explorations", "Google Tag Manager Deployments", "Multi-Touch Attribution Modeling", "Looker Studio Dashboards", "CAC & LTV Economics"],
      link: "/courses/analytics-strategy"
    }
  ];

  const [activeSkill, setActiveSkill] = useState(skills[0]);

  return (
    <section 
      style={{
        padding: "80px 0",
        position: "relative",
        background: "linear-gradient(180deg, #060913 0%, #080d1c 100%)"
      }}
      aria-labelledby="skills-heading"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="pill-badge" style={{ marginBottom: "14px" }}>
            <Layers size={14} color="#00f2fe" />
            <span>Core Disciplines</span>
          </div>
          <h2 id="skills-heading">
            Learn the <span className="gradient-text-cyan-purple">Skills That Matter</span>
          </h2>
          <p>
            Master every pillar of modern digital marketing with hands-on practice, live tool sandboxes, and structured industry curriculum.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div 
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "40px"
          }}
        >
          {skills.map((item) => {
            const isSelected = activeSkill.id === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSkill(item)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "10px 20px",
                  borderRadius: "9999px",
                  background: isSelected ? "rgba(0, 242, 254, 0.15)" : "rgba(255, 255, 255, 0.04)",
                  border: isSelected ? `1px solid ${item.color}` : "1px solid rgba(255, 255, 255, 0.08)",
                  color: isSelected ? "#ffffff" : "var(--text-muted)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  boxShadow: isSelected ? `0 0 15px ${item.color}33` : "none"
                }}
              >
                <Icon size={16} color={isSelected ? item.color : "var(--text-dim)"} />
                <span>{item.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Skill Deep Dive Card */}
        <div 
          className="glass-card"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "40px",
            border: `1px solid ${activeSkill.color}40`,
            boxShadow: `0 20px 45px -10px rgba(0, 0, 0, 0.6), 0 0 25px ${activeSkill.color}20`
          }}
        >
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "35px",
              alignItems: "center"
            }}
          >
            <div>
              <div 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: activeSkill.color,
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "12px"
                }}
              >
                <activeSkill.icon size={18} />
                <span>Specialized Competency</span>
              </div>

              <h3 style={{ fontSize: "1.85rem", color: "#ffffff", marginBottom: "16px", lineHeight: 1.25 }}>
                {activeSkill.title}
              </h3>

              <p style={{ fontSize: "0.98rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "24px" }}>
                {activeSkill.description}
              </p>

              <Link
                href={activeSkill.link}
                className="btn btn-primary btn-sm"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
              >
                <span>View {activeSkill.shortName} Course</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div 
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                padding: "24px",
                borderRadius: "14px",
                border: "1px solid rgba(255, 255, 255, 0.06)"
              }}
            >
              <h4 style={{ fontSize: "1rem", color: "#fff", marginBottom: "16px", letterSpacing: "0.02em" }}>
                Practical Syllabus Modules
              </h4>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {activeSkill.topics.map((topic, i) => (
                  <div 
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.9rem",
                      color: "#cbd5e1",
                      padding: "8px 12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.04)"
                    }}
                  >
                    <span style={{ color: activeSkill.color, fontWeight: 700, fontSize: "0.8rem" }}>
                      0{i + 1}
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
