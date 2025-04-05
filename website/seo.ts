// app/seo.ts

export const metadata = {
  title: "Poppr",
  description:
    "A clean, flexible modal system for React with built-in promise and confirm support.",
  keywords: [
    "poppr",
    "modal",
    "react",
    "framer motion",
    "confirm",
    "promise",
    "dialog",
  ],
  authors: [{ name: "Ryan Cuff", url: "https://x.com/rcuffdev" }],
  creator: "Ryan Cuff",
  themeColor: "#ffffff",
  openGraph: {
    title: "Poppr",
    description:
      "A clean, flexible modal system for React with built-in promise and confirm support.",
    url: "https://poppr.dev", // update if you deploy
    siteName: "Poppr",
    images: [
      {
        url: "/og.png", // placeholder until you add one
        width: 1200,
        height: 630,
        alt: "Poppr Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Poppr",
    description: "React modals made delightful.",
    site: "@rcuffdev",
    creator: "@rcuffdev",
    images: ["/og.png"],
  },
};
