import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import React from 'react';
import GithubRepos from './GithubRepos';

export default function GithubCalendar(){
    
    const explicitTheme = {
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
      };
    return (
        <>
            <GitHubCalendar username="edwardakapo"
            // theme={explicitTheme}
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                      'data-tooltip-id': 'react-tooltip',
                      'data-tooltip-html': `${activity.count} activities on ${activity.date}`
                    })
                  }
            />
             <ReactTooltip id="react-tooltip" />
            
            <GithubRepos name="edwardakapo" />
        </>
    )
}