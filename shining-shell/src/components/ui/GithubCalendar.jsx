import GitHubCalendar from 'react-github-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import React from 'react';

export default function GithubCalendar(){
    return (
        <>
            <GitHubCalendar username="edwardakapo"
                renderBlock={(block, activity) =>
                    React.cloneElement(block, {
                      'data-tooltip-id': 'react-tooltip',
                      'data-tooltip-html': `${activity.count} activities on ${activity.date}`
                    })
                  }
            />
             <ReactTooltip id="react-tooltip" />
        </>
    )
}