import  type {Project} from "./SearchProject";
const dummyData : Project[] = [
    {
      projectName: "E-commerce Platform Redesign",
      dateCompleted: new Date("2023-05-15"),
      projectType: "Web Application",
      projectScale: "Large",
      techStack: ["React", "Node.js", "GraphQL", "MongoDB", "AWS","React", "Node.js", "GraphQL", "MongoDB", "AWS"],
      projectStatus: "Live Service",
      features: ["Framework Migration", "Responsive Design", "CMS", "SEO"],
      links: {
        githubLink: "https://github.com/user/ecommerce-platform",
        liveWebsite: "https://www.ecommerce-example.com",
        projectReport: "https://notion.so/ecommerce-platform-report",
      },
      coverImg: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "A complete redesign and re-engineering of an e-commerce platform serving over 10,000 daily users. This project involved migrating from an old PHP-based framework to a modern React + Node.js stack, implementing responsive design, CMS integration, and advanced SEO strategies.",
    },
    {
      projectName: "Business Analytics Dashboard",
      dateCompleted: new Date( "2024-03-20"),
      projectType: "Dashboard",
      projectScale: "Medium",
      techStack: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      projectStatus: "Completed",
      features: ["Responsive Design", "Microservice Architecture", "CRM"],
      links: {
        githubLink: "https://github.com/user/business-analytics-dashboard",
        liveWebsite: "https://www.business-dashboard.com",
        projectReport: "https://notion.so/business-dashboard-report",
      },
      coverImg: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "Developed a real-time business analytics dashboard with custom reporting and CRM integration. The dashboard uses a microservice architecture, ensuring scalability and maintainability, and is designed to be fully responsive for desktop and mobile.",
    },
    {
      projectName: "Portfolio Website Migration",
      dateCompleted: new Date("2023-09-12"),
      projectType: "Business Website",
      projectScale: "Small",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      projectStatus: "Live Service",
      features: ["Framework Migration", "Responsive Design", "SEO"],
      links: {
        githubLink: "https://github.com/user/portfolio-website",
        liveWebsite: "https://www.portfolio-example.com",
        projectReport: "https://notion.so/portfolio-website-report",
      },
      coverImg: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "A personal portfolio website migration from Gatsby.js to Next.js to optimize loading times and enhance SEO. The site features responsive design and utilizes server-side rendering for improved performance and search engine visibility.",
    },
    {
      projectName: "Real Estate CMS Platform",
      dateCompleted: new Date("2024-02-01"),
      projectType: "Web Application",
      projectScale: "Large",
      techStack: ["Angular", "Node.js", "Firebase"],
      projectStatus: "Completed",
      features: ["CMS", "CRM", "SEO", "Microservice Architecture"],
      links: {
        githubLink: "https://github.com/user/real-estate-cms-platform",
        liveWebsite: "https://www.realestate-cms.com",
        projectReport: "https://notion.so/real-estate-cms-platform-report",
      },
      coverImg: "https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "Built a robust CMS platform for a real estate company, allowing agents to manage listings, customer data, and appointments. The project required integration with multiple third-party services, including Firebase for real-time data and Angular for the front-end.",
    },
    {
      projectName: "Internal Team Collaboration Tool",
      dateCompleted: new Date("2023-12-10"),
      projectType: "Dashboard",
      projectScale: "Medium",
      techStack: ["React", "Node.js", "Socket.io"],
      projectStatus: "On Hold",
      features: ["Responsive Design", "CRM", "SEO"],
      links: {
        githubLink: "https://github.com/user/team-collaboration-tool",
        liveWebsite: "https://www.collaboration-tool.com",
        projectReport: "https://notion.so/team-collaboration-tool-report",
      },
      coverImg: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "An internal collaboration dashboard that supports real-time communication and task management for remote teams. The tool integrates with CRM systems and allows for customized reporting. The project is currently on hold pending client feedback.",
    },
    {
      projectName: "Abandoned E-commerce Platform",
      dateCompleted: new Date( "2022-11-05"),
      projectType: "Web Application",
      projectScale: "Large",
      techStack: ["PHP", "Laravel", "MySQL"],
      projectStatus: "Dropped",
      features: ["Framework Migration", "Responsive Design"],
      links: {
        githubLink: "https://github.com/user/abandoned-ecommerce-platform",
        projectReport: "https://notion.so/abandoned-ecommerce-report",
      },
      coverImg: "https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
      projectDesc: "A large-scale e-commerce platform that was dropped before launch due to changes in business direction. The project involved migrating from a legacy framework to Laravel, with focus on building a responsive UI. Although the project was dropped, it provided valuable insights into scalability and team collaboration.",
    },
    {
      projectName: "E-commerce Platform Redesign",
      dateCompleted: new Date("2023-05-15"),
      projectType: "Web Application",
      projectScale: "Large",
      techStack: ["React", "Node.js", "GraphQL", "MongoDB", "AWS"],
      projectStatus: "Live Service",
      features: ["Framework Migration", "Responsive Design", "CMS", "SEO"],
      links: {
        githubLink: "https://github.com/user/ecommerce-platform",
        liveWebsite: "https://www.ecommerce-example.com",
        projectReport: "https://notion.so/ecommerce-platform-report",
      },
      coverImg: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "A complete redesign and re-engineering of an e-commerce platform serving over 10,000 daily users. This project involved migrating from an old PHP-based framework to a modern React + Node.js stack, implementing responsive design, CMS integration, and advanced SEO strategies.",
    },
    {
      projectName: "Business Analytics Dashboard",
      dateCompleted: new Date( "2024-03-20"),
      projectType: "Dashboard",
      projectScale: "Medium",
      techStack: ["Vue.js", "Django", "PostgreSQL", "Docker"],
      projectStatus: "Completed",
      features: ["Responsive Design", "Microservice Architecture", "CRM"],
      links: {
        githubLink: "https://github.com/user/business-analytics-dashboard",
        liveWebsite: "https://www.business-dashboard.com",
        projectReport: "https://notion.so/business-dashboard-report",
      },
      coverImg: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "Developed a real-time business analytics dashboard with custom reporting and CRM integration. The dashboard uses a microservice architecture, ensuring scalability and maintainability, and is designed to be fully responsive for desktop and mobile.",
    },
    {
      projectName: "Portfolio Website Migration",
      dateCompleted: new Date("2023-09-12"),
      projectType: "Business Website",
      projectScale: "Small",
      techStack: ["Next.js", "Tailwind CSS", "Vercel"],
      projectStatus: "Live Service",
      features: ["Framework Migration", "Responsive Design", "SEO"],
      links: {
        githubLink: "https://github.com/user/portfolio-website",
        liveWebsite: "https://www.portfolio-example.com",
        projectReport: "https://notion.so/portfolio-website-report",
      },
      coverImg: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "A personal portfolio website migration from Gatsby.js to Next.js to optimize loading times and enhance SEO. The site features responsive design and utilizes server-side rendering for improved performance and search engine visibility.",
    },
    {
      projectName: "Internal Team Collaboration Tool",
      dateCompleted: new Date("2023-12-10"),
      projectType: "Dashboard",
      projectScale: "Medium",
      techStack: ["React", "Node.js", "Socket.io"],
      projectStatus: "On Hold",
      features: ["Responsive Design", "CRM", "SEO"],
      links: {
        githubLink: "https://github.com/user/team-collaboration-tool",
        liveWebsite: "https://www.collaboration-tool.com",
        projectReport: "https://notion.so/team-collaboration-tool-report",
      },
      coverImg: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "An internal collaboration dashboard that supports real-time communication and task management for remote teams. The tool integrates with CRM systems and allows for customized reporting. The project is currently on hold pending client feedback.",
    },
    {
      projectName: "Abandoned E-commerce Platform",
      dateCompleted: new Date( "2022-11-05"),
      projectType: "Web Application",
      projectScale: "Large",
      techStack: ["PHP", "Laravel", "MySQL"],
      projectStatus: "Dropped",
      features: ["Framework Migration", "Responsive Design"],
      links: {
        githubLink: "https://github.com/user/abandoned-ecommerce-platform",
        projectReport: "https://notion.so/abandoned-ecommerce-report",
      },
      coverImg: "https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D",
      projectDesc: "A large-scale e-commerce platform that was dropped before launch due to changes in business direction. The project involved migrating from a legacy framework to Laravel, with focus on building a responsive UI. Although the project was dropped, it provided valuable insights into scalability and team collaboration.",
    },
    {
      projectName: "E-commerce Platform Redesign",
      dateCompleted: new Date("2023-05-15"),
      projectType: "Web Application",
      projectScale: "Large",
      techStack: ["React", "Node.js", "GraphQL", "MongoDB", "AWS"],
      projectStatus: "Live Service",
      features: ["Framework Migration", "Responsive Design", "CMS", "SEO"],
      links: {
        githubLink: "https://github.com/user/ecommerce-platform",
        liveWebsite: "https://www.ecommerce-example.com",
        projectReport: "https://notion.so/ecommerce-platform-report",
      },
      coverImg: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      projectDesc: "A complete redesign and re-engineering of an e-commerce platform serving over 10,000 daily users. This project involved migrating from an old PHP-based framework to a modern React + Node.js stack, implementing responsive design, CMS integration, and advanced SEO strategies.",
    },
  ];


export {
  dummyData
}