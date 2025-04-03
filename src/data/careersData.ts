
export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface LearningPath {
  title: string;
  description: string;
  resources: {
    name: string;
    url: string;
  }[];
}

export interface Career {
  id: string;
  title: string;
  description: string;
  matchScore?: number; // Added dynamically during matching
  requiredSkills: Skill[];
  recommendedSkills: Skill[];
  averageSalary: string;
  growthOutlook: 'high' | 'medium' | 'low';
  educationRequirements: string;
  industries: string[];
  learningPaths: LearningPath[];
}

const careersData: Career[] = [
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Design, build, and maintain software applications. Write code in various programming languages, test software, and collaborate with teams to create high-quality products.",
    requiredSkills: [
      { name: "Programming", level: "advanced" },
      { name: "Problem Solving", level: "advanced" },
      { name: "Debugging", level: "intermediate" }
    ],
    recommendedSkills: [
      { name: "Cloud Computing", level: "intermediate" },
      { name: "DevOps", level: "intermediate" },
      { name: "UI/UX Design", level: "beginner" }
    ],
    averageSalary: "$110,000",
    growthOutlook: "high",
    educationRequirements: "Bachelor's degree in Computer Science or related field. Some positions may accept bootcamp certifications or equivalent experience.",
    industries: ["Technology", "Finance", "Healthcare", "Education", "Entertainment"],
    learningPaths: [
      {
        title: "Web Development Track",
        description: "Focus on building web applications with HTML, CSS, JavaScript, and frameworks.",
        resources: [
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
          { name: "The Odin Project", url: "https://www.theodinproject.com/" }
        ]
      },
      {
        title: "Mobile Development Track",
        description: "Focus on building mobile applications for iOS and Android platforms.",
        resources: [
          { name: "React Native Documentation", url: "https://reactnative.dev/" },
          { name: "Flutter Documentation", url: "https://flutter.dev/" }
        ]
      }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions. Apply mathematics, statistics, and computer science to extract insights from data.",
    requiredSkills: [
      { name: "Statistics", level: "advanced" },
      { name: "Machine Learning", level: "intermediate" },
      { name: "Data Analysis", level: "advanced" }
    ],
    recommendedSkills: [
      { name: "Data Visualization", level: "intermediate" },
      { name: "Big Data", level: "intermediate" },
      { name: "Domain Expertise", level: "intermediate" }
    ],
    averageSalary: "$120,000",
    growthOutlook: "high",
    educationRequirements: "Master's or PhD in Statistics, Computer Science, or related field. Some positions may accept Bachelor's with significant experience.",
    industries: ["Technology", "Finance", "Healthcare", "Retail", "Manufacturing"],
    learningPaths: [
      {
        title: "Machine Learning Specialization",
        description: "Focus on building and deploying machine learning models.",
        resources: [
          { name: "Coursera Machine Learning", url: "https://www.coursera.org/specializations/machine-learning" },
          { name: "Fast.ai", url: "https://www.fast.ai/" }
        ]
      },
      {
        title: "Data Analysis Specialization",
        description: "Focus on extracting insights from data through statistical analysis.",
        resources: [
          { name: "DataCamp", url: "https://www.datacamp.com/" },
          { name: "Kaggle Courses", url: "https://www.kaggle.com/learn" }
        ]
      }
    ]
  },
  {
    id: "ux-designer",
    title: "UX Designer",
    description: "Create meaningful and relevant experiences for users. Research, prototype, and design digital products that are intuitive and enjoyable to use.",
    requiredSkills: [
      { name: "User Research", level: "intermediate" },
      { name: "UI Design", level: "intermediate" },
      { name: "Prototyping", level: "intermediate" }
    ],
    recommendedSkills: [
      { name: "Interaction Design", level: "intermediate" },
      { name: "Information Architecture", level: "intermediate" },
      { name: "Basic Coding", level: "beginner" }
    ],
    averageSalary: "$90,000",
    growthOutlook: "high",
    educationRequirements: "Bachelor's degree in Design, Human-Computer Interaction, or related field. Portfolio and experience often matter more than degree.",
    industries: ["Technology", "Design Agencies", "E-commerce", "Entertainment", "Healthcare"],
    learningPaths: [
      {
        title: "UX Research Track",
        description: "Focus on understanding user needs and behaviors through research.",
        resources: [
          { name: "NN Group", url: "https://www.nngroup.com/" },
          { name: "UX Research Field Guide", url: "https://www.userinterviews.com/ux-research-field-guide" }
        ]
      },
      {
        title: "UI Design Track",
        description: "Focus on creating visually appealing and intuitive interfaces.",
        resources: [
          { name: "Figma Tutorials", url: "https://www.figma.com/resources/learn-design/" },
          { name: "UI Design Bootcamp", url: "https://designlab.com/" }
        ]
      }
    ]
  },
  {
    id: "digital-marketer",
    title: "Digital Marketer",
    description: "Promote products and services through digital channels. Develop marketing strategies, create content, and analyze campaign performance.",
    requiredSkills: [
      { name: "Content Marketing", level: "intermediate" },
      { name: "Social Media", level: "intermediate" },
      { name: "Data Analysis", level: "intermediate" }
    ],
    recommendedSkills: [
      { name: "SEO", level: "intermediate" },
      { name: "Email Marketing", level: "intermediate" },
      { name: "Copywriting", level: "intermediate" }
    ],
    averageSalary: "$75,000",
    growthOutlook: "high",
    educationRequirements: "Bachelor's degree in Marketing, Communications, or related field. Certifications and experience are often valued.",
    industries: ["Technology", "E-commerce", "Media", "Non-profit", "Healthcare"],
    learningPaths: [
      {
        title: "Content Marketing Track",
        description: "Focus on creating and distributing valuable content to attract customers.",
        resources: [
          { name: "HubSpot Academy", url: "https://academy.hubspot.com/" },
          { name: "Content Marketing Institute", url: "https://contentmarketinginstitute.com/" }
        ]
      },
      {
        title: "Performance Marketing Track",
        description: "Focus on driving measurable results through paid advertising.",
        resources: [
          { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com/digitalgarage" },
          { name: "Facebook Blueprint", url: "https://www.facebookblueprint.com/" }
        ]
      }
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    description: "Protect computer systems and networks from information disclosure, theft, and damage. Monitor systems, identify vulnerabilities, and respond to security incidents.",
    requiredSkills: [
      { name: "Network Security", level: "advanced" },
      { name: "Security Protocols", level: "intermediate" },
      { name: "Risk Assessment", level: "intermediate" }
    ],
    recommendedSkills: [
      { name: "Ethical Hacking", level: "intermediate" },
      { name: "Security Compliance", level: "intermediate" },
      { name: "Programming", level: "beginner" }
    ],
    averageSalary: "$100,000",
    growthOutlook: "high",
    educationRequirements: "Bachelor's degree in Cybersecurity, Computer Science, or related field. Certifications like CompTIA Security+, CISSP are highly valued.",
    industries: ["Technology", "Finance", "Government", "Healthcare", "Defense"],
    learningPaths: [
      {
        title: "Security Operations Track",
        description: "Focus on monitoring and responding to security incidents.",
        resources: [
          { name: "Cybrary", url: "https://www.cybrary.it/" },
          { name: "SANS Cyber Aces", url: "https://www.cyberaces.org/" }
        ]
      },
      {
        title: "Penetration Testing Track",
        description: "Focus on identifying and exploiting vulnerabilities to improve security.",
        resources: [
          { name: "TryHackMe", url: "https://tryhackme.com/" },
          { name: "Hack The Box", url: "https://www.hackthebox.com/" }
        ]
      }
    ]
  }
];

export default careersData;
