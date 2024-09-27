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
        <div className="flex flex-col gap-y-3">
            <div className="place-self-end">
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
                <h1 className="text-sm p-1 mb-1">Projects I want to showcase </h1> 
                <ul className="grid grid-cols-2 gap-y-2 gap-x-2 justify-between" >
                    {pinnedRepos.map((repo) => (
                        <li key={repo.name} className="w-fit">
                            <GithuRepoCard {...repo}/>
                        </li>
                    ))
                    }
                </ul>
            </div>
            
            <div className={`${selectedGrid === "recent" ? "block" : "hidden"}`}>
                <h1 className="text-sm p-1 mb-1"> Latest projects I've been working on</h1> 
                <ul className="grid grid-cols-2 gap-y-2 gap-x-2 justify-between">
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
        
    )
}