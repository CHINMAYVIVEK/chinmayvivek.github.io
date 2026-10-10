function publicUrl(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed || fallback;
}

/** External URLs. Env overrides the fallback. Still visible in the exported HTML. */
export const links = {
  github: publicUrl(
    process.env.NEXT_PUBLIC_GITHUB_URL,
    "https://github.com/chinmayvivek",
  ),
  linkedin: publicUrl(
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
    "https://linkedin.com/in/chinmayvivek",
  ),
  x: publicUrl(process.env.NEXT_PUBLIC_X_URL, "https://twitter.com/chinmayvivek"),
  medium: publicUrl(
    process.env.NEXT_PUBLIC_MEDIUM_URL,
    "https://chinmayvivek.medium.com/",
  ),
  calendly: publicUrl(
    process.env.NEXT_PUBLIC_CALENDLY_URL,
    "https://cal.com/chinmay-vivek-hq/30min",
  ),
  twitterHandle: publicUrl(
    process.env.NEXT_PUBLIC_TWITTER_HANDLE,
    "@chinmayvivek",
  ),
  contactForm: publicUrl(
    process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
    "https://docs.google.com/forms/d/e/1FAIpQLSd9n-L_F7boN_3VOad3dLsXx89Pv7N8Q-Y4BoqHSAZ7WjCNvQ/viewform?embedded=true",
  ),
  sumeruDemo: publicUrl(
    process.env.NEXT_PUBLIC_SUMERU_DEMO_URL,
    "https://projectmeru.github.io",
  ),
  sumeruGithub: publicUrl(
    process.env.NEXT_PUBLIC_SUMERU_GITHUB_URL,
    "https://github.com/projectmeru",
  ),
  sentinelCover: publicUrl(
    process.env.NEXT_PUBLIC_SENTINEL_COVER_URL,
    "https://github.com/CHINMAYVIVEK/SentinelVision/raw/main/screenshots/test_detection_result_letterbox.jpg",
  ),
  sentinelDemo: publicUrl(
    process.env.NEXT_PUBLIC_SENTINEL_DEMO_URL,
    "https://github.com/CHINMAYVIVEK/SentinelVision",
  ),
  sentinelGithub: publicUrl(
    process.env.NEXT_PUBLIC_SENTINEL_GITHUB_URL,
    "https://github.com/CHINMAYVIVEK/SentinelVision",
  ),
  llmCover: publicUrl(
    process.env.NEXT_PUBLIC_LLM_COVER_URL,
    "https://myoceane.fr/wp-content/uploads/2026/04/vllm.png",
  ),
  analyticsCover: publicUrl(
    process.env.NEXT_PUBLIC_ANALYTICS_COVER_URL,
    "https://cdn.boldbi.com/wp/blogs/real-time-analytics/financial.webp",
  ),
  liveClassCover: publicUrl(
    process.env.NEXT_PUBLIC_LIVECLASS_COVER_URL,
    "https://github.com/CHINMAYVIVEK/liveClass/raw/main/screenshots/Screenshot-1.png",
  ),
  liveClassDemo: publicUrl(
    process.env.NEXT_PUBLIC_LIVECLASS_DEMO_URL,
    "https://github.com/CHINMAYVIVEK/liveClass",
  ),
  liveClassGithub: publicUrl(
    process.env.NEXT_PUBLIC_LIVECLASS_GITHUB_URL,
    "https://github.com/CHINMAYVIVEK/liveClass",
  ),
  swiftSchoolDemo: publicUrl(
    process.env.NEXT_PUBLIC_SWIFTSCHOOL_DEMO_URL,
    "https://github.com/CHINMAYVIVEK/SwiftSchool",
  ),
  swiftSchoolGithub: publicUrl(
    process.env.NEXT_PUBLIC_SWIFTSCHOOL_GITHUB_URL,
    "https://github.com/CHINMAYVIVEK/SwiftSchool",
  ),
};
