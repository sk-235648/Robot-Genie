"use client";

import React, { useState } from "react";
import { MessageSquare, Bot, X, Send, Check } from "lucide-react";

export default function FloatingWidgets() {
  const [showBotModal, setShowBotModal] = useState(false);
  const [showWaModal, setShowWaModal] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am the Robot Genie AI Assistant. Are you interested in our Digital Marketing, SEO, or Google Ads courses?" }
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;

    const userMsg = inputVal.trim();
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInputVal("");

    setTimeout(() => {
      let botResponse = "Great! Our next cohort begins shortly with practical live projects and certification. You can explore the full syllabus in the Courses tab or leave your phone number for our mentor to call you!";
      if (userMsg.toLowerCase().includes("seo")) {
        botResponse = "Our Search Engine Optimization course covers technical audits, semantic keyword mapping, Ahrefs/SEMrush, and Google Search Console!";
      } else if (userMsg.toLowerCase().includes("fee") || userMsg.toLowerCase().includes("cost") || userMsg.toLowerCase().includes("price")) {
        botResponse = "Course fees start from ₹9,999 up to ₹24,999 for our flagship Advanced Digital Marketing Masterclass with practical tools and mentorship included.";
      }
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Trigger Buttons (Bottom Right) */}
      <aside 
        aria-label="Quick Support and Consultation"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 40
        }}
      >
        {/* Violet Robot Genie AI Bot Button */}
        <button
          onClick={() => {
            setShowBotModal(!showBotModal);
            setShowWaModal(false);
          }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            cursor: "pointer",
            transition: "transform 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Ask Robot Genie AI Assistant"
        >
          <Bot size={24} />
        </button>

        {/* Green WhatsApp Quick Consultation Button */}
        <button
          onClick={() => {
            setShowWaModal(!showWaModal);
            setShowBotModal(false);
          }}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            border: "1px solid rgba(255, 255, 255, 0.25)",
            boxShadow: "0 0 20px rgba(16, 185, 129, 0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            cursor: "pointer",
            transition: "transform 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label="Connect on WhatsApp"
        >
          <MessageSquare size={22} />
        </button>
      </aside>

      {/* Bot Chat Modal */}
      {showBotModal && (
        <div
          style={{
            position: "fixed",
            bottom: "85px",
            right: "24px",
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            height: "460px",
            background: "#0c1325",
            border: "1px solid rgba(168, 85, 247, 0.4)",
            borderRadius: "18px",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(168, 85, 247, 0.25)",
            display: "flex",
            flexDirection: "column",
            zIndex: 45,
            overflow: "hidden"
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 16px",
              background: "linear-gradient(90deg, #181d33, #1e1338)",
              borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "#a855f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}
              >
                <Bot size={18} />
              </div>
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#fff" }}>
                  Genie AI Advisor
                </div>
                <div style={{ fontSize: "0.72rem", color: "#10b981", display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981" }} /> Online & Ready
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowBotModal(false)}
              style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              padding: "16px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              fontSize: "0.85rem"
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                  maxWidth: "82%",
                  padding: "10px 14px",
                  borderRadius: m.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                  background: m.sender === "user" ? "#00e5ff" : "rgba(255, 255, 255, 0.06)",
                  color: m.sender === "user" ? "#060913" : "#fff",
                  fontWeight: m.sender === "user" ? 600 : 400,
                  lineHeight: 1.5,
                  boxShadow: m.sender === "user" ? "0 2px 10px rgba(0, 229, 255, 0.3)" : "none"
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={handleSend}
            style={{
              padding: "12px",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              background: "rgba(10, 15, 28, 0.95)",
              display: "flex",
              gap: "8px"
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about SEO, fees, syllabus..."
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                background: "rgba(255, 255, 255, 0.04)",
                color: "#fff",
                fontSize: "0.85rem",
                outline: "none"
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #a855f7, #7c3aed)",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                width: "38px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* WhatsApp Quick Form Modal */}
      {showWaModal && (
        <div
          style={{
            position: "fixed",
            bottom: "85px",
            right: "24px",
            width: "340px",
            maxWidth: "calc(100vw - 32px)",
            background: "#0c1724",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            borderRadius: "18px",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.7), 0 0 25px rgba(16, 185, 129, 0.25)",
            padding: "20px",
            zIndex: 45
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <MessageSquare size={16} color="#fff" />
              </div>
              <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Instant WhatsApp Chat</span>
            </div>
            <button onClick={() => setShowWaModal(false)} style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "pointer" }}>
              <X size={18} />
            </button>
          </div>

          <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "14px" }}>
            Connect with our lead academic counselor directly via WhatsApp to receive the complete course brochure & fee details.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Connecting to WhatsApp Counselor (+91 9891707129)... Redirecting to chat.");
              setShowWaModal(false);
            }}
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <input
              type="text"
              required
              placeholder="Your Name"
              style={{
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.04)",
                color: "#fff",
                fontSize: "0.85rem",
                outline: "none"
              }}
            />
            <input
              type="tel"
              required
              placeholder="WhatsApp Number"
              style={{
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                background: "rgba(255, 255, 255, 0.04)",
                color: "#fff",
                fontSize: "0.85rem",
                outline: "none"
              }}
            />
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px",
                fontWeight: 600,
                fontSize: "0.88rem",
                cursor: "pointer",
                marginTop: "4px"
              }}
            >
              Start WhatsApp Chat
            </button>
          </form>
        </div>
      )}
    </>
  );
}
