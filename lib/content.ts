// Data shared across several pages: contact details, navigation, client logos and
// testimonials. Copy that belongs to a single page lives in that page's page.tsx,
// written from the client's "Website Content" document.

export const CONTACT = {
  phone: "+44 28 9031 1211",
  phoneHref: "tel:+442890311211",
  email: "julie@bell-recruitment.net",
  address: "24 Mount Charles, Belfast BT7 1NZ, United Kingdom",
  linkedin: "https://www.linkedin.com/company/bell-recruitment-ni/",
  facebook: "https://www.facebook.com/bellrecruits",
};

// URLs from the content document. /jobs/ and /jobs/sales-roles-northern-ireland/ are
// planned pages that are not written yet; next.config.ts redirects them to the current
// jobs board until they exist.
export const URLS = {
  home: "/",
  services: "/services/",
  aboutUs: "/about-us/",
  testimonials: "/testimonials/",
  hire: "/employers/how-we-hire/",
  candidates: "/candidates/how-it-works/",
  faqs: "/faqs/",
  blogs: "/blogs/",
  jobs: "/jobs/",
  salesRoles: "/jobs/sales-roles-northern-ireland/",
  contact: "/contact-us/",
  cvUpload: "/cv-upload/",
};

export const NAV_LINKS = [
  { href: URLS.aboutUs, label: "About Us" },
  { href: URLS.services, label: "Services" },
  { href: URLS.hire, label: "Employers" },
  { href: URLS.candidates, label: "Candidates" },
  { href: URLS.testimonials, label: "Testimonials" },
  { href: URLS.jobs, label: "Jobs" },
  { href: URLS.blogs, label: "Blogs" },
  { href: URLS.contact, label: "Contact" },
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

// Testimonial quotes must stay word for word (client instruction). Pages pick
// testimonials by id, in the order the content document lists them.
export const TESTIMONIALS = {
  irwins: {
    quote: "Bell Recruitment are my go-to company when it comes to recruitment for commercial roles in our business.",
    name: "John Hopkins",
    role: "Sales and Development Director",
    company: "Irwin’s Bakery",
    logo: { src: "/images/irwins.png", w: 231, h: 151 },
  },
  richmond: {
    quote: "Bell Recruitment have been working with our company for over 20 years, they are a professional organisation.",
    name: "Alison McCluskey",
    role: "NI Field Sales Director",
    company: "Richmond Marketing",
    logo: { src: "/images/richmond.png", w: 434, h: 151 },
  },
  courtneyNelson: {
    quote:
      "We have used Bell Recruitment as our recruitment partner for many years, and they have always provided us with excellent candidates for a range of commercial and operational roles.",
    name: "Jeff Tosh",
    role: "CEO",
    company: "Courtney and Nelson",
    logo: { src: "/images/cn.jpeg", w: 225, h: 224 },
  },
  gmMarketing: {
    quote:
      "Bell Recruitment is our go-to recruitment partner because we know they will always deliver the resources we need, when we need them.",
    name: "Gerard McAdorey",
    role: "Managing Director",
    company: "GM Marketing",
    logo: { src: "/images/gm.png", w: 165, h: 136 },
  },
  prepHouse: {
    quote: "I have always used Bell Recruitment for all our commercial recruitment requirements.",
    name: "Paul Bell",
    role: "CEO",
    company: "Prep House",
    logo: { src: "/images/prep.png", w: 139, h: 151 },
  },
  henderson: {
    quote:
      "The Field Marketing Team have brought our in-store activities to life with energy, enthusiasm and just the right amount of shopper persuasion!",
    name: "Julia Galbraith",
    role: "Brand Development and Marketing Manager",
    company: "Henderson Group",
    logo: { src: "/images/partner-henderson.png", w: 249, h: 100 },
  },
};
export type TestimonialId = keyof typeof TESTIMONIALS;

export const JULIE_ROLES = [
  "Council Member of the Northern Ireland Chamber of Commerce",
  "Committee Member of the Institute of Directors",
  "Board Member of the Council for Curriculum, Examinations & Assessment",
  "Committee Member of the Grocers’ Benevolent Fund",
];

// Used on the CV upload page (not yet rewritten in the content document).
export const CANDIDATE_REASONS = [
  {
    title: "The Strongest FMCG Network",
    text: "Our reach across food, beverage, bakery, grocery, wholesale, and distribution is unmatched. When a role opens, we often know before it's advertised.",
  },
  {
    title: "A Name Known in the Industry",
    text: "We are the FMCG recruitment specialist, and employers know us in the industry.",
  },
  {
    title: "Confidential Career Guidance",
    text: "Every conversation is confidential. We give candid, market-informed career advice.",
  },
  {
    title: "Access to Hidden Roles",
    text: "Many positions are filled before they reach a job board. By registering with us, you see opportunities the open market never does.",
  },
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
