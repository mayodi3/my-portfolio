export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: "Automation System",
    description:
      "A system that streamlines a workflow by fetching data from Airtable into Google Sheets, processing it via automation, and then sending the processed data back to Airtable.",
    image: "/automation-system.png",
    tags: ["Airtable", "Google Sheets", "Automation"],
  },
  {
    title: "Web Scraping Bot",
    description:
      "A bot developed with Selenium and Beautiful Soup to scrape dynamic websites.",
    image: "/web-scraping-bot.png",
    tags: ["Selenium", "BeautifulSoup", "Python"],
  },
  {
    title: "Writers Management Platform",
    description:
      "A fullstack platform for managing writers and editors for writing jobs.",
    image: "/writers-management-platform.png",
    tags: ["Fullstack", "Management", "Platform"],
  },
  {
    title: "USSD Application",
    description:
      "An evolving application that provides lightweight record-keeping services to streamline small business activities.",
    image: "/ussd-application.png",
    tags: ["USSD", "Record-Keeping", "Mobile"],
  },
];

const workingProjects = [
  {
    title: "Automation System",
    description:
      "A system that streamlines a workflow by fetching data from Airtable into Google Sheets, processing it via automation, and then sending the processed data back to Airtable.",
    image: "/automation-system.png",
    tags: ["Airtable", "Google Sheets", "Automation"],
    liveLink: "https://mayodi.help",
    githubLink: "https://github.com/mayodi3",
  },
  {
    title: "Web Scraping Bot",
    description:
      "A bot developed with Selenium and Beautiful Soup to scrape dynamic websites.",
    image: "/web-scraping-bot.png",
    tags: ["Selenium", "BeautifulSoup", "Python"],
    liveLink: "https://mayodi.help",
    githubLink: "https://github.com/mayodi3/webscraping",
  },
  {
    title: "Writers Management Platform",
    description:
      "A fullstack platform for managing writers and editors for writing jobs.",
    image: "/writers-management-platform.png",
    tags: ["Fullstack", "Management", "Platform"],
    liveLink: "https://mayodi.help",
    githubLink: "https://github.com/mayodi3",
  },
  {
    title: "USSD Application",
    description:
      "An evolving application that provides lightweight record-keeping services to streamline small business activities.",
    image: "/ussd-application.png",
    tags: ["USSD", "Record-Keeping", "Mobile"],
    liveLink: "https://mayodi.help",
    githubLink: "https://github.com/mayodi3",
  },
  {
    title: "Kaimosi Friends Comprehensive School Website",
    description:
      "A statically generated site hosted on Truehost (accessible via kfsc.sc.ke).",
    image: "/kfsc-website.png",
    tags: ["Static Site", "HTML", "CSS", "JavaScript"],
    liveLink: "https://kfcs.sc.ke",
    githubLink: "https://github.com/mayodi3",
  },
  {
    title: "2D Shooter Game",
    description:
      "A JavaScript-based 2D shooter game created using HTML, CSS, and JavaScript.",
    image: "/2d-shooter-game.png",
    tags: ["JavaScript", "HTML", "CSS", "Game Development"],
    liveLink: "https://mayodi.help",
    githubLink: "https://github.com/mayodi3/BSHOOT",
  },
  {
    title: "The Tranquil Hospitals Limited",
    description:
      "A statically generated site hosted on Truehost (accessible via thetranquilhospitalsltd.co.ke).",
    image: "/tranquil-website.png",
    tags: ["Static Site", "HTML", "CSS", "JavaScript"],
    liveLink: "https://thetranquilhospitalsltd.co.ke",
    githubLink: "https://github.com/mayodi3",
  },
];

export { projects, workingProjects };
