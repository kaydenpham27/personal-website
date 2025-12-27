import { FolderGit2, PencilLine, UserRound } from "lucide-react";
import React from "react";
import Typography from "./ui/typography";
import { Link } from "react-router";
import { motion } from "motion/react";
import { GitHubIcon } from "./GithubIcon";
import { LinkedIn } from "./LinkedInIcon";

type GitHubRepoData = {
  forks_count: number;
  full_name: string;
  stargazers_count: number;
  html_url: string;
};

type GitHubStatsProps = {
  ownerName: string;
  repoName: string;
};

const GitHubStats = (props: GitHubStatsProps) => {
  const [repoData, setRepoData] = React.useState<GitHubRepoData | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${props.ownerName}/${props.repoName}`)
      .then((res) => res.json())
      .then((data: GitHubRepoData) => {
        setRepoData(data);
      })
      .catch((err) => {
        console.error(
          `Failed to fetch GitHub repository ${props.repoName}: ${err}`,
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [props.ownerName, props.repoName]);

  if (isLoading) {
    // TODO: Do something here instead of only showing effect
    return (
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <a
        href={repoData?.html_url}
        title="Go to repository"
        className="flex flex-row items-center space-x-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <GitHubIcon width="35px" height="35px" fill="#ffffffff" />
        </div>
        <div className="flex flex-col text-white">
          <Typography.Small>{repoData?.full_name}</Typography.Small>
          <div className="flex flex-row space-x-2">
            {/* Star SVG */}
            <div className="flex flex-row place-items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffffff"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-star-icon lucide-star"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
              </svg>
              <Typography.Small>{repoData?.stargazers_count}</Typography.Small>
            </div>
            <div className="flex flex-row place-items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13px"
                height="13px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffffff"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-git-fork-icon lucide-git-fork"
              >
                <circle cx="12" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <circle cx="18" cy="6" r="3" />
                <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                <path d="M12 12v3" />
              </svg>
              <Typography.Small>{repoData?.forks_count}</Typography.Small>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-row w-full bg-[#2669d5] h-14 items-center pl-20 pr-20 justify-between">
        <div className="flex flex-row space-x-10">
          <Link
            to="/"
            className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-600 transition-colors"
          >
            <UserRound className="w-8 h-8 text-white" />
          </Link>

          <Link
            to="/projects"
            className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-600 transition-colors"
          >
            <FolderGit2 className="w-8 h-8 text-white" />
          </Link>

          <Link
            to="/blogs"
            className="flex flex-col items-center space-y-1 cursor-pointer hover:text-blue-600 transition-colors"
          >
            <PencilLine className="w-8 h-8 text-white" />
          </Link>
        </div>
        <div className="flex flex-row space-x-5 items-center">
          <GitHubStats repoName="personal-website" ownerName="kaydenpham27" />
          <LinkedIn fill="#ffffffff" width="45px" height="45px" />
        </div>
      </div>
      {children}
    </>
  );
};
