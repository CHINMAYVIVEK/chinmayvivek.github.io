import type { Metadata } from "next";

/** Set at build time: GitHub Pages → github.io, Docker → chinmayvivek.com */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Chinmay Vivek",
  jobTitle: "Applied AI Research Engineer",
  tagline: "Building Scalable AI Products for Startups",
  title: "Chinmay Vivek | Applied AI Research Engineer & Full Stack Developer",
  description:
    "Chinmay Vivek is an Applied AI Research Engineer and Full Stack Developer in Bangalore. Building scalable AI products for startups: LLM apps, RAG, full-stack backends, and MLOps.",
  keywords: [
    "Chinmay Vivek",
    "Chinmay Vivek AI engineer",
    "Applied AI Research Engineer Bangalore",
    "Full Stack Developer AI",
    "Scalable AI products for startups",
    "Startup AI engineer India",
    "Generative AI engineer India",
    "LLM application development",
    "LLM engineer portfolio",
    "Retrieval augmented generation",
    "RAG pipeline developer",
    "AI agent development",
    "AI infrastructure engineer",
    "MLOps engineer",
    "Production machine learning",
    "Fintech AI developer",
    "PyTorch FastAPI",
    "Kubernetes AI deployment",
    "AWS ML platform",
    "Go Rust Python AI backend",
    "Next.js React Flutter",
    "Multi-agent systems",
    "LangChain developer",
    "AI research engineer portfolio",
  ],
  ogImage: "/assets/img/hero-bg.webp",
  twitter: "@chinmayvivek",
  calendlyUrl: "https://calendly.com/chinmay-vivek/new-meeting",
};

const metadataBase = new URL(siteUrl);

export const defaultMetadata: Metadata = {
  metadataBase,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 900,
        height: 1600,
        alt: "Chinmay Vivek, Applied AI Research Engineer and Full Stack Developer in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description:
      "Applied AI Research Engineer and Full Stack Developer in Bangalore. LLM apps, RAG, backends, and MLOps for startups.",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/assets/icons/icon-32x32.png",
    apple: "/assets/icons/icon.png",
  },
  manifest: "/manifest.json",
  category: "technology",
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Chinmay Vivek",
      url: siteUrl,
      image: `${siteUrl}/assets/img/hero-bg.webp`,
      jobTitle: `${siteConfig.jobTitle} · Full Stack Developer`,
      description:
        "Applied AI Research Engineer and Full Stack Developer in Bangalore. Building scalable AI products for startups with generative AI, LLM applications, RAG, full-stack backends, and MLOps.",
      alumniOf: { "@type": "CollegeOrUniversity", name: "IIT Jodhpur" },
      sameAs: [
        "https://twitter.com/chinmayvivek",
        "https://linkedin.com/in/chinmayvivek",
        "https://github.com/chinmayvivek",
        "https://chinmayvivek.medium.com",
      ],
      knowsAbout: [
        "Generative AI",
        "Large Language Models",
        "Retrieval Augmented Generation",
        "AI Agent Development",
        "Full Stack Development",
        "MLOps Engineering",
        "Scalable AI Infrastructure",
        "Production Machine Learning",
        "Fintech AI",
        "PyTorch",
        "FastAPI",
        "Kubernetes",
        "Go",
        "Python",
        "Next.js",
        "React",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bangalore",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Chinmay Vivek | Applied AI & Full Stack Portfolio",
      url: siteUrl,
      description: siteConfig.description,
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Chinmay Vivek | Applied AI & Full Stack Portfolio",
      description:
        "Portfolio of Chinmay Vivek: LLM systems, RAG, full-stack products, fintech ML, and cloud AI infrastructure.",
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};
