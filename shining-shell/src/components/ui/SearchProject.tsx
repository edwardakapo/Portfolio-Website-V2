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

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Typewriter from 'typewriter-effect'

import { ScrollArea } from "@/components/ui/scroll-area";
import { dummyData } from "./dummydata";
import { sortProjects } from "@/lib/functions";
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
    const searchBarRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false);

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

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Start when 10% of the element is visible
      );
  
      if (searchBarRef.current) {
        observer.observe(searchBarRef.current);
      }
  
      return () => {
        if (searchBarRef.current) {
          observer.unobserve(searchBarRef.current);

        }
      };
    }, []);
  

    const openModal = (projectData : any) => {
        setSelectedProject(projectData)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setTimeout(() => {
          setSelectedProject(null)

        }, 100)
    }

    return (
        <div>
            <div 
            className="flex w-full justify-center text-sm mb-24 mt-12
               max-[700px]:px-11 max-[700px]:text-[16px] max-[700px]:mb-20">
              <div ref={searchBarRef}
                className="relative w-[450px] min-w-[210px] mr-5
                  max-[700px]:max-w-[350px]">
                <input
                  type="search"
                  value={searchResult}
                  spellCheck="true"
                  autoCorrect="on"
                  onChange={ (e) => setSearchResult(e.target.value)}
                  placeholder=""
                  className="w-full h-9 border border-black rounded-sm pl-9 pr-1 outline-none focus:ring-black focus:ring-1 text-ellipsis overflow-hidden
                   max-[700px]:h-12 "
                />
                {SearchIcon}
                <div className="absolute left-9 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none flex">
                  {!searchResult && isVisible && !isModalOpen &&(
                    <>
                      <span className="mr-1">Search </span>
                      <Typewriter
                        options={{
                          strings: [' by name...', ' by feature...', ' by tech stack...'],
                          autoStart: true,
                          loop: true,
                          delay: 100,
                          deleteSpeed: 100,
                          skipAddStyles: true,
                          pauseFor : 1500,
                        } as any}
                      />
                    </>
                  )}
                </div>
              </div>
              <Select onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger 
                  className="w-[100px] min-w-[100px] max-[700px]:h-12 max-[700px]:text-[16px]">
                  <SelectValue placeholder="Sort" />
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
          <ScrollArea 
            className="h-[705px] w-fit mx-auto
              max-[700px]:h-[660px]">{/* add a 3 projects to the scroll area at once */}
            <ul 
              className="max-w-[750px] grid grid-cols-3 gap-x-8 gap-y-2 mx-4
                max-[700px]:grid-cols-2 max-[700px]:gap-y-8">
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
                  )), sortBy)
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
          {/* {isModalOpen && selectedProject && (
            <ProjectModalWindow 
              isOpen = {isModalOpen}
              data = {selectedProject ? selectedProject : null}
              onClose={closeModal}
            />
          )} */}
        <Dialog open={isModalOpen} onOpenChange={() => {}}>
        <DialogTrigger></DialogTrigger>
        <DialogTitle></DialogTitle>
        <DialogContent onEscapeKeyDown={closeModal} aria-describedby={undefined}>
          <ProjectModalWindow 
                data = {selectedProject ? selectedProject : null}
                onClose={closeModal}
              />
        </DialogContent>
      </Dialog>

        </div>
    )
}