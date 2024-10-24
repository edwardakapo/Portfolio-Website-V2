import type { Project } from "../components/ui/SearchProject";
const dummyData: Project[] = [
  {
    projectName: "Braids Villa Booking Website",
    projectDesc: "Developed a dynamic website for Braids Villa, significantly boosting operational efficiency and customer engagement. Through effective SEO strategies, user-centered design, and analytics, the solution reduced operational workload by 70% and increased business activity by 200%.",
    keyFeatures: [
      { title: "Admin Dashboard", description: "Simplifies service management and content updates for Braids Villa's owner." },
      { title: "Booking System", description: "Allows customers to schedule hairdressing services, improving business efficiency." },
      { title: "Strategic SEO", description: "Drives higher visibility and better business outcomes through strategic SEO." },
      { title: "Brand Identity", description: "Crafted cohesive visual language, strengthening market presence and customer recognition." },
      { title: "Invoicing & Analytics", description: "Streamlines invoicing and provides actionable insights into sales performance." },
      { title: "Appointment Management", description: "Features automated reminders and availability tracking to ensure smooth salon operations." },
    ],
    //demo image to be replaced
    coverImg: "defaultProjectImg.png",

    features: [
      "Admin Dashboard",
      "Booking System",
      "Brand Design",
      "Automated Invoicing",
      "Analytics",
      "Appointment Management",
      "SEO",
    ],
    dateCompleted: new Date("2024-07-30"),
    projectType: "Booking Website",
    projectScale: "Medium",
    techStack: ["React.js", "JavaScript", "TypeScript", "Astro.js", "Node.js", "html", "css", "figma", "Google Analytics", "AWS",],
    projectStatus: "Completed",
    links: {
      githubLink: "https://github.com/edwardakapo/BookingAndAdvetiseSaas",
      liveWebsite: "https://braidsvilla.com/",
      // projectReport: "https://notion.so/ecommerce-platform-report",
    },
  },
  {
    projectName: "Anorak Postnatal Care Service Website",
    projectDesc: "Executed a comprehensive website redesign for APC, to improve the UX and SEO. The optimization resulted in 80% performance improvement and 10x surge in traffic, and customer engagement through enhanced UX and SEO strategies.",
    keyFeatures: [
      { title: "Performance Optimization", description: "Migrated from React to Astro.js, achieving 80% faster load times and improved efficiency." },
      { title: "SEO Enhancement", description: "Implemented comprehensive SEO strategies leading to 150% increase in organic traffic." },
      { title: "UI/UX Redesign", description: "Completely overhauled interface design improving navigation and user engagement." },
      { title: "Content Strategy", description: "Optimized content structure and meta tags for better search engine visibility." },
      { title: "Cross-browser Support", description: "Ensured consistent functionality across all major web browsers." },
      { title: "Responsive Design", description: "Implemented fully responsive layout for optimal viewing across all devices." }
    ],
    coverImg: "defaultProjectImg.png",
    features: [
      "Performance Optimization",
      "SEO Enhancement",
      "UI/UX Redesign",
      "Content Strategy",
      "Cross-browser Support",
      "Responsive Design",
      "Analytics Integration"
    ],
    dateCompleted: new Date("2024-08-22"),
    projectType: "Service Website Redesign",
    projectScale: "Small",
    techStack: [
      "Astro.js",
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Google Analytics",
      "SEO Tools",
      "AWS",
    ],
    projectStatus: "Completed",
    links: {
      "githubLink": "https://github.com/edwardakapo/AHH-webpage",
      "liveWebsite": "https://anorakpostnatal.ca/"
    }
  },
  {
    projectName: "Q&A Forum with User Accounts",
    projectDesc: "Developed a full-stack Q&A platform for developers to post questions and share knowledge. Built using the MERN stack in 4 days, the platform features secure authentication, automated testing, and a points-based reward system for community engagement.",
    keyFeatures: [
      { "title": "OAuth Integration", "description": "Implemented secure Google OAuth and JWT authentication for seamless user access." },
      { "title": "Points System", "description": "Gamified knowledge sharing through a points-based reward system for answering questions." },
      { "title": "API Documentation", "description": "Created comprehensive documentation for login, post, and profile API routes." },
      { "title": "Automated Testing", "description": "Integrated Mocha.js and Chai for thorough API route testing and validation." },
      { "title": "Search Functionality", "description": "Built robust post search capabilities for easy content discovery." },
      { "title": "Secure Architecture", "description": "Implemented JWT, database encryption, and HTTP-only cookies for enhanced security." }
    ],
    coverImg: "defaultProjectImg.png",
    features: [
      "User Authentication",
      "Question Posting",
      "Answer Management",
      "Points System",
      "Search Functionality",
      "Profile Management",
      "OAuth Integration",
      "API Documentation"
    ],
    dateCompleted: new Date("2024-05-16"),
    projectType: "Full-Stack Web Application",
    projectScale: "Medium",
    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Material UI",
      "Mocha.js",
      "Chai",
      "JWT",
      "Google OAuth API",
      "Figma",
      "AWS",
    ],
    projectStatus: "Completed",
    links: {
      "githubLink": "https://github.com/edwardakapo/fullstack-saas-website-KE",
      "liveWebsite": "https://devhelpsaas.netlify.app/"
    }
  },
  {
    projectName: "Gentle Parting SaaS Platform",
    projectDesc: "Conceptualized and designed a comprehensive SaaS solution that modernizes funeral home operations through AI-driven insights and digital transformation. The platform aimed to help funeral homes adapt to changing consumer preferences by providing end-to-end service management, from pre-planning to post-service support.",
    keyFeatures: [
      {
        title: "Service Package Designer",
        description: "AI-powered tool for creating customized funeral packages based on cultural, religious, and budget preferences."
      },
      {
        title: "Digital Presence Management",
        description: "Website builder with integrated memorial pages, online obituaries, and family support resources."
      },
      {
        title: "Bereavement Support System",
        description: "Automated follow-up system for grief counseling and ongoing family support post-service."
      },
      {
        title: "Registry of Death Platform",
        description: "Integrated marketplace for funeral-related merchandise, donations, and support services."
      },
      {
        title: "Business Analytics Dashboard",
        description: "Real-time insights into consumer trends, service utilization, and revenue optimization."
      },
      {
        title: "Professional Network Hub",
        description: "Directory and matching system for funeral directors, insurance providers, and support staff."
      }
    ],
    coverImg: "defaultProjectImg.png",
    features: [
      "AI Service Customization",
      "Digital Presence Management",
      "Bereavement Support",
      "Merchandise Management",
      "Business Analytics",
      "Professional Networking",
      "Insurance Integration",
      "Resource Planning"
    ],
    dateCompleted: new Date("2024-03-11"),
    projectType: "SaaS Product Design",
    projectScale: "Large",
    techStack: [
      "React.js",
      "Node.js",
      "Python",
      "TensorFlow",
      "AWS",
      "MongoDB",
      "Express.js",
      "GPT-3 API",
      "Stripe API",
      "Mailchimp API"
    ],
    projectStatus: "Dropped",
    links: {
      landingPage: "https://gentleparting.com/"
    },
  },
  {
    projectName: "CES Device Simulator",
    projectDesc: "Led the development of a Cranial Electrical Stimulation (CES) device simulator in an agile team of 4. The simulator emulates embedded software for medical devices like Alpha-Stim, delivering microcurrent stimulation therapy. Implemented comprehensive testing and monitoring systems, achieving 100% test coverage across all critical use cases.",
    keyFeatures: [
        {
            title: "Real-time Monitoring",
            description: "Tracks and displays current intensity, battery levels, and electrode contact status"
        },
        {
            title: "Safety Controls",
            description: "Implements automatic shutdown for currents exceeding 700μA and low battery conditions"
        },
        {
            title: "Session Management",
            description: "Handles therapy session configuration, recording, and playback capabilities"
        },
        {
            title: "Power Management",
            description: "Features intelligent battery monitoring and auto-sleep functionality"
        },
        {
            title: "Treatment Customization",
            description: "Offers multiple frequency options, waveforms, and adjustable current intensity"
        },
        {
            title: "Data Persistence",
            description: "Stores and manages therapy session records with detailed analytics"
        }
    ],
    coverImg: "defaultProjectImg.png",
    features: [
        "Therapy Session Control",
        "Current Intensity Management",
        "Battery Monitoring",
        "Session Recording",
        "Auto Sleep Mode",
        "Safety Protocols",
        "Electrode Contact Detection"
    ],
    dateCompleted: new Date("2022-01-11"),
    projectType: "Medical Device Simulator",
    projectScale: "Large",
    techStack: [
        "C++",
        "Qt Framework",
        "Qt IDE",
        "UML",
        "GitHub",
        "Linux",
        "OOP",
        "Observer Pattern",
        "Agile"
    ],
    projectStatus: "Completed",
    "links": {
      "githubLink": "https://github.com/edwardakapo/AGILE-CES-simulator",
      "projectReport": "https://drive.google.com/file/d/1UuS8BpQJrEazDbD6nkG3pHYoMG2vqTEB/view?usp=drive_link"
    }
},
{
  projectName: "Bookstore Inventory System",
  projectDesc: "Engineered a comprehensive platform for a bookstore in a team of two, featuring advanced inventory management, automated replenishment systems, and detailed analytics. The solution streamlined book purchasing while providing robust administrative tools for bookstore management, complete with publisher royalty calculations and sales tracking.",
  keyFeatures: [
      {
          title: "Advanced Search System",
          description: "Multi-criteria search functionality allowing users to find books by name, author, ISBN, and genre"
      },
      {
          title: "Inventory Management",
          description: "Automated replenishment system with threshold-based reordering and stock level monitoring"
      },
      {
          title: "Financial Analytics",
          description: "Comprehensive reporting dashboard tracking sales, expenditures, and publisher royalties"
      },
      {
          title: "Order Processing",
          description: "End-to-end order management with real-time tracking and third-party shipping integration"
      },
      {
          title: "User Authentication",
          description: "Secure registration and authentication system with role-based access control"
      },
      {
          title: "Admin Dashboard",
          description: "Advanced tools for inventory control, publisher management, and sales analytics"
      }
  ],
  coverImg: "defaultProjectImg.png",
  features: [
      "Book Search & Filtering",
      "Shopping Cart",
      "User Authentication",
      "Order Tracking",
      "Inventory Management",
      "Publisher Royalties",
      "Sales Analytics",
      "Auto-replenishment",
      "Admin Controls",
      "Payment Processing"
  ],
  dateCompleted: new Date("2021-12-15"),
  projectType: "E-commerce Platform",
  projectScale: "Large",
  techStack: [
      "Python",
      "MySQL",
      "SQL",
      "GUI Development",
      "Database Design",
      "VSCode",
      "Git"
  ],
  projectStatus: "Completed",
  links: {
      githubLink: "https://github.com/edwardakapo/Bookstore-database-with-GUI",
      projectReport: "https://drive.google.com/file/d/1IUXgSbxSXLcpD12owVrYcwIMVdCPdUBW/view?usp=sharing"
  },
},
{
  projectName: "Optimal Blackjack AI",
  projectDesc: "Developed an artificial intelligence agent to play blackjack optimally, implementing both a Simple Reflex Agent and a Model-Based Agent. The project successfully demonstrated AI implementations performing better than average players, with the Model-Based AI achieving a 56.67% win rate compared to the human average of 25.67% across 100 rounds of testing.",
  keyFeatures: [
    {
      "title": "Simple Reflex Agent",
      "description": "Implements preset if-then rules based on visible hands of all players to determine optimal moves"
    },
    {
      "title": "Model-Based Agent",
      "description": "Uses state parameterization and probability calculations to make optimal decisions based on visible cards and opponent behavior"
    },
    {
      "title": "Networked Multiplayer",
      "description": "Supports 4 active players (2 networked humans and 2 AI implementations) competing against each other and the dealer"
    },
    {
      "title": "State Parameterization",
      "description": "Implements 182 different state configurations for optimal decision making"
    },
    {
      "title": "Probability Function",
      "description": "Advanced calculation system for scenarios outside the standard model parameters"
    }
  ],
  coverImg: "defaultProjectImg.png",
  features: [
    "Simple Reflex AI",
    "Model-Based AI",
    "Multiplayer Support",
    "Client-Server Architecture",
    "State-Based Decision Making",
    "Probability Calculations",
    "Performance Analytics"
  ],
  dateCompleted: new Date("2022-01-10"),
  projectType: "AI/Machine Learning",
  projectScale: "Medium",
  techStack: [
    "AI Algorithms",
    "Probability Theory",
    "Client-Server Architecture",
    "Network Programming"
  ],
  projectStatus: "Completed",
  links: {
      githubLink : "https://github.com/edwardakapo/Implementing-Simple-and-Model-based-Ai-in-a-blackjack-game/tree/main",
      projectReport : "https://drive.google.com/file/d/1WgRNUOpvirVUyWMJDbPkOKUOCcD8pJjw/view?usp=sharing",
    }
},
{
  projectName: "COVID-19 Economic Interactive Visualizer",
  projectDesc: "A comprehensive data visualization web application that analyzes and displays the effects of government COVID-19 policies on major economic sectors worldwide. The dashboard features interactive choropleth maps and bubble plots to visualize relationships between policy stringency and various economic indicators across different countries from 2015-2020.",
  keyFeatures: [
    {
      title: "Interactive Choropleth Maps",
      description : "Visualizes global economic indicators (GDP growth, unemployment rate, consumer price index) with year-by-year progression from 2015-2020"
    },
    {
      title: "Dynamic Bubble Plots",
      description : "Shows correlation between government policy stringency and economic metrics, with GDP growth represented by color and sector GDP share by bubble size"
    },
    {
      title: "Multi-Sector Analysis",
      description : "Covers five major economic sectors: Total Exports, Oil Exports, Manufacturing Value, Tourism Revenue, and Market Capitalization"
    },
    {
      title: "Time Series Analysis",
      description : "Tracks economic changes from 2015-2020, highlighting pre-COVID trends and pandemic impact"
    },
    {
      title: "Data Integration",
      description : "Integrates World Bank API data with custom datasets for comprehensive economic analysis"
    }
  ],
  coverImg: "defaultProjectImg.png",
  features: [
    "Interactive Maps",
    "Bubble Charts",
    "Time Series Visualization",
    "API Integration",
    "Economic Data Analysis",
    "Cross-Sector Comparison",
    "Policy Impact Assessment"
  ],
  dateCompleted: new Date ("2022-04-25"),
  projectType: "Data Visualization",
  projectScale: "Large",
  techStack: [
    "React.js",
    "JavaScript",
    "Google Charts API",
    "World Bank API",
    "HTML",
    "CSS",
    "React Google Charts",
    "Component-based Architecture"
  ],
  projectStatus: "Completed",
  links: {
    githubLink : "https://github.com/edwardakapo/Data-visualizer-with-React.js",
    projectReport : "https://drive.google.com/file/d/1Jv_hcrc4vqhPOwJRDm5sn6Y3Yt9wpstH/view?usp=sharing",
  }
},
  
];


export {
  dummyData
}