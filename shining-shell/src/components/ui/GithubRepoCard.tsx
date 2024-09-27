import React from "react";
import type { Repository } from "@/lib/githubApi";

const messageDefault = "In the demo, you can see your total contributions and the yearly activities shown in the chart. The chart is zoomable and can be scrubbed using the bottom area."
const CopySVG = <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>



export default function GithuRepoCard(
    { name , description, primaryLanguage, url } : Repository) {

    const shrinkText = (text : string, wordLimit = 21) => {
        const words = text.split(' ');
        if (words.length > wordLimit) {
          return words.slice(0, wordLimit).join(' ') + '...';
        }
        return text;
      };
    
    const removeHash = (text : string ) => {

        return text.substring(1)
    }
    return (
        <>
            <a className="border block p-4 w-[420px] rounded-lg hover:ring-4 hover:ring-gray-100" href={url} target="_blank">
                <h1 className="mb-0.5 text-sm">edwardakapo/<span className="font-bold">{name}</span> </h1>
                <p className="text-xs h-8 max-w-[350px]">{description && shrinkText(description)}</p>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center w-fit">
                        {primaryLanguage ? (
                            <>
                                <img className="mr-2" height="16" width="16" src={`https://cdn.simpleicons.org/${primaryLanguage.name.toLowerCase()}/${removeHash(primaryLanguage.color)}`} />
                                <p className="text-gray-500 text-xs">{primaryLanguage.name}</p>
                            </>
                            ) : (
                                <p></p>
                            )
                        }
                    </div>
                    <button className="border p-1 rounded-full">
                        {CopySVG}
                    </button>
                </div>
            </a>
        </> 
    )
    
}