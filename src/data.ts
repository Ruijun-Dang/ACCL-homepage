export interface Member {
  name: string;
  role: 'PI' | 'Postdoc' | 'PhD Student' | 'Masters Student' | 'Undergraduate' | 'Alumni';
  education: string;
  image: string;
  bio: string;
  links?: {
    twitter?: string;
    linkedin?: string;
    scholar?: string;
    github?: string;
    researchgate?: string;
    website?: string;
    email?: string;
  };
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  pdf?: string;
  code?: string;
  featured?: boolean;
}

export interface ResearchArea {
  title: string;
  description: string;
  image: string;
}

export interface NewsItem {
  date: string;
  content: string;
  type: 'award' | 'publication' | 'presentation' | 'event';
}

export interface Presentation {
  title: string;
  event: string;
  date: string;
  location: string;
  type: 'Talk' | 'Poster' | 'Keynote';
}

export const groupData = {
  name: "Atmospheric Composition & Climate Lab",
  shortName: "ACCL",
  affiliation: "@ PKU",
  piName: "Ruijun Dang",
  university: "Peking University",
  department: "Institute of Remote Sensing and Geographic Information System",
  school: "School of Earth and Space Sciences",
  address: "School of Earth and Space Sciences, Peking University",
  email: "rjdang@g.harvard.edu",
  mission: "We use satellite observations and atmospheric models to understand the sources, sinks, and variability of atmospheric composition, how it shapes air quality and climate, and how it responds to a changing future.",
  image: "https://picsum.photos/seed/pku/1200/600",
};

export const members: Member[] = [
  {
    name: "Ruijun Dang",
    role: "PI",
    education: "Assistant Professor, Peking University",
    image: "https://picsum.photos/seed/ruijundang/400/400",
    bio: "Ruijun Dang is an Assistant Professor at the School of Earth and Space Sciences, Peking University. His research focuses on atmospheric composition, remote sensing, and climate modeling.",
    links: { 
      scholar: "https://scholar.google.com", 
      researchgate: "https://www.researchgate.net",
      website: "https://ruijundang.github.io",
      email: "mailto:rjdang@g.harvard.edu"
    }
  }
];

export const researchAreas: ResearchArea[] = [
  {
    title: "Aerosol Remote Sensing",
    description: "Developing robust inversion algorithms for retrieving multi-angle and polarimetric satellite observations to characterize aerosol optical and physical properties.",
    image: "https://picsum.photos/seed/aerosol/800/500"
  },
  {
    title: "Global Climate Modeling",
    description: "Integrating remote sensing datasets into earth system models to improve the representation of aerosol-climate interactions and radiation budget estimation.",
    image: "https://picsum.photos/seed/model/800/500"
  },
  {
    title: "Greenhouse Gas Monitoring",
    description: "Combining satellite observations with inverse modeling to map global and regional flux of CO2 and methane.",
    image: "https://picsum.photos/seed/ghg/800/500"
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "Advances in Atmospheric Remote Sensing: A Comprehensive Review",
    authors: ["Ruijun Dang", "Collaborator A", "Collaborator B"],
    venue: "Remote Sensing of Environment (RSE)",
    year: 2024,
    featured: true,
    pdf: "#",
  },
  {
    id: "pub2",
    title: "Global Aerosol Radiative Forcing Constraints",
    authors: ["Ruijun Dang", "Partner C"],
    venue: "Nature Geoscience",
    year: 2023,
    featured: true,
    pdf: "#"
  },
  {
    id: "pub3",
    title: "Multi-sensor Data Fusion for Air Quality Monitoring",
    authors: ["Collaborator D", "Ruijun Dang"],
    venue: "Atmospheric Chemistry and Physics (ACP)",
    year: 2023,
    pdf: "#"
  }
];

export const news: NewsItem[] = [
  {
    date: "12 May 2026",
    content: "I joined Peking University as an Assistant Professor at the Institute of Remote Sensing and GIS, School of Earth and Space Sciences.",
    type: "event"
  }
];

export const presentations: Presentation[] = [
  {
    title: "Quantifying Aerosol Forcing via Multi-angle Remote Sensing",
    event: "AGU Fall Meeting 2023",
    date: "Dec 2023",
    location: "San Francisco, USA",
    type: "Talk"
  },
  {
    title: "Atmospheric Modeling Challenges",
    event: "Climate Systems Summit",
    date: "Oct 2023",
    location: "Online",
    type: "Keynote"
  }
];
