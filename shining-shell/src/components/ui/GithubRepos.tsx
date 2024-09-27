import { fetchGitHubPinnedRepos, fetchGitHubRepos } from "@/lib/githubApi";
import { useState, useEffect } from "react";
import type { Repository } from "@/lib/githubApi";
import GithuRepoCard from "./GithubRepoCard";

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
        <>
            <h1> Pinned Repos in here </h1> 
            <ul className="grid grid-cols-2">
                {pinnedRepos.map((repo) => (
                    <li key={repo.name} className="w-fit">
                        <GithuRepoCard {...repo}/>
                    </li>
                ))
                }
            </ul>

            <h1> Recent Repos in here </h1> 
            <ul className="grid grid-cols-2">
                {recentRepos.map((repo) => (
                    <li key={repo.name} className="w-fit">
                        <GithuRepoCard {...repo}/>
                    </li>
                ))
                }
            </ul>
        </>
    )
}