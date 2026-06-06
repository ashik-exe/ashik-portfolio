// Real uploaded images (place in /public/images/)
import thumb1 from "../assets/thumb1.jpg";
import thumb2 from "../assets/thumb2.jpg";
import thumb3 from "../assets/thumb3.png";
import thumb4 from "../assets/thumb4.jpg";
import thumb5 from "../assets/thumb5.jpg";
export const thumbnails = [
  {
    id: 0,
    image: thumb1,
    category: "documentary",
    alt: "The Final Collapse Documentary Thumbnail",
    isReal: true
  },

  {
    id: 1,
    image: thumb2,
    category: "documentary",
    alt: "Documentary Thumbnail 2",
    isReal: true
  },

  {
    id: 2,
    image: thumb3,
    category: "money",
    alt: "Finance YouTube Thumbnail",
    isReal: true
  },

  {
    id: 3,
    image: thumb4,
    category: "money",
    alt: "Should You Buy Now Thumbnail",
    isReal: true
  },

  {
    id: 4,
    image: thumb5,
    category: "challenge",
    alt: "Billion Dollar Button Thumbnail",
    isReal: true
  }
];

// Images used by fullscreen viewer (same order as above)
export const viewerImages = [
  thumb1,
  thumb2,
  thumb3,
  thumb4,
  thumb5,
];

// Mock (CSS-only) items — content rendered in PortfolioCard
export const mockItems = [
  { id: "challenge-1",  category: "challenge",       bgClass: "bg-gradient-to-tr from-purple-900 via-indigo-900 to-black",      isReal: false },
  { id: "tech-1",    category: "tech",         bgClass: "bg-gradient-to-b from-blue-900 to-black border border-blue-500/30", isReal: false },
  { id: "crypto-1",  category: "crypto",       bgClass: "bg-gradient-to-r from-yellow-900 to-black",                      isReal: false },
  { id: "social-1",  category: "social",       bgClass: "bg-gradient-to-br from-pink-600 to-orange-600",                  isReal: false },
  { id: "challenge-2",  category: "challenge",       bgClass: "bg-gradient-to-bl from-red-900 to-black",                        isReal: false },
];

export const filterCategories = [
  { label: "All",           value: "all" },
  { label: "Make Money",    value: "money" },
  { label: "Challenge", value: "challenge" },
  { label: "Tech/AI",       value: "tech" },
  { label: "Crypto/Web3",   value: "crypto" },
  { label: "Social Growth", value: "social" },
  { label: "Documentary",   value: "documentary" },
];

export const services = [
  { number: "01", icon: "🎯", title: "YouTube Thumbnail Design",  text: "High-CTR thumbnails engineered to capture attention and maximize clicks.",                                                          featured: false },
  { number: "02", icon: "♻️", title: "Thumbnail Redesign",        text: "Transform underperforming thumbnails into clean, strategic visuals.",                                                               featured: false },
  { number: "03", icon: "📱", title: "Social Media Graphics",     text: "Scroll-stopping graphics for Instagram, X, LinkedIn, and other platforms.",                                                        featured: false },
  { number: "04", icon: "₿",  title: "Web3 & Crypto Visuals",     text: "Professional graphics for blockchain projects, airdrops, token launches, and crypto communities.", featured: true, badge: "Specialized" },
];

export const processSteps = [
  { number: "01", icon: "🧠", title: "Understand Topic",    text: "I analyze your video, title, and target audience to find the core message and emotional trigger.",                                       featured: false },
  { number: "02", icon: "🎣", title: "Create Hook",         text: "Brainstorming visual hooks that complement the title without repeating it, creating a curiosity gap.",                                   featured: false },
  { number: "03", icon: "🎨", title: "Design Layout",       text: "Drafting compositions using the rule of thirds, high-contrast colors, and readable typography.",                                        featured: false },
  { number: "04", icon: "📈", title: "Optimize & Deliver",  text: "Testing against UI elements (timestamps, mobile view) to ensure perfect visibility and maximum CTR.",                                   featured: true  },
];

export const tools = [
  { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", alt: "Adobe Photoshop" },
  { name: "Figma",     src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",              alt: "Figma"           },
  { name: "Canva",     src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg",         alt: "Canva"           },
];

export const contactOptions = [
  { href: "mailto:mdashik.t07@gmail.com",                                          target: "_self",   icon: "https://cdn.simpleicons.org/maildotru/ffffff", alt: "Email",     title: "Email",     subtitle: "mdashik.t07@gmail.com"  },
  { href: "https://wa.me/8801752428484",                                            target: "_blank",  icon: "https://cdn.simpleicons.org/whatsapp/25D366",  alt: "WhatsApp",  title: "WhatsApp",  subtitle: "Chat instantly"          },
  { href: "https://t.me/ashik_exe",                                                 target: "_blank",  icon: "https://cdn.simpleicons.org/telegram/229ED9",  alt: "Telegram",  title: "Telegram",  subtitle: "@ashik_exe"              },
  { href: "https://discord.com/users/YOUR_DISCORD_ID",                              target: "_blank",  icon: "https://cdn.simpleicons.org/discord/5865F2",   alt: "Discord",   title: "Discord",   subtitle: "Add me on Discord"       },
  { href: "https://www.upwork.com/freelancers/~011c3afa07f2332e27",                 target: "_blank",  icon: "https://cdn.simpleicons.org/upwork/6FDA44",    alt: "Upwork",    title: "Upwork",    subtitle: "Hire via Upwork"         },
  { href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdashik.t07@gmail.com",   target: "_blank",  icon: "https://cdn.simpleicons.org/gmail/EA4335",     alt: "Gmail",     title: "Gmail",     subtitle: "Compose in Gmail"        },
];
