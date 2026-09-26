// Site copy shared across pages. Brought together from the original Flask
// templates and the single-page FMCG redesign (bell-recruitment-website.html).

export const CONTACT = {
  phone: "+44 28 9031 1211",
  phoneHref: "tel:+442890311211",
  email: "julie@bell-recruitment.net",
  address: "24 Mount Charles, Belfast BT7 1NZ, United Kingdom",
  jobsUrl: "https://www.careers-page.com/bellrecruitment",
  linkedin: "https://www.linkedin.com/company/bell-recruitment-ni/",
  facebook: "https://www.facebook.com/bellrecruits",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us/", label: "About Us" },
  { href: "/employer/", label: "Services" },
  { href: CONTACT.jobsUrl, label: "Jobs", external: true },
  { href: "/blogs/", label: "Blogs" },
  { href: "/testimonials/", label: "Testimonials" },
  { href: "/contact-us/", label: "Contact Us" },
];

export const STATS = [
  { value: "25+", label: "Years of FMCG expertise" },
  { value: "500+", label: "Placements made" },
  { value: "13", label: "Trusted brand partners" },
  { value: "20+", label: "Year client relationships" },
];

export const PARTNERS = [
  { src: "/images/partner-ten.png", alt: "Tennent's NI", w: 287, h: 100 },
  { src: "/images/partner-irwins.png", alt: "Irwin's Bakery", w: 153, h: 100 },
  { src: "/images/partner-prep.png", alt: "Prep House", w: 92, h: 100 },
  { src: "/images/partner-henderson.png", alt: "Henderson Group", w: 249, h: 100 },
  { src: "/images/partner-gm.png", alt: "GM Marketing", w: 121, h: 100 },
  { src: "/images/partner-dan.png", alt: "Dan", w: 91, h: 100 },
  { src: "/images/partner-richmond.png", alt: "Richmond Marketing", w: 287, h: 100 },
  { src: "/images/partner-wnr.webp", alt: "WNR", w: 100, h: 100 },
  { src: "/images/partner-thompsons.jpg", alt: "Thompson's Family Tea", w: 135, h: 100 },
  { src: "/images/partner-whites.png", alt: "Whites", w: 100, h: 100 },
  { src: "/images/partner-kestrel.jpeg", alt: "Kestrel Foods", w: 100, h: 100 },
  { src: "/images/partner-cn.jpeg", alt: "Courtney and Nelson", w: 100, h: 100 },
  { src: "/images/partner-mulrines.jpeg", alt: "Mulrines", w: 337, h: 100 },
];

export const VALUES = [
  {
    icon: "fa-bolt",
    title: "Deep FMCG Expertise",
    text: "Founded by an industry veteran with a decade at Pepsi, Budweiser, and Ballygowan. We speak your language because we've worked on your shop floor, in your depots, and across your sales routes.",
  },
  {
    icon: "fa-handshake",
    title: "25+ Years of Trust",
    text: "Our client relationships span decades, not campaigns. From Henderson Group to Irwin's Bakery, the brands that define Northern Ireland's grocery landscape choose us year after year.",
  },
  {
    icon: "fa-user-check",
    title: "People-First Approach",
    text: "Every candidate is personally screened. Every brief is personally managed by our founder, Julie Bell. No call centres, just a recruitment partner who knows your sector inside out.",
  },
];

export const SERVICES = [
  {
    title: "Executive Search",
    tagline: "Senior leadership recruitment",
    image: "/images/handshake-bg.webp",
    intro:
      "Our tailored executive search approach goes beyond CVs, focusing on leadership capability, cultural alignment, and future potential.",
    points: [
      "Identify, attract, and secure high impact leaders who drive growth and long term success",
      "Deep FMCG market intelligence and targeted headhunting",
      "Consultative brief development aligned to your strategy",
      "Confidential process from approach to offer",
      "Commercial Director, Sales Director, MD-level roles",
    ],
  },
  {
    title: "Permanent Recruitment",
    tagline: "Commercial, sales & operational",
    image: "/images/interview.jpg",
    intro:
      "At Bell Recruitment, we find the right people to grow your team, not just fill a role. Our permanent placement service includes:",
    points: [
      "Identifying, attracting, and selecting the best candidates",
      "Every candidate personally interviewed and assessed",
      "Short-listing the strongest matches for final interview",
      "Supporting you through package negotiation and onboarding",
    ],
  },
  {
    title: "Field Marketing",
    tagline: "In-store activation teams",
    image: "/images/supermarket-shelves.jpg",
    intro:
      "Energetic, well-briefed field teams who bring your brand to life in store and move product off the shelf.",
    points: [
      "Brand ambassadors and promotional staff",
      "In-store merchandising and planogram execution",
      "Product sampling and tasting event teams",
      "Mystery shopping and retail auditing",
    ],
  },
];

export const SECTORS = [
  {
    title: "Grocery & Convenience",
    text: "Sales, account management and category talent for the brands on every shelf.",
    image: "/images/grocery-aisle.jpg",
  },
  {
    title: "Fresh & Chilled Food",
    text: "Commercial and operational people for food producers, bakeries and processors.",
    image: "/images/fresh-produce.jpg",
  },
  {
    title: "Warehouse & Logistics",
    text: "Supply chain, depot and operations leaders who keep product moving.",
    image: "/images/warehouse-logistics.jpg",
  },
  {
    title: "Wholesale & Distribution",
    text: "Route-to-market, wholesale and distribution specialists across NI and the UK.",
    image: "/images/warehouse-aisle.jpg",
  },
];

export const PROCESS = [
  { title: "CV & Career Review", text: "Full career trajectory assessment across FMCG roles, brands, and commercial results." },
  { title: "Personal Interview", text: "In-depth interview by our senior team, never a junior screener or automated system." },
  { title: "Competency Check", text: "FMCG-specific assessment: negotiation, category management, P&L, team leadership." },
  { title: "Reference Verified", text: "Thorough checks with previous employers at multiple levels for a complete picture." },
  { title: "Shortlist Calibrated", text: "Detailed profiles beyond the CV, including assessment notes, salary data, and cultural fit analysis." },
];

export const CANDIDATE_REASONS = [
  {
    title: "The Strongest FMCG Network",
    text: "Our reach across food, beverage, bakery, grocery, wholesale, and distribution is unmatched. When a role opens, we often know before it's advertised.",
  },
  {
    title: "A Name Known in the Industry",
    text: "We are the FMCG recruitment specialist. It's all we do. Our reputation opens doors that a cold application never could.",
  },
  {
    title: "Confidential Career Guidance",
    text: "Every conversation is confidential. Julie Bell personally manages senior relationships with candid, market-informed career advice.",
  },
  {
    title: "Access to Hidden Roles",
    text: "Many positions are filled before they reach a job board. By registering with us, you see opportunities the open market never does.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We have used Bell Recruitment as our recruitment partner for many years, and they have always provided us with excellent candidates for a range of commercial and operational roles.",
    name: "Jeff Tosh",
    role: "CEO",
    company: "Courtney and Nelson",
    logo: { src: "/images/cn.jpeg", w: 225, h: 224 },
  },
  {
    quote: "Bell Recruitment are my go-to company when it comes to recruitment for commercial roles in our business.",
    name: "John Hopkins",
    role: "Sales and Development Director",
    company: "Irwin's Bakery",
    logo: { src: "/images/irwins.png", w: 231, h: 151 },
  },
  {
    quote:
      "The Field Marketing Team have brought our in-store activities to life with energy, enthusiasm and just the right amount of shopper persuasion!",
    name: "Julia Galbraith",
    role: "Brand Development and Marketing Manager",
    company: "Henderson Group",
    logo: { src: "/images/henderson.png", w: 349, h: 140 },
  },
  {
    quote:
      "Bell Recruitment is our go-to recruitment partner because we know they will always deliver the resources we need, when we need them.",
    name: "Gerard McAdorey",
    role: "Managing Director",
    company: "GM Marketing",
    logo: { src: "/images/gm.png", w: 165, h: 136 },
  },
  {
    quote: "I have always used Bell Recruitment for all our commercial recruitment requirements.",
    name: "Paul Bell",
    role: "CEO",
    company: "Prep House",
    logo: { src: "/images/prep.png", w: 139, h: 151 },
  },
  {
    quote: "Bell Recruitment have been working with our company for over 20 years, they are a professional organisation.",
    name: "Alison McCluskey",
    role: "NI Field Sales Director",
    company: "Richmond Marketing",
    logo: { src: "/images/richmond.png", w: 434, h: 151 },
  },
];

export const JULIE_ROLES = [
  "Council Member, Northern Ireland Chamber of Commerce",
  "Committee Member, Institute of Directors",
  "Board Member, Council for Curriculum, Examinations & Assessment (CCEA)",
  "Committee Member, Grocers' Benevolent Fund",
];

export const BLOG_POSTS = [
  {
    title: "How to attract top FMCG talent in a competitive market",
    excerpt: "A few practical steps employers can take to stand out to candidates in the FMCG sector.",
    image: "/images/grocery-aisle.jpg",
  },
  {
    title: "Preparing your CV for a commercial role",
    excerpt: "Simple tips to help your CV get noticed by hiring managers in commercial and operational roles.",
    image: "/images/interview.jpg",
  },
  {
    title: "Why executive search is different to standard recruitment",
    excerpt: "What sets an executive search apart, and when it's the right approach for your business.",
    image: "/images/team-success.jpg",
  },
];
