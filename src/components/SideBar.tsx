import React from "react";
import Typography from "./ui/typography";
import { Link } from "react-router";
import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GithubIcon";
import { cn } from "@/lib/utils";
import { ICON_COLOR } from "@/constants/color";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [focusSection, setFocusSection] = React.useState("");

  return (
    <>
      <div className="bg-[#fff] text-[#4a4a4a] pl-[5rem] pr-[5rem] shadow-md">
        <div className="mx-auto max-w-345 grid grid-cols-[80%_20%] h-12 ">
          <div className="flex flex-row justify-start">
            <Link
              to="/"
              className="flex flex-col items-center justify-center px-3 cursor-pointer transition-colors hover:bg-gray-100"
              onClick={() => setFocusSection("")}
            >
              <img src="./public/daffodils.png" className="w-8" />
            </Link>
            <Link
              to="/"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "INTRO" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("INTRO")}
            >
              <Typography.Small className="font-semibold">
                KIEN'S LOG BOOK
              </Typography.Small>
            </Link>
            <Link
              to="/portfolio"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "PORTFOLIO" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("PORTFOLIO")}
            >
              <Typography.Small className="font-semibold">
                PORTFOLIO
              </Typography.Small>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "PROJECTS" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("PROJECTS")}
            >
              <Typography.Small className="font-semibold">
                PROJECTS
              </Typography.Small>
            </Link>
            <Link
              to="/blogs"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "BLOGS" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("BLOGS")}
            >
              <Typography.Small className="font-semibold">
                BLOGS
              </Typography.Small>
            </Link>
            <Link
              to="/life"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "LIFE" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("LIFE")}
            >
              <Typography.Small className="font-semibold">
                LIFE
              </Typography.Small>
            </Link>
          </div>
          <div className="flex flex-row justify-end">
            <div className="flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors px-3">
              <GitHubIcon width="30px" height="30px" fill="#4a4a4a" />
            </div>
            <div className="flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <LinkedInIcon fill={ICON_COLOR} width="30px" height="30px" />
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
