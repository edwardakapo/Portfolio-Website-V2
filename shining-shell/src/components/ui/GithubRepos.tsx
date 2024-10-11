import { fetchGitHubPinnedRepos, fetchGitHubRepos } from "@/lib/githubApi";
import { useState, useEffect } from "react";
import type { Repository } from "@/lib/githubApi";
import GithuRepoCard from "./GithubRepoCard";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const name = "edwardakapo"

const Arrow = ({isExpanded} : {isExpanded : boolean}) => (
 <svg 
 className={`w-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 10L12 15L17 10" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
)


const getCachedData = (key : string ) => {
    console.log("GETTING CACHE")
    const cachedData = sessionStorage.getItem(key);
    if (cachedData) {
        return JSON.parse(cachedData);
    }
    return null;
}

const setCachedData = (key : string, data : any) => {
    console.log("SETTING CACHE")
    sessionStorage.setItem(key , JSON.stringify(data))
}


export default function GithubRepos() {
    const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([])
    const [recentRepos, setRecentRepos] = useState<Repository[]>([])
    const [isLoading ,setIsLoading] = useState(true)
    const [selectedGrid, setSelectedGrid ]= useState("recent")
    const [isExpanded , setIsExpanded] = useState(false)

useEffect (  () => {
    const getGithubData = async () => {
        try {
            console.log("loading fetch request")
            setIsLoading(true)
            // Check cache for pinned repos data
            const cachedPinnedRepos = getCachedData(`pinnedRepos_${name}`);
            if (cachedPinnedRepos) {
                // data exists in the session storage
                setPinnedRepos(cachedPinnedRepos)
                console.log(cachedPinnedRepos)
                console.log(pinnedRepos)
            } else {
                const pinned = await fetchGitHubPinnedRepos(name);
                setPinnedRepos(pinned)
                setCachedData(`pinnedRepos_${name}`, pinned)
            }

            // Check cache for recent repos data
            const cachedRecentRepos = getCachedData(`recentRepos_${name}`)
            if(cachedRecentRepos) {
                setRecentRepos(cachedRecentRepos)
            } else {
                const recent = await fetchGitHubRepos(name)
                setRecentRepos(recent)
                setCachedData(`recentRepos_${name}`, recent)
            }

        }
        catch (error) {
            console.error('Error fetching Github data:' , error)
        }
        finally {
            console.log("done loading")
            setIsLoading(false)
        }
    };
    getGithubData();
}, []);
    if (isLoading) {
        return <div> Loading ...</div>
    }
    return (
        <div className="flex flex-col gap-y-5 w-fit h-fit">
            <div 
                className={` py-1 w-[856px] max-[900px]:w-[600px] max-[600px]:w-[350px] max-[900px]:gap-y-9 lg:items-center flex flex-col gap-y-3 transition-all duration-300 ${isExpanded ? 'h-[475px] max-[900px]:h-[986px]' : 'h-[206px] max-[900px]:h-[246px]'} overflow-hidden`}>
                <div className="place-self-end pr-0.5">
                    <Select value={selectedGrid} onValueChange={(value) => setSelectedGrid(value)}>
                        <SelectTrigger className="w-fit rounded-2xl py-1 gap-x-2 border-gray-300 h-fit text-xs font-bold tracking-wider hover:ring-2 hover:ring-gray-300">
                        <SelectValue/>
                        </SelectTrigger>
                        <SelectContent className="max-h-[400px]">
                            <SelectItem value="recent">Recent Projects</SelectItem>
                            <SelectItem value="pinned">Pinned Projects</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div className={`${selectedGrid === "pinned" ? "block" : "hidden"}`}>
                    <h1 className="text-sm max-[900px]:text-[16px] p-1 mb-1 text-gray-500">Here are the projects I want to highlight </h1> 
                    <ul 
                        className="grid grid-cols-2 gap-y-2 gap-x-2 justify-between
                            max-[900px]:grid-cols-1 max-[900px]:gap-y-4" >
                        {pinnedRepos.map((repo) => (
                            <li key={repo.name} className="w-fit">
                                <GithuRepoCard {...repo}/>
                            </li>
                        ))
                        }
                    </ul>
                </div>
                
                <div className={`${selectedGrid === "recent" ? "block" : "hidden"}`}>
                    <h1 className="text-sm max-[900px]:text-[16px] p-1 mb-1 text-gray-500"> The latest projects I've been working on</h1> 
                    <ul 
                        className="grid grid-cols-2 gap-y-2 gap-x-2 justify-between
                            max-[900px]:grid-cols-1 max-[900px]:gap-y-4" >
                        {recentRepos
                        .sort((a,b) => (new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()))
                        .map((repo) => (
                            <li key={repo.name} className="w-fit">
                                <GithuRepoCard {...repo}/>
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
                <button onClick={() => { setIsExpanded(!isExpanded)}} className="place-self-center flex gap-x-1 text-xs border w-fit px-4 py-0.5 rounded-3xl items-center tracking-wide hover:ring-2 hover:ring-gray-300 max-[900px]:py-1 max-[900px]:border-2">
                {isExpanded ? 'Show Less' : 'Show More'} <Arrow isExpanded={isExpanded}/>
                </button>
        </div>
        
    )
}