import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://robotgenie.in"),
  title: {
    default: "Robot Genie | Advanced Digital Marketing Courses",
    template: "%s | Robot Genie"
  },
  description: "Learn advanced digital marketing with Robot Genie. Explore SEO, social media marketing, content marketing, Google Ads, PPC and other essential digital marketing skills.",
  keywords: [
    "Digital Marketing",
    "Advanced Digital Marketing",
    "Digital Marketing Courses",
    "Digital Marketing Training",
    "Digital Marketing Skills",
    "Robot Genie",
    "SEO",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Content Marketing",
    "Google Ads",
    "PPC",
    "Email Marketing",
    "Digital Marketing Strategy",
    "Online Marketing",
    "Digital Marketing Course"
  ],
  authors: [{ name: "Robot Genie Academic Board" }],
  creator: "Robot Genie",
  publisher: "Robot Genie Digital Marketing Platform",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robotgenie.in",
    title: "Robot Genie | Advanced Digital Marketing Courses",
    description: "Learn advanced digital marketing with Robot Genie. Explore SEO, social media marketing, content marketing, Google Ads, PPC and other essential digital marketing skills.",
    siteName: "Robot Genie"
  },
  twitter: {
    card: "summary_large_image",
    title: "Robot Genie | Advanced Digital Marketing Courses",
    description: "Learn advanced digital marketing with Robot Genie. Explore SEO, social media marketing, content marketing, Google Ads, PPC and other essential digital marketing skills."
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <StructuredData type="organization" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
