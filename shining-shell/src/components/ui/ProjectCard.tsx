import React  from "react";


type ProjectCard = {
    projectName : string;
    coverImg : string;
}
export default function ProjectCard(props : ProjectCard){



        return (
            <div 
                className="py-2 w-[220px] h-[220px] border-black flex flex-col items-center hover:text-text-highlight
                    max-[700px]:w-fit max-[700px]:h-fit max-[700px]:py-0">
                {/* This is the project card */}
                <img 
                    className="w-[180px] h-[160px] object-center mb-2
                       max-[700px]:w-[140px] max-[700px]:h-[130px] max-[700px]:mb-2" 
                src={props.coverImg} 
                alt={`Cover for my ${props.projectName} project`}
                loading="lazy"
                decoding="async"
                />
                <p className="text-sm font-semibold w-[180px] 
                    max-[700px]:text-[14px] max-[700px]:w-[140px] max-[700px]:text-center max-[700px]:leading-5" > {props.projectName} </p>
            </div>
        )
}