import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DropDownNav = () => {
  const handleNavigation = (value : any) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Select onValueChange={handleNavigation}>
      <SelectTrigger className="w-[300px] text-[14.5px] font-medium uppercase tracking-wide border-none shadow-none ring-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0">
        <SelectValue placeholder="HOME" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="text-[14.5px]">
          <SelectItem value="about-me">ABOUT ME</SelectItem>
          <SelectItem value="projects">PROJECTS</SelectItem>
          <SelectItem value="discover-more">DISCOVER MORE</SelectItem>
          <SelectItem value="contact-form">GET IN TOUCH</SelectItem>
          <SelectItem value="#">WORK WITH ME</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export { DropDownNav }