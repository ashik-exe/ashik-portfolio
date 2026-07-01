import thumb1 from "../assets/thumb1.webp";
import thumb2 from "../assets/thumb2.webp";
import thumb3 from "../assets/thumb3.webp";
import thumb4 from "../assets/thumb4.webp";
import thumb5 from "../assets/thumb5.webp";

export const thumbnails = [
  { id: 0, image: thumb1, category: "doc", alt: "The Final Collapse Documentary Thumbnail", isReal: true },
  { id: 1, image: thumb2, category: "doc", alt: "Documentary Thumbnail 2", isReal: true },
  { id: 2, image: thumb3, category: "finance", alt: "Finance YouTube Thumbnail", isReal: true },
  { id: 3, image: thumb4, category: "finance", alt: "Should You Buy Now Thumbnail", isReal: true },
  { id: 4, image: thumb5, category: "tech", alt: "Billion Dollar Button Thumbnail", isReal: true }
];

export const viewerImages = [thumb1, thumb2, thumb3, thumb4, thumb5];

export const mockItems = [
  { id: "mock-1", category: "finance", label: "Finance — CTR Study", palette: ['#0d0d0d', '#1a0505'], color: '#E8192C', isReal: false },
  { id: "mock-2", category: "tech", label: "Tech — AI Video", palette: ['#0d0d0d', '#05101a'], color: '#4da6ff', isReal: false },
  { id: "mock-3", category: "web3", label: "Web3 — Crypto", palette: ['#0d0d0d', '#05140d'], color: '#3dba6f', isReal: false },
  { id: "mock-4", category: "finance", label: "Finance — Investing", palette: ['#0d0d0d', '#14100d'], color: '#f5a623', isReal: false },
  { id: "mock-5", category: "doc", label: "Documentary — History", palette: ['#0d0d0d', '#10050d'], color: '#c678dd', isReal: false },
];

export const filterCategories = [
  { label: "All", value: "all" },
  { label: "Finance", value: "finance" },
  { label: "Tech & AI", value: "tech" },
  { label: "Web3", value: "web3" },
  { label: "Documentary", value: "doc" },
];

export const services = [
  { number: "01", icon: "🎯", title: "YouTube Thumbnail Design", text: "High-CTR thumbnails engineered to capture attention and maximize clicks.", featured: false },
  { number: "02", icon: "♻️", title: "Thumbnail Redesign", text: "Transform underperforming thumbnails into clean, strategic visuals.", featured: false },
  { number: "03", icon: "📱", title: "Social Media Graphics", text: "Scroll-stopping graphics for Instagram, X, LinkedIn, and other platforms.", featured: false },
  { number: "04", icon: "₿", title: "Web3 & Crypto Visuals", text: "Professional graphics for blockchain projects, airdrops, token launches, and crypto communities.", featured: true, badge: "Specialized" },
];

export const processSteps = [
  { number: "01", icon: "🧠", title: "Understand Topic", text: "I analyze your video, title, and target audience to find the core message and emotional trigger.", featured: false },
  { number: "02", icon: "🎣", title: "Create Hook", text: "Brainstorming visual hooks that complement the title without repeating it, creating a curiosity gap.", featured: false },
  { number: "03", icon: "🎨", title: "Design Layout", text: "Drafting compositions using the rule of thirds, high-contrast colors, and readable typography.", featured: false },
  { number: "04", icon: "📈", title: "Optimize & Deliver", text: "Testing against UI elements (timestamps, mobile view) to ensure perfect visibility and maximum CTR.", featured: true },
];

export const tools = [
  { name: "Photoshop", src: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg", alt: "Adobe Photoshop" },
  { name: "Figma", src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg", alt: "Figma" },
  { name: "Canva", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg", alt: "Canva" },
];

export const contactOptions = [
  { href: "mailto:mdashik.t07@gmail.com", target: "_self", icon: "https://cdn.simpleicons.org/maildotru/ffffff", alt: "Email", title: "Email", subtitle: "mdashik.t07@gmail.com" },
  { href: "https://wa.me/8801752428484", target: "_blank", icon: "https://cdn.simpleicons.org/whatsapp/25D366", alt: "WhatsApp", title: "WhatsApp", subtitle: "Chat instantly" },
  { href: "https://t.me/ashik_exe", target: "_blank", icon: "https://cdn.simpleicons.org/telegram/229ED9", alt: "Telegram", title: "Telegram", subtitle: "@ashik_exe" },
  { href: "https://www.upwork.com/freelancers/~011c3afa07f2332e27", target: "_blank", icon: "https://cdn.simpleicons.org/upwork/6FDA44", alt: "Upwork", title: "Upwork", subtitle: "Hire via Upwork" },
];