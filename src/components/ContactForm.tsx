"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Phone, Mail, User, MessageSquare } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Advanced Digital Marketing",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "A valid email address is required";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = "A valid phone number is required";
    }
    if (!formData.message.trim()) {
      errs.message = "Please write a brief message or question";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "Advanced Digital Marketing",
        message: ""
      });
      setErrors({});
    }, 900);
  };

  return (
    <div
      className="glass-card"
      style={{
        padding: "36px",
        borderRadius: "20px",
        border: "1px solid rgba(0, 242, 254, 0.25)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 242, 254, 0.1)"
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ fontSize: "1.45rem", color: "#ffffff", marginBottom: "8px" }}>
          Send an Inquiry
        </h3>
        <p style={{ fontSize: "0.92rem", color: "var(--text-muted)" }}>
          Fill in the details below. Our admissions and academic team will get back to you within 24 hours.
        </p>
      </div>

      {status === "success" && (
        <div
          style={{
            padding: "16px",
            background: "rgba(16, 185, 129, 0.15)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#10b981",
            fontSize: "0.92rem",
            marginBottom: "24px"
          }}
          role="alert"
        >
          <CheckCircle2 size={20} style={{ flexShrink: 0 }} />
          <div>
            <strong>Inquiry Submitted Successfully!</strong>
            <p style={{ fontSize: "0.85rem", color: "#a7f3d0", marginTop: "2px" }}>
              Thank you for reaching out to Robot Genie. An academic counselor will contact you via email/phone shortly.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="contact-name"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#cbd5e1",
              marginBottom: "8px"
            }}
          >
            <User size={15} color="#00f2fe" />
            <span>Full Name *</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Aditi Roy"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "rgba(255, 255, 255, 0.04)",
              border: errors.name ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "0.95rem",
              outline: "none",
              transition: "border 0.2s"
            }}
          />
          {errors.name && (
            <div id="name-error" style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
              <AlertCircle size={12} /> {errors.name}
            </div>
          )}
        </div>

        {/* Email & Phone Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginBottom: "20px"
          }}
        >
          {/* Email */}
          <div>
            <label
              htmlFor="contact-email"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#cbd5e1",
                marginBottom: "8px"
              }}
            >
              <Mail size={15} color="#00f2fe" />
              <span>Email Address *</span>
            </label>
            <input
              id="contact-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="aditi@example.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255, 255, 255, 0.04)",
                border: errors.email ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
                borderRadius: "10px",
                color: "#ffffff",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
            {errors.email && (
              <div id="email-error" style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
                <AlertCircle size={12} /> {errors.email}
              </div>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="contact-phone"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#cbd5e1",
                marginBottom: "8px"
              }}
            >
              <Phone size={15} color="#00f2fe" />
              <span>Phone / WhatsApp *</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 9891707129"
              aria-required="true"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255, 255, 255, 0.04)",
                border: errors.phone ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
                borderRadius: "10px",
                color: "#ffffff",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
            {errors.phone && (
              <div id="phone-error" style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
                <AlertCircle size={12} /> {errors.phone}
              </div>
            )}
          </div>
        </div>

        {/* Course Interest */}
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="contact-course"
            style={{
              display: "block",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#cbd5e1",
              marginBottom: "8px"
            }}
          >
            Course of Interest
          </label>
          <select
            id="contact-course"
            value={formData.course}
            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "#0c1224",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "0.95rem",
              outline: "none"
            }}
          >
            <option value="Advanced Digital Marketing">Advanced Digital Marketing</option>
            <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Google Ads & PPC">Google Ads & PPC Advertising</option>
            <option value="Content Marketing">Content Marketing & Copywriting</option>
            <option value="Email Marketing">Email Marketing & Automation</option>
            <option value="Analytics & Strategy">Analytics & Digital Marketing Strategy</option>
            <option value="Digital Marketing Fundamentals">Digital Marketing Fundamentals</option>
          </select>
        </div>

        {/* Message */}
        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="contact-message"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#cbd5e1",
              marginBottom: "8px"
            }}
          >
            <MessageSquare size={15} color="#00f2fe" />
            <span>Your Message or Query *</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your learning goals, current background, or questions about the course syllabus..."
            aria-required="true"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "rgba(255, 255, 255, 0.04)",
              border: errors.message ? "1px solid #ef4444" : "1px solid var(--border-subtle)",
              borderRadius: "10px",
              color: "#ffffff",
              fontSize: "0.95rem",
              outline: "none",
              fontFamily: "var(--font-main)",
              resize: "vertical"
            }}
          />
          {errors.message && (
            <div id="message-error" style={{ color: "#ef4444", fontSize: "0.78rem", marginTop: "4px", display: "flex", alignItems: "center", gap: "4px" }}>
              <AlertCircle size={12} /> {errors.message}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-primary"
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "1rem"
          }}
        >
          {status === "submitting" ? (
            <span>Sending Inquiry...</span>
          ) : (
            <>
              <Send size={16} />
              <span>Submit Course Inquiry</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
