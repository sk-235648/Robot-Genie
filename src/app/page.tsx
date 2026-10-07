import React from "react";
import Hero from "@/components/Hero";
import IntroductionSection from "@/components/IntroductionSection";
import SkillsCoveredSection from "@/components/SkillsCoveredSection";
import FeaturedCoursesSection from "@/components/FeaturedCoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import LearningJourney from "@/components/LearningJourney";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Robot Genie | Advanced Digital Marketing Courses",
  description: "Learn advanced digital marketing with Robot Genie. Explore SEO, social media marketing, content marketing, Google Ads, PPC and other essential digital marketing skills.",
  alternates: {
    canonical: "/"
  }
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Introduction to Robot Genie */}
      <IntroductionSection />

      {/* 3. What You'll Learn (Core Skills Covered) */}
      <SkillsCoveredSection />

      {/* 4. Featured Courses Grid */}
      <FeaturedCoursesSection />

      {/* 5. Why Choose Robot Genie */}
      <WhyChooseUs />

      {/* 6. Learning Journey (Learn -> Practice -> Apply -> Grow) */}
      <LearningJourney />

      {/* 7. Student Success & Testimonials */}
      <TestimonialSection />

      {/* 8. Conversion Call-To-Action */}
      <CTASection />
    </main>
  );
}
