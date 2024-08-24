import { absoluteUrl } from "@/lib/utils"

export type SiteConfig = typeof siteConfig

const links = {
  twitter: "",
  github: "",
  githubAccount: "",
  discord: "",
  calDotCom: "",
}

export const siteConfig = {
  name: "Website name",
  description: "website description",
  url: absoluteUrl("/"),
  keywords: ["keywords"],
  links,
}
