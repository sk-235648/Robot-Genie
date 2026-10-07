import React from "react";

interface StructuredDataProps {
  type: "organization" | "course" | "website";
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let schemaData = {};

  if (type === "organization" || type === "website") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Robot Genie",
      "alternateName": "Robot Genie Digital Marketing Platform",
      "url": "https://robotgenie.in",
      "logo": "https://robotgenie.in/logo.png",
      "description": "Robot Genie is a premier digital marketing education and career institute specializing in SEO, Google Ads, PPC, social media marketing, content strategy, and GA4 analytics.",
      "sameAs": [
        "https://www.linkedin.com/company/robotgenie",
        "https://medium.com/@robotgenie",
        "https://youtube.com/@robotgenie"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "METRO PILLAR NO 35, B-29 1st office no 301, Laxmi Nagar",
        "addressLocality": "Delhi",
        "postalCode": "110092",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing Training Courses",
        "itemListElement": [
          {
            "@type": "Course",
            "name": "Advanced Digital Marketing",
            "description": "Comprehensive practical course covering SEO, Google Ads, Meta Ads, GA4, and performance marketing."
          },
          {
            "@type": "Course",
            "name": "Search Engine Optimization (SEO)",
            "description": "Master technical crawl audits, semantic keywords, schema markup, and high-impact ranking tactics."
          }
        ]
      }
    };
  } else if (type === "course" && data) {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": data.name,
      "description": data.shortDescription,
      "provider": {
        "@type": "Organization",
        "name": "Robot Genie",
        "sameAs": "https://robotgenie.in"
      },
      "courseCode": data.slug,
      "educationalCredentialAwarded": "Robot Genie Verified Certificate",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Online / Hybrid Practical",
        "courseWorkload": data.duration
      },
      "offers": {
        "@type": "Offer",
        "price": data.price.replace(/[^0-9]/g, ""),
        "priceCurrency": "INR",
        "category": data.level
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
