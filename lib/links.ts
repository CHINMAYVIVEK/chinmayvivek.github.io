function requiredPublic(name: string, value: string | undefined): string {
  const trimmed = value?.trim();
  if (!trimmed) {
    throw new Error(`Missing ${name}. Set it in .env before building.`);
  }
  return trimmed;
}

/** External URLs from env. Inlined at build time; still visible in the exported HTML. */
export const links = {
  github: requiredPublic(
    "NEXT_PUBLIC_GITHUB_URL",
    process.env.NEXT_PUBLIC_GITHUB_URL,
  ),
  linkedin: requiredPublic(
    "NEXT_PUBLIC_LINKEDIN_URL",
    process.env.NEXT_PUBLIC_LINKEDIN_URL,
  ),
  x: requiredPublic("NEXT_PUBLIC_X_URL", process.env.NEXT_PUBLIC_X_URL),
  medium: requiredPublic(
    "NEXT_PUBLIC_MEDIUM_URL",
    process.env.NEXT_PUBLIC_MEDIUM_URL,
  ),
  calendly: requiredPublic(
    "NEXT_PUBLIC_CALENDLY_URL",
    process.env.NEXT_PUBLIC_CALENDLY_URL,
  ),
  twitterHandle: requiredPublic(
    "NEXT_PUBLIC_TWITTER_HANDLE",
    process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  ),
  contactForm: requiredPublic(
    "NEXT_PUBLIC_CONTACT_FORM_URL",
    process.env.NEXT_PUBLIC_CONTACT_FORM_URL,
  ),
  sumeruDemo: requiredPublic(
    "NEXT_PUBLIC_SUMERU_DEMO_URL",
    process.env.NEXT_PUBLIC_SUMERU_DEMO_URL,
  ),
  sumeruGithub: requiredPublic(
    "NEXT_PUBLIC_SUMERU_GITHUB_URL",
    process.env.NEXT_PUBLIC_SUMERU_GITHUB_URL,
  ),
  sentinelCover: requiredPublic(
    "NEXT_PUBLIC_SENTINEL_COVER_URL",
    process.env.NEXT_PUBLIC_SENTINEL_COVER_URL,
  ),
  sentinelDemo: requiredPublic(
    "NEXT_PUBLIC_SENTINEL_DEMO_URL",
    process.env.NEXT_PUBLIC_SENTINEL_DEMO_URL,
  ),
  sentinelGithub: requiredPublic(
    "NEXT_PUBLIC_SENTINEL_GITHUB_URL",
    process.env.NEXT_PUBLIC_SENTINEL_GITHUB_URL,
  ),
  llmCover: requiredPublic(
    "NEXT_PUBLIC_LLM_COVER_URL",
    process.env.NEXT_PUBLIC_LLM_COVER_URL,
  ),
  analyticsCover: requiredPublic(
    "NEXT_PUBLIC_ANALYTICS_COVER_URL",
    process.env.NEXT_PUBLIC_ANALYTICS_COVER_URL,
  ),
  liveClassCover: requiredPublic(
    "NEXT_PUBLIC_LIVECLASS_COVER_URL",
    process.env.NEXT_PUBLIC_LIVECLASS_COVER_URL,
  ),
  liveClassDemo: requiredPublic(
    "NEXT_PUBLIC_LIVECLASS_DEMO_URL",
    process.env.NEXT_PUBLIC_LIVECLASS_DEMO_URL,
  ),
  liveClassGithub: requiredPublic(
    "NEXT_PUBLIC_LIVECLASS_GITHUB_URL",
    process.env.NEXT_PUBLIC_LIVECLASS_GITHUB_URL,
  ),
  swiftSchoolDemo: requiredPublic(
    "NEXT_PUBLIC_SWIFTSCHOOL_DEMO_URL",
    process.env.NEXT_PUBLIC_SWIFTSCHOOL_DEMO_URL,
  ),
  swiftSchoolGithub: requiredPublic(
    "NEXT_PUBLIC_SWIFTSCHOOL_GITHUB_URL",
    process.env.NEXT_PUBLIC_SWIFTSCHOOL_GITHUB_URL,
  ),
};
