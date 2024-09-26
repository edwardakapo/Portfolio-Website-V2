import { fetchGitHubPinnedRepos, fetchGitHubRepos } from "@/lib/githubApi";
import { useState, useEffect } from "react";
import type { Repository } from "@/lib/githubApi";

type PropType = {
 name : string;
}

export default function GithubRepos({ name } : PropType)   {
const [pinnedRepos, setPinnedRepos] = useState<Repository[]>([])
const [repos, setRepos] = useState<Repository[]>([])
useEffect (  () => {
    const getGithubData = async () => {
        try {
            const pinned = await fetchGitHubPinnedRepos(name);
            const recentRepos = await fetchGitHubRepos(name)
            
            setPinnedRepos(pinned)
            setRepos(recentRepos)
        }
        catch (error) {
            console.error('Error fetching Github data:' , error)
        }
        console.log(pinnedRepos)
    };
    getGithubData();
}, []);

    return (
        <>
            <h1> Pinned Repos in here </h1>
            {pinnedRepos.map((repo) => (
                <div key={repo.name}>
                <a href={repo.url}>{repo.name}</a>
                <p>{repo.description}</p>
                <p>{repo.primaryLanguage?.name}</p>
                </div>
            ))}

            <h1> Recent Repos Here </h1>
            {repos.map((repo) => (
                <div key={repo.name}>
                <a href={repo.url}>{repo.name}</a>
                <p>{repo.description}</p>
                </div>
            ))}
        </>
    )
}