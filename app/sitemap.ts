import { absoluteUrl } from "@/lib/utils"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      alternates: {
        languages: {
          en: absoluteUrl("/en"),
          "zh-CN": absoluteUrl("/zh-CN"),
        },
      },
    },
  ]
}
