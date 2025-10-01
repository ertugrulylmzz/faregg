export const minikitConfig = {
  accountAssociation: { // this will be added in step 5
    "header": "",
    "payload": "",
    "signature": ""
  },
  miniapp: {
    version: "1",
    name: "faregg", 
    subtitle: "faregg is best app in the world", 
    description: "Ads",
    screenshotUrls: [`${https://ibb.co/JWcwwRD1}/Image_fx.jpg`],
    iconUrl: `${https://ibb.co/JWcwwRD1}/Image_fx`,
    splashImageUrl: `${https://ibb.co/JWcwwRD1}/blue-hero.jpg`,
    splashBackgroundColor: "#000095",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${https://ibb.co/JWcwwRD1}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${https://ibb.co/JWcwwRD1}/blue-hero.png`,
  },
} as const;