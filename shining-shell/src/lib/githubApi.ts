import type { StringLiteral } from "typescript";

const GITHUB_API_URL = 'https://api.github.com/graphql'

// type for the coding language
interface Language {
    name : string;
    color : string;
}

export interface Repository {
    name : string;
    description : string;
    url : string;
    primaryLanguage? : Language;
    updatedAt: string;
}

interface GitHubPinnedReposResponse {
    user : {
        pinnedItems : {
            nodes : Repository[];
        }
    }
}

interface GitHubReposResponse {
    user : {
        repositories : {
            nodes : Repository[];
        }
    }
}

// Fetching data from GraphQL API
export const fetchGitHubData = async (query : string): Promise<any> => {
    try {
        const response = await fetch(GITHUB_API_URL , {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({ query })
        });

        const json = await response.json()
        if (json.errors) {
            console.error('GitHub API errors:', json.errors)
            throw new Error('Failed to fetch data from GitHub API')
        }
        return json.data;

    } catch (error) {
        console.error('Error fetching GitHub data:', error)
        throw error;
    }
};

export const fetchGitHubPinnedRepos = async (username : string) : Promise<Repository[]> => {
    const query = `
       query {
            user(login: "${username}") {
                pinnedItems(first: 6, types: [REPOSITORY]) {
                totalCount
                nodes {
                    ... on Repository {
                    name
                    description
                    url
                    primaryLanguage {
                        name
                        color
                    }
                    }
                }
                }
            }
        }
    `;
    
    const data : GitHubPinnedReposResponse = await fetchGitHubData(query); 
    return data.user.pinnedItems.nodes;
}
export const fetchGitHubRepos = async (username: string): Promise<Repository[]> => {
    const query = `
      query {
        user(login: "${username}") {
          repositories(first: 6, orderBy: { field: UPDATED_AT, direction: DESC }) {
            nodes {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
              updatedAt
            }
          }
        }
      }
    `;
  
    const data: GitHubReposResponse = await fetchGitHubData(query);
    return data.user.repositories.nodes;
  };