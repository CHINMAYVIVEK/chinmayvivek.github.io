import type { Metadata } from "next";

export const siteUrl = "https://chinmayvivek.com";

export const siteConfig = {
  name: "Chinmay Vivek",
  jobTitle: "Applied AI Research Engineer",
  tagline: "Building Scalable AI Products for Startups",
  title: "Chinmay Vivek | Applied AI Research Engineer | Scalable AI for Startups",
  description:
    "Chinmay Vivek is an Applied AI Research Engineer in Bangalore, India. Building scalable AI products for startups: LLM applications, RAG pipelines, AI agents, and MLOps on AWS and Kubernetes.",
  keywords: [
    "Chinmay Vivek",
    "Chinmay Vivek AI engineer",
    "Applied AI Research Engineer Bangalore",
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
    "Multi-agent systems",
    "LangChain developer",
    "AI research engineer portfolio",
  ],
  ogImage: "/assets/img/hero-bg.webp",
  twitter: "@chinmayvivek",
  email: "iam@chinmayvivek.com",
};

export const metadataBase = new URL(siteUrl);

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
        alt: "Chinmay Vivek, Applied AI Research Engineer in Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.twitter,
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description:
      "Applied AI Research Engineer in Bangalore. Building scalable AI products for startups: LLM apps, RAG, AI agents, and MLOps.",
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
      jobTitle: siteConfig.jobTitle,
      description:
        "Applied AI Research Engineer in Bangalore. Building scalable AI products for startups with generative AI, LLM applications, RAG, AI agents, and MLOps on AWS and Kubernetes.",
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
        "Prompt Engineering",
        "MLOps Engineering",
        "Scalable AI Infrastructure",
        "Production Machine Learning",
        "Fintech AI",
        "PyTorch",
        "FastAPI",
        "Kubernetes",
        "Go",
        "Python",
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
      name: "Chinmay Vivek | Applied AI Research Engineer Portfolio",
      url: siteUrl,
      description: siteConfig.description,
      author: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Chinmay Vivek | Applied AI Research Engineer Portfolio",
      description:
        "Portfolio of Chinmay Vivek: LLM systems, RAG, generative AI, fintech ML, and cloud AI infrastructure projects.",
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
  ],
};
