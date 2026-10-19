import type { MetadataRoute } from "next";
import { isPreview, siteUrl } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", ...(isPreview ? { disallow: "/" } : { allow: "/" }) },
    ...(isPreview ? {} : { sitemap: `${siteUrl}/sitemap.xml` }),
  };
}
