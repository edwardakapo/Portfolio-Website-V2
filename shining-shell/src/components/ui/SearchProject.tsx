import React, {useState, useEffect, useRef} from "react";
import ProjectCard from "./ProjectCard";
import ProjectModalWindow from "./ProjectModalWindow";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ScrollArea } from "@/components/ui/scroll-area";

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
      

    const SearchIcon = <svg viewBox="0 0 24 24"  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-5 h-5  " fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.192"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
    type ProjectLinks = {
        githubLink : string;
        liveWebsite? : string;
        projectReport? : string;
    }
    export interface Project {
        projectName : string;
        coverImg : string;
        dateCompleted : Date;
        projectType : string;
        projectScale : "personal" | "school" | "Small" | "Medium" | "Large";
        techStack : string[];
        projectStatus : "Completed" | "On Hold" | "Live Service" | "Dropped";
        features : string[];
        links : ProjectLinks;
        projectDesc : string
    }
    
export default function SearchProject(){
    const [selectedProject , setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen , setIsModalOpen] = useState(false);
    const [searchResult , setSearchResult] = useState("");
    const [sortBy , setSortBy] = useState("New")

    useEffect(() => {
      if (isModalOpen) {
        // Disable scroll on body
        document.body.style.overflow = 'hidden';
      } else {
        // Re-enable scroll on body
        document.body.style.overflow = 'auto';
      }
  
      // Clean up to ensure scroll is re-enabled when the component unmounts
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isModalOpen]);

    const sortProjects = (data : Project[]) => {
        const scaleMap = new Map<string , number> ([
          ["personal" , 1],
          ["school" , 1],
          ["small" , 1],
          ["medium", 2],
          ["large" , 3]
        ]);
      
        if (sortBy === "New") {
          return [...data].sort((a, b) =>  b.dateCompleted.getTime() - a.dateCompleted.getTime()); // Most Recent
        }
        if (sortBy === "Old") {
          return [...data].sort((a, b) => a.dateCompleted.getTime() - b.dateCompleted.getTime()); // Oldest
        }
        if (sortBy === "Name A") {
          return [...data].sort((a, b) => a.projectName.localeCompare(b.projectName)); // Name A -> Z
        }
        if (sortBy === "Name Z") {
          return [...data].sort((a, b) => b.projectName.localeCompare(a.projectName)); // Name Z -> A
        }
        if (sortBy === "scale-ascending") {
          return [...data].sort((a, b) => scaleMap.get(a.projectScale.toLowerCase()) as number - (scaleMap.get(b.projectScale.toLowerCase()) as number)); // Small -> Large
        }
        if (sortBy === "scale-descending") {
          return [...data].sort((a, b) => scaleMap.get(b.projectScale.toLowerCase()) as number - (scaleMap.get(a.projectScale.toLowerCase()) as number)); // Large -> Small
        }
        return data; // Default (no sorting)
      };

    const openModal = (projectData : any) => {
        setSelectedProject(projectData)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProject(null)
    }

    return (
        <div>
            <div className="flex w-full justify-center text-sm mb-24 mt-12">
              <div className="relative w-1/2 mr-5">
                <input
                  type="search"
                  value={searchResult}
                  spellCheck="true"
                  autoCorrect="on"
                  onChange={ (e) => setSearchResult(e.target.value)}
                  placeholder="Search By Name or Tech Stack......."
                  className="w-full h-9 border border-black rounded-sm pl-9 pr-1 outline-none focus:ring-black focus:ring-1"
                />
                {SearchIcon}
              </div>
              <Select onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="w-[135px]">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent className="max-h-[400px]">
                  <SelectGroup>
                    <SelectLabel> Date </SelectLabel>
                    <SelectItem value="New">Most Recent</SelectItem>
                    <SelectItem value="Old">Oldest</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel> Project Name </SelectLabel>
                    <SelectItem value="Name A">Name A -&gt; Z</SelectItem>
                    <SelectItem value="Name Z">Name Z -&gt; A</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Project Scale</SelectLabel>
                    <SelectItem value="scale-ascending">Small -&gt; Large</SelectItem>
                    <SelectItem value="scale-descending">Large -&gt; Small</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          <ScrollArea className="h-[700px] w-fit mx-auto">
            <ul className="max-w-[750px] flex flex-wrap justify-between mx-3 p-1">
                {sortProjects(
                dummyData
                  .filter((project) => (
                    project.projectName
                          .toLowerCase()
                          .includes(searchResult.toLowerCase()) ||
                    project.techStack
                          .some(tech => tech.toLowerCase().includes(searchResult.toLowerCase())) ||
                    project.projectType
                          .toLowerCase()
                          .includes(searchResult.toLowerCase())
                  )))
                  .map((data, index) => (
                    <li key={data.projectName + index} className="w-fit mb-5 rounded-xl">
                        <button
                            onClick={ () => openModal(data)}
                            className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100 rounded-xl"  
                            aria-label={`Open details for ${data.projectName}`}
                        >
                            <ProjectCard 
                              projectName={data.projectName}
                              coverImg={data.coverImg}
                            />
                        </button>
                    </li>
                ))}
            </ul>
          </ScrollArea>
          {isModalOpen && selectedProject && (
            <ProjectModalWindow 
              isOpen = {isModalOpen}
              data = {selectedProject ? selectedProject : null}
              onClose={closeModal}
            />
          )}

        </div>
    )
}