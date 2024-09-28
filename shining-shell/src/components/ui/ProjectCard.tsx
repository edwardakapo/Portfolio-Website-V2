import React  from "react";


type ProjectCard = {
    projectName : string;
    coverImg : string;
}
export default function ProjectCard(props : ProjectCard){



        return (
            <div className="py-2 w-[220px] h-[220px] border-black flex flex-col items-center hover:text-text-highlight">
                {/* This is the project card */}
                <img className="w-[180px] h-[160px] object-center mb-2" src={props.coverImg} />
                <p className="text-sm font-semibold w-[180px]" > {props.projectName} </p>
            </div>
        )
}