import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Muhammad Zaki Zain Fanuruddin Putra — Data Scientist",
  author: "Muhammad Zaki Zain Fanuruddin Putra",
  description:
    "Junior Data Scientist based in Surabaya, ID. I specialize in Data Engineer, and Data Analyst.",
  lang: "en",
  siteLogo: "/zakicrops.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/muhammadzakizainfp/" },
    { text: "Github", href: "https://github.com/zakizainn/" },
  ],
  socialImage: "",
  canonicalURL: "https://mzakizainfp.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Muhammad Zaki Zain Fanuruddin Putra",
    specialty: "Data Scientist",
    summary:
      "I am a data enthusiast who found excitement in understanding how data shapes decisions. This passion eventually led me into the world of data science, where I build models, analyze behaviors, and translate data into insights that create real impact.",
    email: "zakizainn18@gmail.com",
  },
  experience: [
    {
      projects: "FAZtream",
      position: "Data Engineer",
      startDate: "Feb 2025",
      endDate: "June 2025",
      summary: [
        "Built the projects foundational movie dataset by scraping multiple web sources and enriching missing information through the TMDB API, ensuring complete and reliable data for model training and user consumption.",
        "Processed, cleaned, and structured large volumes of movie metadata, transforming unorganized raw data into an analysis-ready dataset that strengthened the accuracy and relevance of the recommendation system.",
        "Designed the ERD and deployed the database through FastAPI, enabling efficient data delivery, seamless backend integration, and a scalable infrastructure for future feature expansion.",
      ],
    },
    {
      projects: "Pantau.In",
      position: "Data Analyst",
      startDate: "Aug 2025",
      endDate: "Nov 2025",
      summary: [
        "I cleaned, validated, and labeled datasets to correct inconsistencies, ensuring the data was accurate, reliable, and ready for analysis.",
        "I performed clustering and comparative data analysis to identify patterns and generate actionable insights that supported decision-making throughout the project.",
        "I handled data migration, transformation, visualization, and reporting, while consistently maintaining strong data quality assurance to deliver clear and meaningful analytical outputs.",
      ],
    },
  ],
  projects: [
    {
      name: "FAZtream",
      summary: "FAZtream helps users quickly and easily discover movies that match their interests and preferences.",
      linkPreview: "/",
      linkSource: "https://github.com/zakizainn/FAZtream",
      image: "/FAZtreams.png",
    },
    {
      name: "Pantau.In",
      summary: "Pantau.In is an innovative dashboard platform that helps village and sub-district governments monitor, analyze, and accelerate the achievement of SDGs indicators effectively.",
      linkPreview: "https://pantauinsdgswates.vercel.app",
      linkSource: "https://github.com/zakizainn/Pantau.in_SDGs_Analytics_Dashboard",
      image: "/pantauin30.png",
    },
  ],
  about: {
    description: `
      I am a data enthusiast who developed a deep interest in understanding how information drives decision-making. This interest led me to pursue data science, where I now focus on analytics, machine learning, and visualization. I enjoy exploring data, identifying meaningful patterns, and building solutions that make a real impact. Outside of technical work, I value learning, collaboration, and sharing knowledge with others.
    `,
    image: "/zaki-cut.jpeg",
  },
};

// #5755ff
