import type {Project} from "@/components/ui/SearchProject"


const sortProjects = (data : Project[], sortBy : string) => {
    const scaleMap = new Map<string , number> ([
      ["personal" , 1],
      ["school" , 1],
      ["small" , 1],
      ["medium", 2],
      ["large" , 3]
    ]);
  
    if (sortBy === "New") {
      return [...data].sort((a, b) =>  b.dateCompleted.getTime() - a.dateCompleted.getTime()); // Most Recent
    }
    if (sortBy === "Old") {
      return [...data].sort((a, b) => a.dateCompleted.getTime() - b.dateCompleted.getTime()); // Oldest
    }
    if (sortBy === "Name A") {
      return [...data].sort((a, b) => a.projectName.localeCompare(b.projectName)); // Name A -> Z
    }
    if (sortBy === "Name Z") {
      return [...data].sort((a, b) => b.projectName.localeCompare(a.projectName)); // Name Z -> A
    }
    if (sortBy === "scale-ascending") {
      return [...data].sort((a, b) => scaleMap.get(a.projectScale.toLowerCase()) as number - (scaleMap.get(b.projectScale.toLowerCase()) as number)); // Small -> Large
    }
    if (sortBy === "scale-descending") {
      return [...data].sort((a, b) => scaleMap.get(b.projectScale.toLowerCase()) as number - (scaleMap.get(a.projectScale.toLowerCase()) as number)); // Large -> Small
    }
    return data; // Default (no sorting)
  };

export {
    sortProjects
}