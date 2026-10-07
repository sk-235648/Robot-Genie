"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronRight, 
  LogIn, 
  Sparkles, 
  PhoneCall, 
  BookOpen
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCounselingModal, setShowCounselingModal] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Courses", href: "/courses" },
    { label: "Contact Us", href: "/contact" }
  ];

  return (
    <>
      <header 
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          backgroundColor: scrolled ? "rgba(6, 9, 19, 0.92)" : "rgba(6, 9, 19, 0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent"
        }}
      >
        <div 
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "76px"
          }}
        >
          {/* Logo */}
          <Link 
            href="/" 
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none"
            }}
            aria-label="Robot Genie Home"
          >
            {/* Cyber Hexagon Icon */}
            <div 
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(168, 85, 247, 0.2))",
                border: "1px solid rgba(0, 242, 254, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 15px rgba(0, 242, 254, 0.25)"
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L20 6.5V15.5L12 20L4 15.5V6.5L12 2Z" stroke="#00f2fe" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="11" r="3" fill="#a855f7" />
                <path d="M12 8V5M12 17V14M8.5 9.5L6 8M15.5 12.5L18 14" stroke="#00f2fe" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ 
                fontFamily: "var(--font-heading)",
                fontSize: "1.25rem", 
                fontWeight: 800, 
                letterSpacing: "0.08em",
                color: "#ffffff"
              }}>
                ROBOT <span style={{ color: "#00f2fe" }}>GENIE</span>
              </span>
              <span style={{ 
                fontSize: "0.68rem", 
                letterSpacing: "0.15em", 
                textTransform: "uppercase", 
                color: "var(--text-muted)",
                marginTop: "-2px"
              }}>
                Digital Marketing Institute
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav 
            style={{ 
              display: "none", 
              alignItems: "center", 
              gap: "32px" 
            }} 
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    position: "relative",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: isActive ? "#ffffff" : "var(--text-muted)",
                    transition: "color 0.2s ease",
                    padding: "6px 0"
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span 
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "linear-gradient(90deg, #00f2fe, #a855f7)",
                        borderRadius: "2px",
                        boxShadow: "0 0 8px rgba(0, 242, 254, 0.7)"
                      }} 
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div 
            style={{ display: "none", alignItems: "center", gap: "14px" }} 
            className="desktop-actions"
          >
            <button
              onClick={() => setShowCounselingModal(true)}
              className="btn btn-outline btn-sm"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
              aria-label="Book Free Counseling Session"
            >
              <PhoneCall size={14} color="#00f2fe" />
              <span>Free Counseling</span>
            </button>

            <Link
              href="/courses"
              className="btn btn-primary btn-sm"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <Sparkles size={14} />
              <span>Explore Courses</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              color: "#ffffff",
              cursor: "pointer"
            }}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div
            style={{
              position: "fixed",
              top: "76px",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(6, 9, 19, 0.98)",
              backdropFilter: "blur(20px)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              zIndex: 49,
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              animation: "fadeIn 0.25s ease-out"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 18px",
                      borderRadius: "12px",
                      background: isActive ? "rgba(0, 242, 254, 0.08)" : "rgba(255, 255, 255, 0.02)",
                      border: isActive ? "1px solid rgba(0, 242, 254, 0.3)" : "1px solid rgba(255, 255, 255, 0.05)",
                      color: isActive ? "#00f2fe" : "#ffffff",
                      fontSize: "1.05rem",
                      fontWeight: 600
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={18} color={isActive ? "#00f2fe" : "var(--text-dim)"} />
                  </Link>
                );
              })}
            </div>

            <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "24px" }}>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setShowCounselingModal(true);
                }}
                className="btn btn-outline"
                style={{ width: "100%", padding: "14px", justifyContent: "center" }}
              >
                <PhoneCall size={16} color="#00f2fe" />
                <span>Book Free Counseling</span>
              </button>
              
              <Link
                href="/courses"
                className="btn btn-primary"
                style={{ width: "100%", padding: "14px", justifyContent: "center" }}
              >
                <BookOpen size={16} />
                <span>Explore Courses</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Counseling Quick Modal */}
      {showCounselingModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(8px)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setShowCounselingModal(false)}
        >
          <div
            style={{
              background: "#0c1222",
              border: "1px solid rgba(0, 242, 254, 0.3)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.2)",
              borderRadius: "20px",
              padding: "32px",
              maxWidth: "460px",
              width: "100%",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCounselingModal(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                color: "var(--text-muted)",
                cursor: "pointer",
                padding: "6px"
              }}
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            <div className="pill-badge" style={{ marginBottom: "14px" }}>
              <span className="pill-dot"></span> Free 1-on-1 Session
            </div>

            <h3 style={{ fontSize: "1.45rem", marginBottom: "8px" }}>
              Speak to a Career Mentor
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "20px" }}>
              Get personalized guidance on which digital marketing course fits your career goals and current background.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! A Robot Genie academic counselor will connect with you via phone/WhatsApp within 24 hours.");
                setShowCounselingModal(false);
              }}
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9891707129"
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "6px" }}>
                  Primary Interest
                </label>
                <select
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    background: "#0c1222",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "10px",
                    color: "#fff",
                    fontSize: "0.95rem",
                    outline: "none"
                  }}
                >
                  <option value="Advanced Digital Marketing">Advanced Digital Marketing</option>
                  <option value="SEO">Search Engine Optimization (SEO)</option>
                  <option value="Social Media">Social Media Marketing</option>
                  <option value="Google Ads">Google Ads & PPC</option>
                  <option value="Other">General Career Counseling</option>
                </select>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: "100%", marginTop: "10px", padding: "14px" }}
              >
                Confirm Free Counseling Call
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
