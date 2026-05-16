export interface Member {
  name: string;
  role: 'PI' | 'Postdoc' | 'PhD Student' | 'Masters Student' | 'Undergraduate' | 'Alumni';
  education: string;
  image: string;
  bio: string;
  office?: string;
  timeline?: {
    title: string;
    institution: string;
    year: string;
  }[];
  links?: {
    twitter?: string;
    linkedin?: string;
    scholar?: string;
    github?: string;
    researchgate?: string;
    website?: string;
    email?: string;
    cv?: string;
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
  description: string | string[];
  image: string;
  relatedPublications?: string;
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
  department: "Institute of Remote Sensing and GIS",
  school: "School of Earth and Space Sciences",
  address: "School of Earth and Space Sciences, Peking University",
  email: "rdang@pku.edu.cn",
  mission: "We use satellite observations and atmospheric models to understand the sources, sinks, and variability of atmospheric composition, how it shapes air quality and climate, and how it responds to a changing future.",
  image: "https://picsum.photos/seed/pku/1200/600",
};

export const members: Member[] = [
  {
    name: "Ruijun Dang 党瑞君",
    role: "PI",
    education: "Assistant Professor",
    image: "/profile.jpg",
    bio: "Ruijun Dang is an Assistant Professor at the School of Earth and Space Sciences, Peking University. Her research focuses on atmospheric composition, remote sensing, and climate modeling.",
    office: "102, Remote Sensing Building, Peking University",
    timeline: [
      {
        title: "Assistant Professor",
        institution: "Peking University",
        year: "2026 - Present"
      },
      {
        title: "Research Associate",
        institution: "Harvard University",
        year: "2024 - 2026"
      },
      {
        title: "Postdoctoral Researcher",
        institution: "Harvard University",
        year: "2021 - 2024"
      },
      {
        title: "Research Assistant",
        institution: "Institute of Atmospheric Physics, Chinese Academy of Sciences",
        year: "2020 - 2021"
      },
      {
        title: "Ph.D.",
        institution: "Institute of Atmospheric Physics, Chinese Academy of Sciences",
        year: "2020"
      },
      {
        title: "B.S., Atmospheric Sciences",
        institution: "Nanjing University",
        year: "2015"
      }
    ],
    links: { 
      scholar: "https://scholar.google.com/citations?user=_ulA8XYAAAAJ&hl=en", 
      researchgate: "https://www.researchgate.net",
      cv: "https://www.ruijundang.pro/static/pdf/RuijunDang_CV.pdf",
      email: "mailto:rdang@pku.edu.cn"
    }
  }
];

export const researchAreas: ResearchArea[] = [
  {
    title: "Monitoring Background NO₂: Sources and Sinks",
    description: [
      "Nitrogen dioxide (NO2) is a key precursor to both PM2.5 and ozone, and governs atmospheric oxidizing capacity. As anthropogenic NOx emissions continuously decline under Clean Air Actions, natural background sources — lightning, soils, and wildfires — now make up a growing fraction of total NOx. However, these background sources remain the least understood component of the NOx budget, and how they will respond to a changing climate remains highly uncertain.",
      "We aim to better understand background NO2, its sources and sinks, using satellite observations, in situ measurements, and state-of-the-art atmospheric chemistry models. We developed a new geostationary satellite product to monitor free tropospheric (FT) NO2 and used it to constrain lightning NOx emissions. This product provides the first-ever diurnal FT NO2 observations over North America, revealing that current model estimates of lightning NOx emissions are significantly too high."
    ],
    image: "/Picture1.gif",
    relatedPublications: "Dang et al., 2025, PNAS; Dang et al., 2023, ACP; Shah et al., 2023, ACP"
  },
  {
    title: "Inferring PM2.5 Nitrate Control Strategy from Satellites",
    description: [
      "PM2.5 is a major air pollutant, ranking among the top causes of premature death worldwide. While emission control policies have successfully reduced many PM2.5 components, particulate nitrate has proven unresponsive — owing to the nonlinear chemistry of its formation from multiple precursors (NOx, NH3, and VOCs). Nitrate now accounts for a growing share of PM2.5 mass, making it a critical target for future air quality improvement. Effective control requires knowing which precursor to reduce — but diagnosing this sensitivity has traditionally relied on in situ measurements or computationally expensive models.",
      "We developed a satellite-based indicator using observations of NH3 and NO2 columns to diagnose PM2.5 nitrate formation sensitivity regimes — providing a simple, globally applicable tool for air quality managers. Applying this approach to East Asia, Europe, and North America, we find that sensitivity regimes vary strongly by region. This tool has also proven effective in monitoring long-term changes in nitrate sensitivity, informing adjustments in emission reduction strategies."
    ],
    image: "/Picture2.png",
    relatedPublications: "Dang et al., 2023, GRL; Dang et al., 2024, ES&T; Oak et al., 2025, ACP"
  },
  {
    title: "Understanding Air Pollution Trends: Health and Climatic Impacts",
    description: [
      "PM2.5 and tropospheric ozone are not only harmful to human health but also perturb Earth's energy balance as short-lived climate forcers. Their concentrations are jointly shaped by anthropogenic emissions and meteorology-influenced processes. Quantifying the respective roles of these drivers is essential for assessing the effectiveness of emission controls, while evaluating their health and climatic impacts is critical for informing mitigation policy.",
      "Using satellite observations and ground-based networks, we monitor long-term trends in PM2.5 and ozone, and apply atmospheric chemistry models to interpret the underlying drivers. Our work highlights the important roles of meteorological variability in shaping pollution trends. We also quantify the climatic consequences of pollution changes — showing that the rapid decline of PM2.5 in China has led to a considerable regional warming effect, underscoring the need for coordinated control of air pollution and climate change."
    ],
    image: "/Picture3.png",
    relatedPublications: "Dang et al., 2021, STOTEN; Dang et al., 2019, GRL; Dang et al., 2019, ACP"
  }
];

export const publications: Publication[] = [
  {
    id: "pub1",
    title: "High-resolution geostationary satellite observations of free tropospheric NO2 over North America: implications for lightning emissions",
    authors: ["Dang, R.*", "Jacob, D. J.", "Wang, H.", "Nowlan, C. R.", "Gonzalez Abad, G.", "Chong, H.", "Liu, X.", "Shah, V.", "Yang, L. H.", "Oak, Y. J.", "Marais, E. A.", "Horner, R. P.", "Rollins, A. W.", "Crawford, J. H.", "Li, K.", "Liao, H."],
    venue: "Proceedings of the National Academy of Sciences",
    year: 2025,
    featured: true,
    pdf: "https://doi.org/10.1073/pnas.2510535122",
  },
  {
    id: "pub2",
    title: "A satellite-based indicator for diagnosing particulate nitrate sensitivity to precursor emissions: application to East Asia, Europe, and North America",
    authors: ["Dang, R.*", "Jacob, D. J.", "Zhai, S.", "Yang, L. H.", "Pendergrass D. C.", "Coheur, P.", "Clarisse, L.", "Van Damme, M.", "Choi, J.", "Park, J.", "Liu, Z.", "Xie, P.", "Liao, H."],
    venue: "Environmental Science & Technology",
    year: 2024,
    featured: true,
    pdf: "https://doi.org/10.1021/acs.est.4c08082"
  },
  {
    id: "pub3",
    title: "Diagnosing the Sensitivity of Particulate Nitrate to Precursor Emissions Using Satellite Observations of Ammonia and Nitrogen Dioxide",
    authors: ["Dang, R.*", "Jacob, D. J.", "Zhai, S.", "Coheur, P.", "Clarisse, L.", "Van Damme, M.", "Pendergrass, D. C.", "Choi, J.-s.", "Park, J.-s.", "Liu, Z.", "Liao, H."],
    venue: "Geophysical Research Letters",
    year: 2023,
    pdf: "https://doi.org/10.1029/2023GL105761"
  },
  {
    id: "pub4",
    title: "Background nitrogen dioxide (NO2) over the United States and its implications for satellite observations and trends: effects of nitrate photolysis, aircraft, and open fires",
    authors: ["Dang, R.*", "Jacob, D. J.", "Shah, V.", "Eastham, S. D.", "Fritz, T. M.", "Mickley, L. J.", "Liu, T.", "Wang, Y.", "Wang, J."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2023,
    pdf: "https://doi.org/10.5194/acp-23-6271-2023"
  },
  {
    id: "pub5",
    title: "Quantifying the anthropogenic and meteorological influences on summertime surface ozone in China over 2012-2017",
    authors: ["Dang, R.", "Liao, H.", "Fu, Y."],
    venue: "Science of the Total Environment",
    year: 2021,
    pdf: "https://doi.org/10.1016/j.scitotenv.2020.142394"
  },
  {
    id: "pub6",
    title: "Radiative forcing and health impact of aerosols and ozone in China as the consequence of clean air actions over 2012-2017",
    authors: ["Dang, R.", "Liao, H."],
    venue: "Geophysical Research Letters",
    year: 2019,
    pdf: "https://doi.org/10.1029/2019GL084605"
  },
  {
    id: "pub7",
    title: "Severe winter haze days in the Beijing-Tianjin-Hebei region from 1985-2017 and the roles of anthropogenic emissions and meteorology",
    authors: ["Dang, R.", "Liao, H."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2019,
    pdf: "https://doi.org/10.5194/acp-19-10801-2019"
  },
  {
    id: "pub8",
    title: "Correlations between PM2.5 and Ozone over China and Associated Underlying Reasons",
    authors: ["Zhu, J.", "Chen, L.", "Liao, H.", "Dang, R."],
    venue: "Atmosphere",
    year: 2019,
    pdf: "https://doi.org/10.3390/atmos10070352"
  },
  {
    id: "pub9",
    title: "Modeling of methyl hydroperoxide observations in urban and remote air over South Korea: methylperoxy radical chemistry and inference of atmospheric methanediol",
    authors: ["Yang, L. H.", "Jacob, D. J.", "Bates, K. H.", "Lin, H.", "Allen, H. M.", "Muller, J.-F.", "Brown, S. S.", "Dang, R.", "Colombi, N. K.", "Zhai, S.", "Yantosca, R. M.", "Brewer, J. F.", "Ng, N. L.", "Crounse, J. D.", "Wennberg, P. O.", "Li, K.", "Liao, H."],
    venue: "Geophysical Research Letters",
    year: 2025,
    pdf: "https://doi.org/10.1029/2025GL118267"
  },
  {
    id: "pub10",
    title: "Wintertime trends of fine particulate matter (PM2.5) in South Korea, 2012-2022: response of nitrate and organic components to decreasing NOx emissions",
    authors: ["Pendergrass, D. C.", "Jacob, D. J.", "Oak, Y. J.", "Dang, R.", "Yang, L. H.", "Beaudry, E.", "Zhai, S.", "Kim, H.", "Chi, J.", "Park, J.", "Kim, S.", "Li, K.", "Liao, H."],
    venue: "Geophysical Research Letters",
    year: 2025,
    pdf: "https://doi.org/10.1029/2025GL116091"
  },
  {
    id: "pub11",
    title: "Environmental burden and health inequity in China's road-based express delivery",
    authors: ["Li, B.", "Liao, H.", "Li, K.", "Lin, J.", "Gong, C.", "Liu, H.", "Li, Y.", "Chen, L.", "Yang, Y.", "Jin, X.", "Zhao, Y.", "Wang, T.", "Jin, J.", "Dang, R.", "Jacob, D. J."],
    venue: "Nature Cities",
    year: 2025,
    pdf: "https://doi.org/10.1038/s44284-025-00300-3"
  },
  {
    id: "pub12",
    title: "Air quality trends and regimes in South Korea inferred from 2015-2023 surface and satellite observations",
    authors: ["Oak, Y. J.", "Jacob, D. J.", "Pendergrass, D. C.", "Dang, R.", "Chong, H.", "Lee, S.", "Kuk, S.", "Kim, J."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2025,
    pdf: "https://doi.org/10.5194/acp-25-3233-2025"
  },
  {
    id: "pub13",
    title: "Assessment of hydrogen's climate impact is affected by model OH biases",
    authors: ["Yang, L. H.", "Jacob, D. J.", "Lin, H.", "Dang, R.", "Bates, K. H.", "East, J. D.", "Travis, K. R.", "Pendergrass, D. C.", "Murray, L. T."],
    venue: "Geophysical Research Letters",
    year: 2025,
    pdf: "https://doi.org/10.1029/2024GL112445"
  },
  {
    id: "pub14",
    title: "Unlocking nitrogen management potential via large-scale farming for air quality and substantial co-benefits",
    authors: ["Li, B.", "Liao, H.", "Li, K.", "Wang, Y.", "Zhang, L.", "Guo, Y.", "Liu, L.", "Jin, J.", "Yang, Y.", "Gong, C.", "Wang, T.", "Shen, W.", "Wang, P.", "Dang, R.", "Liao, K.", "Zhu, Q.", "Jacob, D. J."],
    venue: "National Science Review",
    year: 2024,
    pdf: "https://doi.org/10.1093/nsr/nwae324"
  },
  {
    id: "pub15",
    title: "Intercomparison of GEOS-Chem and CAM-chem tropospheric oxidant chemistry within the Community Earth System Model version 2 (CESM2)",
    authors: ["Lin, H.", "Emmons, L. K.", "Lundgren, E. W.", "Yang, L. H.", "Feng, X.", "Dang, R.", "Zhai, S.", "Tang, Y.", "Kelp, M. M.", "Colombi, N. K.", "Eastham, S. D.", "Fritz, T. M.", "Jacob, D. J."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2024,
    pdf: "https://doi.org/10.5194/acp-24-8607-2024"
  },
  {
    id: "pub16",
    title: "Interpreting GEMS geostationary satellite observations of the diurnal variation of nitrogen dioxide (NO2) over East Asia",
    authors: ["Yang, L. H.", "Jacob, D. J.", "Dang, R.", "Oak, Y. J.", "Lin, H.", "Kim, J.", "Zhai, S.", "Colombi, N. K.", "Pendergrass, D. C.", "Beaudry, E.", "Shah, V.", "Feng, X.", "Yantosca, R. M.", "Chong, H.", "Park, J.", "Lee, H.", "Lee, W. J.", "Kim, S.", "Kim, E.", "Travis, K. R.", "Crawford, J. H.", "Liao, H."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2024,
    pdf: "https://doi.org/10.5194/acp-24-7027-2024"
  },
  {
    id: "pub17",
    title: "Transpacific transport of Asian peroxyacetyl nitrate (PAN) observed from satellite: implications for ozone",
    authors: ["Zhai, S.", "Jacob, D. J.", "Franco, B.", "Clarisse, L.", "Coheur, P.", "Shah, V.", "Bates, K. H.", "Lin, H.", "Dang, R.", "Sulprizio, M. P.", "Huey, L. G.", "Moore, F. L.", "Jaffe, D. A.", "Liao, H."],
    venue: "Environmental Science & Technology",
    year: 2024,
    pdf: "https://doi.org/10.1021/acs.est.4c01980"
  },
  {
    id: "pub18",
    title: "Nitrogen oxides in the free troposphere: implications for tropospheric oxidants and the interpretation of satellite NO2 measurements",
    authors: ["Shah, V.", "Jacob, D. J.", "Dang, R.", "Lamsal, L. N.", "Strode, S. A.", "Steenrod, S. D.", "Boersma, K. F.", "Eastham, S. D.", "Fritz, T. M.", "Thompson, C.", "Peischl, J.", "Bourgeois, I.", "Pollack, I. B.", "Nault, B. A.", "Cohen, R. C.", "Campuzano-Jost, P.", "Jimenez, J. L.", "Andersen, S. T.", "Carpenter, L. J.", "Sherwen, T.", "Evans, M. J."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2023,
    pdf: "https://doi.org/10.5194/acp-23-1227-2023"
  },
  {
    id: "pub19",
    title: "Air pollution mitigation in North China through flexible heating policies",
    authors: ["Li, J.", "Hao, X.", "Liao, H.", "Dai, H.", "Li, N.", "Gu, Y.", "Dang, R.", "Li, B.", "Wei, Y."],
    venue: "Environmental Research Letter",
    year: 2023,
    pdf: "https://doi.org/10.1088/1748-9326/acb3e2"
  },
  {
    id: "pub20",
    title: "North China Plain as a hot spot of ozone pollution exacerbated by extreme high temperatures",
    authors: ["Wang, P.", "Yang, Y.", "Li, H.", "Chen, L.", "Dang, R.", "Xue, D.", "Li, B.", "Tang, J.", "Leung, L. R.", "Liao, H."],
    venue: "Atmospheric Chemistry and Physics",
    year: 2022,
    pdf: "https://doi.org/10.5194/acp-22-4705-2022"
  },
  {
    id: "pub21",
    title: "Long-term health impact of PM2.5 under whole-year COVID-19 lockdown in China",
    authors: ["Hao, X.", "Li, J.", "Wang, H.", "Liao, H.", "Yin, Z.", "Hu, J.", "Wei, Y.", "Dang, R."],
    venue: "Environmental Pollution",
    year: 2021,
    pdf: "https://doi.org/10.1016/j.envpol.2021.118118"
  },
  {
    id: "pub22",
    title: "Persistent ozone pollution episodes in North China exacerbated by regional transport",
    authors: ["Gong, C.", "Liao, H.", "Zhang, L.", "Yue, X.", "Dang, R.", "Yang, Y."],
    venue: "Environmental Pollution",
    year: 2020,
    pdf: "https://doi.org/10.1016/j.envpol.2020.115056"
  }
];

export const news: NewsItem[] = [
  {
    date: "13 May 2026",
    content: "I joined Peking University as an Assistant Professor at the Institute of Remote Sensing and GIS, School of Earth and Space Sciences.",
    type: "event"
  }
];

export const presentations: Presentation[] = [];
