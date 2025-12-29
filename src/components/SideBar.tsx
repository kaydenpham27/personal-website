import React from "react";
import Typography from "./ui/typography";
import { Link } from "react-router";
import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GithubIcon";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="grid grid-cols-[80%_20%] w-full h-12 bg-[#fff] text-[#4a4a4a] pl-20 pr-20">
        <div className="flex flex-row justify-center">
          <Link
            to="/"
            className="flex flex-col items-center justify-center px-3 cursor-pointer transition-colors hover:bg-gray-100"
          >
            <img src="./public/daffodils.png" className="w-8" />
          </Link>
          <Link
            to="/"
            className="flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            <Typography.Small className="font-semibold">INTRO</Typography.Small>
          </Link>
          <Link
            to="/projects"
            className="flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            <Typography.Small className="font-semibold">
              PROJECTS
            </Typography.Small>
          </Link>
          <Link
            to="/blogs"
            className="flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            <Typography.Small className="font-semibold">BLOGS</Typography.Small>
          </Link>
          <Link
            to="/blogs"
            className="flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors"
          >
            <Typography.Small className="font-semibold">LIFE</Typography.Small>
          </Link>
        </div>
        <div className="flex flex-row justify-end">
          <div className="flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors px-3">
            <GitHubIcon width="30px" height="30px" fill="#4a4a4a" />
          </div>
          <div className="flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
            <LinkedInIcon fill="#4a4a4a" width="30px" height="30px" />
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
