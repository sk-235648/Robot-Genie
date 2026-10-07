export interface Course {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  duration: string;
  careerRole: string;
  topics: string[];
  tools: string[];
  price: string;
  originalPrice: string;
  discount: string;
  rating: number;
  studentsEnrolled: number;
  featured: boolean;
  syllabus: {
    week: string;
    title: string;
    description: string;
    outcomes: string[];
  }[];
  highlights: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const coursesData: Course[] = [
  {
    slug: "advanced-digital-marketing",
    name: "Advanced Digital Marketing",
    shortDescription: "Build a full-funnel playbook: keyword research, on-page SEO, paid search and social, conversion tracking, and reporting with GA4.",
    fullDescription: "The Advanced Digital Marketing Masterclass is our flagship program engineered for ambitious marketers, entrepreneurs, and career transitioners. Gain hands-on mastery across customer acquisition channels, end-to-end campaign architecture, omnichannel attribution, and AI-powered automation workflows. You will run simulated and live campaigns with real analytics dashboards.",
    level: "Intermediate",
    duration: "3 Months",
    careerRole: "Performance Marketer & Growth Strategist",
    topics: [
      "Full-Funnel Strategy",
      "Advanced SEO & Technical Audits",
      "Paid Search & Social (Google & Meta)",
      "Conversion Rate Optimization (CRO)",
      "Google Analytics 4 (GA4) & Tag Manager",
      "AI Marketing Workflows"
    ],
    tools: ["Google Analytics 4", "Meta Ads Manager", "SEMrush", "Google Tag Manager", "HubSpot", "ChatGPT for Copy"],
    price: "₹24,999",
    originalPrice: "₹45,000",
    discount: "45% OFF",
    rating: 4.9,
    studentsEnrolled: 820,
    featured: true,
    highlights: [
      "Real-world live capstone project",
      "100% hands-on campaign simulations",
      "Google & Meta certification preparation",
      "Resume & portfolio review with agency leaders"
    ],
    syllabus: [
      {
        week: "Month 1",
        title: "Foundation & Organic Growth Architecture",
        description: "Master modern search engine optimization, competitor intelligence, technical crawl diagnostics, and content velocity.",
        outcomes: ["Conduct deep keyword research", "Perform site-wide technical SEO audit", "Design cluster content strategies"]
      },
      {
        week: "Month 2",
        title: "Paid Acquisition & Performance Marketing",
        description: "Scale high-ROI advertising campaigns across Google Search, Performance Max, Meta Ads, and LinkedIn sponsored campaigns.",
        outcomes: ["Build full-funnel ad campaigns", "Implement Pixel & CAPI tracking", "A/B test ad creatives & landing page copy"]
      },
      {
        week: "Month 3",
        title: "Data Analytics, Tagging & AI Automation",
        description: "Deploy GA4 custom explorations, build Looker Studio executive dashboards, and automate marketing workflows with AI.",
        outcomes: ["Configure GTM triggers and conversion tags", "Create multi-touch attribution models", "Present capstone campaign results"]
      }
    ],
    faqs: [
      {
        question: "Who should enroll in the Advanced Digital Marketing program?",
        answer: "This program is tailored for aspiring digital marketers, marketing executives looking to upskill, entrepreneurs seeking to scale their ventures, and students aiming for high-growth agency or in-house roles."
      },
      {
        question: "Are live tools provided during the course?",
        answer: "Yes, students receive guided sandbox access and training on industry tools including Google Analytics 4, Meta Ads Manager, SEMrush, Google Tag Manager, and Canva Pro."
      },
      {
        question: "Do I get a verified course certificate upon completion?",
        answer: "Yes, upon submitting and defending your capstone project, you receive a verified, shareable Robot Genie Digital Marketing Credential."
      }
    ]
  },
  {
    slug: "seo",
    name: "Search Engine Optimization (SEO)",
    shortDescription: "Master technical SEO, semantic keyword research, high-authority link acquisition, and algorithm-proof ranking strategies.",
    fullDescription: "Our specialized Search Engine Optimization (SEO) course teaches you how to dominate modern search engines through ethical, data-driven methodologies. Learn how modern search engines rank pages using NLP, user experience metrics, and technical site architecture. From on-page optimization to schema markup and high-impact digital PR, become an indispensable SEO authority.",
    level: "All Levels",
    duration: "2 Months",
    careerRole: "SEO Specialist & Organic Growth Manager",
    topics: [
      "Semantic Keyword Research",
      "On-Page Content Architecture",
      "Technical Crawling & Core Web Vitals",
      "Schema Markup & Structured Data",
      "Digital PR & Ethical Link Acquisition",
      "Local SEO & Google Business Profile"
    ],
    tools: ["SEMrush", "Ahrefs", "Google Search Console", "Screaming Frog", "SurferSEO", "Yoast SEO"],
    price: "₹18,500",
    originalPrice: "₹32,000",
    discount: "42% OFF",
    rating: 4.9,
    studentsEnrolled: 640,
    featured: true,
    highlights: [
      "Deep dive into Google Core Web Vitals & technical health",
      "Live auditing of live commercial websites",
      "Content optimization using semantic entity models",
      "Local map pack optimization techniques"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "Search Algorithms & User Intent Discovery",
        description: "Understand search bot behaviors, entity indexing, search intent classification, and competitor gap discovery.",
        outcomes: ["Map search queries to buyer funnels", "Build comprehensive topical keyword clusters"]
      },
      {
        week: "Weeks 3-4",
        title: "Technical SEO & Structural Optimization",
        description: "Master indexing, canonicalization, XML sitemaps, robots.txt, schema JSON-LD, and page speed optimization.",
        outcomes: ["Audit websites using Screaming Frog", "Fix indexing & mobile-friendliness issues"]
      },
      {
        week: "Weeks 5-8",
        title: "Digital PR, Link Building & Ranking Monitoring",
        description: "Develop outreach campaigns, analyze backlink profiles, protect against spam updates, and track rank movement.",
        outcomes: ["Execute digital PR outreach", "Create comprehensive executive SEO ranking reports"]
      }
    ],
    faqs: [
      {
        question: "Do I need coding knowledge to learn SEO?",
        answer: "Basic HTML and CSS understanding is helpful, but no prior coding experience is required. We teach all necessary technical elements step-by-step."
      },
      {
        question: "Does this course cover AI search changes like Google AI Overviews?",
        answer: "Yes, the syllabus includes modern generative engine optimization (GEO) and strategies for ranking within AI-generated search overviews."
      }
    ]
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    shortDescription: "Develop viral organic content strategies, manage community engagement, and launch high-converting paid social campaigns across platforms.",
    fullDescription: "Master the art and science of social brand building with Robot Genie's Social Media Marketing training. Learn how to craft platform-tailored content calendars, leverage short-form video trends, optimize creator collaborations, and deploy performance advertising across Instagram, LinkedIn, TikTok, and YouTube.",
    level: "Beginner",
    duration: "2 Months",
    careerRole: "Social Media Strategist & Brand Manager",
    topics: [
      "Platform Algorithmic Trends",
      "Short-Form Video Strategy (Reels & Shorts)",
      "B2B Growth on LinkedIn",
      "Meta Ads (Instagram & Facebook)",
      "Community Management & Brand Voice",
      "Influencer Partnerships & UGC Campaigns"
    ],
    tools: ["Meta Business Suite", "Canva Pro", "CapCut", "Buffer", "Hootsuite", "Brandwatch"],
    price: "₹16,999",
    originalPrice: "₹28,000",
    discount: "39% OFF",
    rating: 4.8,
    studentsEnrolled: 510,
    featured: true,
    highlights: [
      "Create high-converting reel & video hooks",
      "Run real ad budget campaigns on Meta Business Suite",
      "Develop a 30-day corporate content calendar",
      "Build influencer pitch kits and campaign contracts"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "Brand Storytelling & Algorithm Mastery",
        description: "Learn brand identity formulation, audience personas, content buckets, and platform-specific algorithmic triggers.",
        outcomes: ["Create distinct brand voice guides", "Plan dynamic multi-channel content roadmaps"]
      },
      {
        week: "Weeks 3-4",
        title: "Short-Form Video Production & Copywriting",
        description: "Master viral storytelling structures, hook psychology, visual pacing, and compelling call-to-action scripts.",
        outcomes: ["Produce 5 complete short-form video assets", "Draft engagement-driven captions"]
      },
      {
        week: "Weeks 5-8",
        title: "Paid Social & Community Monetization",
        description: "Deploy targeted Instagram and LinkedIn ads, track ROAS, handle customer crises, and cultivate loyal brand advocates.",
        outcomes: ["Set up custom audience retargeting", "Report social engagement metrics and conversion ROI"]
      }
    ],
    faqs: [
      {
        question: "Is graphic design or video editing covered?",
        answer: "Yes, we teach practical asset design using Canva Pro and modern video creation workflows optimized for social channels."
      },
      {
        question: "Can I apply this course to B2B companies as well as B2C?",
        answer: "Absolutely. We have dedicated modules covering B2B LinkedIn executive positioning, demand generation, and B2C direct-to-consumer social playbooks."
      }
    ]
  },
  {
    slug: "google-ads-ppc",
    name: "Google Ads & PPC Advertising",
    shortDescription: "Dominate search, display, video, and shopping ad channels with data-backed bidding strategies, keyword match types, and ROAS optimization.",
    fullDescription: "Become a high-earning PPC specialist capable of turning advertising dollars into consistent, predictable revenue. This hands-on program covers Google Search ads, Performance Max (PMax), YouTube advertising, Google Shopping, bid strategy automation, quality score enhancement, and negative keyword governance.",
    level: "Intermediate",
    duration: "2 Months",
    careerRole: "PPC Specialist & Paid Acquisition Lead",
    topics: [
      "Google Search Network & Ad Rank",
      "Performance Max Campaigns (PMax)",
      "Display Remarketing & YouTube Ads",
      "Smart Bidding & Target ROAS / CPA",
      "Quality Score Architecture",
      "Conversion Tracking & Offline Sync"
    ],
    tools: ["Google Ads Manager", "Google Merchant Center", "Google Tag Manager", "SpyFu", "Looker Studio"],
    price: "₹19,999",
    originalPrice: "₹35,000",
    discount: "43% OFF",
    rating: 4.9,
    studentsEnrolled: 480,
    featured: true,
    highlights: [
      "Direct campaign architecture inside Google Ads",
      "Master ad extensions, responsive search ads & asset groups",
      "Reduce cost-per-click while improving Quality Score",
      "Build live Looker Studio performance dashboards"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "Account Setup, Structure & Quality Score",
        description: "Single-theme ad groups, match types, negative keywords, Quality Score diagnostics, and headline copy testing.",
        outcomes: ["Configure proper ad account structure", "Achieve 8+ Quality Score on key keywords"]
      },
      {
        week: "Weeks 3-4",
        title: "Conversion Tracking & Smart Bidding",
        description: "Implement Google Tag Manager triggers, enhanced conversions, Target CPA, and Target ROAS bidding strategies.",
        outcomes: ["Set up primary and secondary conversion actions", "Implement value-based bidding"]
      },
      {
        week: "Weeks 5-8",
        title: "Performance Max, YouTube & E-commerce Shopping",
        description: "Scale with Google Merchant Center feeds, asset group design, audience signals, and YouTube action campaigns.",
        outcomes: ["Launch an end-to-end Performance Max campaign", "Analyze search term reports to prevent ad budget waste"]
      }
    ],
    faqs: [
      {
        question: "Do students manage real budgets?",
        answer: "We utilize real campaign simulation sandboxes alongside guided live demonstrations to ensure risk-free, authentic practical experience."
      },
      {
        question: "Does this prepare for Google Ads official certification?",
        answer: "Yes, this program prepares you for Google Ads Search, Display, and Video official certifications."
      }
    ]
  },
  {
    slug: "content-marketing",
    name: "Content Marketing & Copywriting",
    shortDescription: "Create compelling brand narratives, inbound content funnels, persuasive sales copy, and high-converting editorial calendars.",
    fullDescription: "Content is the engine of digital marketing. Learn how to research, write, and distribute content that attracts targeted audiences, builds trust, and drives conversions. Master persuasive copywriting frameworks (AIDA, PAS), long-form thought leadership, email sequences, and multi-format content repurposing.",
    level: "Beginner",
    duration: "2 Months",
    careerRole: "Content Marketing Manager & Copywriter",
    topics: [
      "Inbound Content Funnel Architecture",
      "Persuasive Copywriting Frameworks",
      "Thought Leadership & Whitepapers",
      "Content Distribution & Syndication",
      "SEO-Driven Blogging Strategies",
      "AI-Augmented Content Workflows"
    ],
    tools: ["Notion", "Grammarly", "WordPress", "SurferSEO", "ChatGPT & Claude", "Hemingway App"],
    price: "₹14,999",
    originalPrice: "₹25,000",
    discount: "40% OFF",
    rating: 4.8,
    studentsEnrolled: 390,
    featured: false,
    highlights: [
      "Write high-converting sales landing page copy",
      "Publish live editorial articles with organic search visibility",
      "Build content distribution playbooks across LinkedIn & Medium",
      "Build portfolio ready samples"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "Content Strategy & Audience Psychology",
        description: "Understanding buyer stages, building empathy maps, and defining core content pillars.",
        outcomes: ["Develop comprehensive editorial calendars", "Identify content gaps in competitor offerings"]
      },
      {
        week: "Weeks 3-4",
        title: "Conversion Copywriting & Storytelling",
        description: "Master direct-response techniques, headline formulas, and objection-handling copywriting.",
        outcomes: ["Craft persuasive product descriptions and landing pages", "Write compelling case studies"]
      },
      {
        week: "Weeks 5-8",
        title: "Distribution, Repurposing & Metric Tracking",
        description: "Transform 1 pillar article into 10 social snippets, newsletters, and lead magnets.",
        outcomes: ["Track content ROI, bounce rates, and lead conversions", "Publish an industry piece on Medium"]
      }
    ],
    faqs: [
      {
        question: "How does AI fit into this course?",
        answer: "We teach how to utilize AI for brainstorming, research, and outline generation while preserving authentic human voice and editorial excellence."
      }
    ]
  },
  {
    slug: "email-marketing",
    name: "Email Marketing & Automation",
    shortDescription: "Build responsive subscriber lists, automated nurture workflows, segmented retention campaigns, and high-converting drip sequences.",
    fullDescription: "Email marketing delivers one of the highest ROIs in modern digital marketing. This course guides you through subscriber acquisition, deliverability hygiene, behavioral triggers, abandoned cart automations, and advanced lifecycle segmentation to retain and monetize customer bases.",
    level: "Intermediate",
    duration: "6 Weeks",
    careerRole: "Lifecycle Marketing Specialist & CRM Executive",
    topics: [
      "List Building & Opt-In Funnels",
      "Deliverability & SPF/DKIM/DMARC",
      "Automated Drip Sequences",
      "Customer Lifecycle Segmentation",
      "A/B Subject Line Testing",
      "GDPR & CAN-SPAM Compliance"
    ],
    tools: ["Mailchimp", "Klaviyo", "HubSpot CRM", "ActiveCampaign", "NeverBounce"],
    price: "₹13,500",
    originalPrice: "₹22,000",
    discount: "38% OFF",
    rating: 4.7,
    studentsEnrolled: 320,
    featured: false,
    highlights: [
      "Build a complete 5-stage automated welcome series",
      "Design responsive HTML email newsletters",
      "Solve inbox deliverability and spam-folder issues",
      "Segment audiences by purchasing frequency"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "List Growth & Technical Inbox Deliverability",
        description: "Lead magnets, popup optimization, sender reputation, authentication protocols, and inbox placement.",
        outcomes: ["Configure DNS records for deliverability", "Create compliant high-converting signup forms"]
      },
      {
        week: "Weeks 3-4",
        title: "Behavioral Automation & Drip Workflows",
        description: "Trigger-based automations, welcome series, win-back flows, and transactional emails.",
        outcomes: ["Build complex automated workflows in Klaviyo/Mailchimp", "Optimize open and click-through rates"]
      },
      {
        week: "Weeks 5-6",
        title: "Segmentation, Retention & Revenue Attribution",
        description: "RFM (Recency, Frequency, Monetary) modeling and revenue tracking in CRM systems.",
        outcomes: ["Analyze email revenue contribution", "Conduct multi-variant A/B subject line experiments"]
      }
    ],
    faqs: [
      {
        question: "Is this course relevant for e-commerce brands?",
        answer: "Yes, we have dedicated modules on e-commerce flows including abandoned cart recovery, browse abandonment, and post-purchase upsells."
      }
    ]
  },
  {
    slug: "analytics-strategy",
    name: "Analytics & Digital Marketing Strategy",
    shortDescription: "Turn raw marketing data into profitable strategic decisions using Google Analytics 4, Tag Manager, and Looker Studio dashboards.",
    fullDescription: "Modern marketing leaders make data-backed decisions. Master Google Analytics 4 (GA4), event tracking, user journeys, multi-touch attribution, and executive reporting. Learn how to diagnose leaky funnels, calculate customer acquisition costs (CAC), and present actionable strategic roadmaps to executive leadership.",
    level: "Advanced",
    duration: "2 Months",
    careerRole: "Marketing Analytics Manager & Digital Strategist",
    topics: [
      "Google Analytics 4 Architecture",
      "Custom Events & Google Tag Manager",
      "User Journey & Funnel Diagnostics",
      "Multi-Touch Attribution Modeling",
      "Looker Studio Interactive Dashboards",
      "CAC, LTV & Marketing ROI Calculations"
    ],
    tools: ["Google Analytics 4", "Google Tag Manager", "Looker Studio", "BigQuery (Intro)", "Excel / Google Sheets"],
    price: "₹21,000",
    originalPrice: "₹38,000",
    discount: "45% OFF",
    rating: 4.9,
    studentsEnrolled: 410,
    featured: true,
    highlights: [
      "Build custom GA4 exploration reports",
      "Deploy custom GTM events without developer assistance",
      "Design complete client-ready Looker Studio dashboards",
      "Conduct marketing unit economics analysis"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "GA4 Data Model & Event-Driven Analytics",
        description: "Understand sessions vs events, data streams, privacy considerations, and dimensions vs metrics.",
        outcomes: ["Configure GA4 property and enhanced measurement", "Set up custom dimensions and metrics"]
      },
      {
        week: "Weeks 3-4",
        title: "Google Tag Manager Deployment",
        description: "Tags, triggers, variables, data layer pushes, scroll depth tracking, and video engagement tracking.",
        outcomes: ["Deploy end-to-end tag architecture", "Debug tracking with GTM Preview mode"]
      },
      {
        week: "Weeks 5-8",
        title: "Attribution, Dashboarding & Executive Strategy",
        description: "Data-driven attribution models, connecting GA4 to Looker Studio, and building executive summaries.",
        outcomes: ["Build live Looker Studio executive dashboard", "Deliver a comprehensive digital marketing strategic review"]
      }
    ],
    faqs: [
      {
        question: "Is statistics or math proficiency required?",
        answer: "Basic comfort with arithmetic and percentages is all that is required. We teach all statistical concepts in an intuitive, practical business context."
      }
    ]
  },
  {
    slug: "digital-marketing-fundamentals",
    name: "Digital Marketing Fundamentals",
    shortDescription: "The essential primer for beginners: discover core marketing principles, modern channels, digital terminology, and career roadmaps.",
    fullDescription: "A comprehensive gateway for newcomers, college students, and professionals transitioning into digital marketing. Gain complete clarity across SEO, paid advertising, social media, content strategy, email marketing, and web analytics. Complete real-world foundational projects that give you confidence and a competitive edge.",
    level: "Beginner",
    duration: "6 Weeks",
    careerRole: "Junior Digital Marketing Executive",
    topics: [
      "Introduction to Modern Digital Ecosystems",
      "Audience Personas & Value Propositions",
      "Website Fundamentals & Landing Pages",
      "Overview of SEO & Paid Ads",
      "Social Media Basics & Content Basics",
      "Digital Marketing Career Roadmaps"
    ],
    tools: ["Canva", "Google Docs", "WordPress", "Google Trends", "Meta Business Suite"],
    price: "₹9,999",
    originalPrice: "₹18,000",
    discount: "44% OFF",
    rating: 4.8,
    studentsEnrolled: 950,
    featured: false,
    highlights: [
      "Beginner-friendly, no prerequisites needed",
      "Hands-on exercises from week one",
      "Understand digital marketing industry career paths",
      "Personalized mentorship and guidance"
    ],
    syllabus: [
      {
        week: "Weeks 1-2",
        title: "The Digital Landscape & Buyer Personas",
        description: "Digital vs traditional marketing, consumer psychology, buyer journey mapping, and value propositions.",
        outcomes: ["Build 2 targeted customer personas", "Map multi-channel touchpoints"]
      },
      {
        week: "Weeks 3-4",
        title: "Organic vs Paid Channels Introduction",
        description: "Core concepts of search engines, social media algorithms, keyword intent, and digital advertising formats.",
        outcomes: ["Conduct keyword research with Google Trends", "Design a test ad campaign mock-up"]
      },
      {
        week: "Weeks 5-6",
        title: "Measurement, Strategy & Career Preparation",
        description: "Key performance indicators (KPIs), metrics, analytics basics, and crafting an entry-level digital marketing resume.",
        outcomes: ["Calculate basic marketing metrics (CTR, CPC, Conversion Rate)", "Create your digital marketing personal portfolio"]
      }
    ],
    faqs: [
      {
        question: "Can I take this course with no prior marketing background?",
        answer: "Yes! This course was specifically designed as a welcoming, jargon-free launchpad for beginners."
      }
    ]
  }
];

export const skillsCovered = [
  {
    id: "seo",
    title: "Search Engine Optimization",
    shortName: "SEO",
    description: "Technical crawling, semantic content architectures, keyword research, and high-authority backlink development.",
    icon: "Search",
    metrics: "Rank #1 on Google"
  },
  {
    id: "social",
    title: "Social Media Marketing",
    shortName: "Social Media",
    description: "Brand storytelling, viral reels, community building, and cross-channel organic growth on Instagram and LinkedIn.",
    icon: "Share2",
    metrics: "10x Brand Engagement"
  },
  {
    id: "content",
    title: "Content Marketing",
    shortName: "Content Strategy",
    description: "Inbound narrative funnels, conversion copywriting, thought leadership articles, and editorial calendar management.",
    icon: "FileText",
    metrics: "High Intent Leads"
  },
  {
    id: "ads",
    title: "Google Ads & PPC",
    shortName: "Paid Advertising",
    description: "Google Search, Performance Max, Meta Ads Manager, bid strategy automation, and maximizing Return on Ad Spend (ROAS).",
    icon: "TrendingUp",
    metrics: "4.5x Average ROAS"
  },
  {
    id: "email",
    title: "Email Marketing & CRM",
    shortName: "Email Automation",
    description: "Lifecycle lead nurture sequences, behavioral segmentation, cart recovery, and inbox deliverability optimization.",
    icon: "Mail",
    metrics: "35%+ Open Rates"
  },
  {
    id: "analytics",
    title: "Web Analytics & Strategy",
    shortName: "GA4 & Insights",
    description: "Google Analytics 4 exploration reports, Google Tag Manager event tracking, and Looker Studio executive dashboards.",
    icon: "BarChart3",
    metrics: "Data-Driven ROI"
  }
];

export const testimonials = [
  {
    name: "Aakash Sharma",
    role: "SEO Analyst at MediaWave Agency",
    course: "Search Engine Optimization (SEO)",
    content: "The practical exercises at Robot Genie gave me an undeniable edge during interviews. Instead of just memorizing theory, I showed a live technical audit I performed on a real website. Landed my dream agency role within 3 weeks of finishing!",
    avatar: "AS",
    rating: 5
  },
  {
    name: "Priya Nair",
    role: "Performance Marketer at D2C Brands",
    course: "Advanced Digital Marketing",
    content: "The curriculum reflects what modern marketing teams actually use. We set up real GA4 custom events, built Meta retargeting funnels, and optimized ad budgets. The instructors are practitioners, not just academic lecturers.",
    avatar: "PN",
    rating: 5
  },
  {
    name: "Rohan Verma",
    role: "Content & Growth Specialist at FinTech Startup",
    course: "Content Marketing & Copywriting",
    content: "Robot Genie taught me how to bridge copywriting with SEO data. My articles started ranking on page 1, and our organic conversions jumped significantly. The structured approach to learning made everything click.",
    avatar: "RV",
    rating: 5
  }
];

export const whyChooseFeatures = [
  {
    title: "100% Practical & Project-Based",
    description: "No outdated lecture slides. Build live campaigns, audit real websites, configure real analytics pipelines, and present results.",
    icon: "Cpu"
  },
  {
    title: "Industry-Standard Tool Stack",
    description: "Hands-on experience with GA4, Meta Ads Manager, SEMrush, Google Tag Manager, Ahrefs, Canva Pro, and Looker Studio.",
    icon: "Layers"
  },
  {
    title: "Structured Learning Framework",
    description: "A progressive path from foundational principles to advanced omnichannel strategies, tailored for students and working professionals.",
    icon: "Compass"
  },
  {
    title: "Portfolio & Career Support",
    description: "Graduate with a comprehensive, audit-ready portfolio of work, verified credentials, and strategic guidance for agency or corporate roles.",
    icon: "Award"
  }
];
