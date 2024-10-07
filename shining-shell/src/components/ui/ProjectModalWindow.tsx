import React , { useState , useEffect} from "react";
import type { Project } from "./SearchProject";
import {TechCarousel} from "./EmblaCarousels";
import '@/styles/techCarousel.css'
import { ScrollArea } from "./scroll-area";

type ProjectModalWindowProps  = {
    data : Project | null;
    onClose : () => void;
}

const ExitIcon = <svg viewBox="0 0 24.00 24.00" fill="none" width="18" xmlns="http://www.w3.org/2000/svg" stroke="inherit" strokeWidth="2.4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"></path> </g></svg>
const DiagonalArrow = <svg viewBox="0 0 24 24" fill="none" width="18" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
const quickMap = new Map<string, string>([
    ['githubLink', "github link"],
    ['liveWebsite', "live website"],
    ['projectReport', "project report"]
]);


export default function ProjectModalWindow( { onClose, data} : ProjectModalWindowProps ){


    return(
            <div>
                <div className="text-xs font-bold text-black bg-gray-100 p-2 rounded tracking-wider absolute -top-10 -translate-y-1/2 left-1/2 -translate-x-1/2 animate-delayedFadeOut ">
                    Hit <span className="text-text-highlight border border-text-highlight p-1">ESC</span> To Close
                </div>
                <div className="w-[936px]
                    max-[1000px]:min-w-[350px] max-[1000px]:max-w-[600px]">
                    {data ? (
                        <>
                            <div className="flex justify-between pb-10" >
                                <h1 className="font-bold tracking-wider text-xl">
                                    {data.projectName.toUpperCase()}
                                </h1>
                                <button onClick={ onClose} autoFocus  className="flex flex-row w-fit items-center stroke-black hover:stroke-gray-500"> 
                                {ExitIcon}
                                </button> 
                            </div>
                            <div className="flex flex-wrap gap-x-10 pb-10 ">
                                <div className=" flex flex-col gap-y-3">
                                    <img  className="w-[300px] h-[250px] object-center outline outline-zinc-400 rounded-xl" src={data.coverImg}/>
                                    <ul>
                                        {Object.entries(data.links)
                                            .map(([key ,value]) => (
                                                <li key={key} className="pt-2">
                                                    <a href={value} rel="noopener" target="_blank" className="flex w-fit justify-between border border-black px-4 py-1 rounded-full stroke-black hover:border-main-highlight  hover:stroke-main-highlight focus:outline-none focus:ring-1 focus:ring-main-highlight focus:stroke-main-highlight focus:border-main-highlight ">
                                                        <p className="pr-2 tracking-wider">
                                                        {quickMap.get(key) ? quickMap.get(key)?.toUpperCase() : key.toUpperCase()}
                                                        </p> 
                                                        {DiagonalArrow}
                                                    </a>
                                                </li>
                                        ))
                                        }
                                    </ul>
                                </div>
                                <p className="w-[550px] h-[340px] p-3 outline outline-zinc-400 rounded-xl" >
                                    {data.projectDesc}
                                </p>
                            </div>
                            <div>
                                <h2 className="tracking-wider">
                                    TECHNOLOGIES & TOOLS
                                </h2>
                                <hr className="border border-dashed border-black mx-1 mt-2 mb-6"/>
                                <TechCarousel data={data.techStack}/>

                            </div>
                        </>
                    ) : (
                        <div>
                            {"Error displaying project data : ("}
                        </div>
                    )}
                </div>
            </div>
    )
}