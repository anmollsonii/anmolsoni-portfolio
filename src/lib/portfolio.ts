export type PortfolioProject = {
  id: string;
  category: string;
  title: string;
  description: string;
  tools: string[];
  detail: string;
};

export const projects: PortfolioProject[] = [
  {
    id: "campus",
    category: "PHOTOGRAPHY & STORYTELLING",
    title: "JU Socialz Campus Documentation",
    description: "A concept for capturing the people, moments, and energy of campus life. Bringing candid photography and visual storytelling together to document a community.",
    tools: ["Photography", "Adobe Lightroom", "Video Editing"],
    detail: "The proposed collection brings together candid student portraits, event coverage, and short-form campus stories. The focus is on finding a consistent visual style, selecting meaningful moments, and turning them into a cohesive photo story. Project outcomes and an original gallery will be added when available.",
  },
  {
    id: "data",
    category: "DATA ANALYTICS & VISUALIZATION",
    title: "Python Data Analysis",
    description: "An exploratory project concept turning raw business data into clear, useful insights. Combining beginner Python skills with visualizations to uncover patterns and support better decisions.",
    tools: ["Python", "Excel", "Data Visualization"],
    detail: "This proposed learning project follows a business dataset from cleaning and exploration to simple charts and a concise summary. The aim is to practice asking useful questions, comparing trends, and communicating findings clearly. A dataset, analysis, and source code will be added when available.",
  },
];

export type ContactLink = {
  name: "Email" | "LinkedIn" | "GitHub";
  href: string;
  handle: string;
  detail: string;
  placeholder: boolean;
};

// Contact destinations. Every link in the contact section reads from this list.
// Set each `href` to the real address or profile URL, then change its
// `placeholder` flag to false; a true flag keeps the honest note above visible.
export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:theheadergaming@gmail.com",
    handle: "theheadergaming@gmail.com",
    detail: "Say hello",
    placeholder: false,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/anmol-soni-801935414",
    handle: "linkedin.com/in/anmol-soni-801935414",
    detail: "Let’s connect",
    placeholder: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/your-github-username",
    handle: "github.com/your-github-username",
    detail: "Follow the journey",
    placeholder: true,
  },
];
