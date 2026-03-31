# Implementation Plan - Website Metadata Enhancement

This plan outlines the steps to replace the default "Bolt" previews with high-quality, custom snapshots of the AutomateAI landing page and implement robust SEO and social media metadata.

## User Review Required

> [!IMPORTANT]
> **Production URL:** Please provide the final production URL (e.g., `https://automate-ai.com`) to ensure the `canonical` and `og:url` tags are accurate.
> **Social Media Handles:** If you have specific Twitter/X handles or Facebook Page IDs, please let me know.

## Proposed Changes

### Assets Generation

#### [NEW] [og-image.png](file:///c:/Users/rajvi/B2B-AI-Automation-Lead-Gen-Landing-Page/public/og-image.png)
I will generate a high-resolution, branded Open Graph image based on the current website design.

#### [NEW] [favicon.svg](file:///c:/Users/rajvi/B2B-AI-Automation-Lead-Gen-Landing-Page/public/favicon.svg)
A modern, vector-based favicon for the "AutomateAI" brand.

---

### SEO & Social Media Metadata

#### [MODIFY] [index.html](file:///c:/Users/rajvi/B2B-AI-Automation-Lead-Gen-Landing-Page/index.html)
Comprehensive overhaul of the `<head>` section:
*   **Standard SEO:** Optimized `title`, `description`, and `keywords`.
*   **Open Graph (OG):** Tags for LinkedIn, Facebook, and Discord.
*   **Twitter Cards:** Enhanced preview tags for X/Twitter.
*   **Theme Color:** Matching the brand's dark aesthetic.

---

### Search Engine Guidance

#### [NEW] [robots.txt](file:///c:/Users/rajvi/B2B-AI-Automation-Lead-Gen-Landing-Page/public/robots.txt)
Guidance for search engine crawlers.

#### [NEW] [sitemap.xml](file:///c:/Users/rajvi/B2B-AI-Automation-Lead-Gen-Landing-Page/public/sitemap.xml)
Discovery help for search engines.

## Open Questions

> [!QUESTION]
> **Keywords:** I'm planning to use: `AI automation`, `B2B lead generation`, `productivity tools`, `workflow optimization`. Any others?
> **Brand Name:** Is "AutomateAI" the correct brand name for metadata?

## Verification Plan

### Automated Tests
*   Preview social sharing using browser-simulated tools.
*   Verify asset paths in the `public/` directory.

### Manual Verification
*   Check the `index.html` head section.
*   Verify theme color in mobile simulation.
