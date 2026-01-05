import { ICON_COLOR, ICON_HOVER_COLOR } from "@/constants";
import { GITHUB_PROFILE_URL } from "@/constants/github";
import { cn } from "@/lib/utils";
import React from "react";

type GitHubIconProps = {
  width?: string;
  height?: string;
  className?: string;
  colorChangeOnHover?: boolean;
};

export const GitHubIcon = ({
  width,
  height,
  className,
  colorChangeOnHover = true,
}: GitHubIconProps) => {
  const [mouseEnter, setMouseEnter] = React.useState(false);

  return (
    <div
      className={cn(
        "flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors px-3",
        className,
      )}
      onMouseEnter={() => setMouseEnter(colorChangeOnHover && true)}
      onMouseLeave={() => setMouseEnter(colorChangeOnHover && false)}
    >
      <a
        href={GITHUB_PROFILE_URL}
        title="Follow me"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Github</title>
          <g id="Layer_2" data-name="Layer 2">
            <g id="invisible_box" data-name="invisible box">
              <rect width="48" height="48" fill="none" />
              <rect width="48" height="48" fill="none" />
            </g>
            <g id="icons_Q2" data-name="icons Q2">
              <path
                fill={mouseEnter ? ICON_HOVER_COLOR : ICON_COLOR}
                d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z"
              />
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
};
