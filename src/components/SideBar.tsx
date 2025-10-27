import React from "react";

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
        console.log(data);
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
    return <h1> GitHub Stats is loading </h1>;
  }

  return (
    <a
      href={repoData?.html_url}
      title="Go to repository"
      className="flex flex-row space-x-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="github-repo__icon">
        <svg
          width="40px"
          height="40px"
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
              <path d="M24,1.9a21.6,21.6,0,0,0-6.8,42.2c1,.2,1.8-.9,1.8-1.8V39.4c-6,1.3-7.9-2.9-7.9-2.9a6.5,6.5,0,0,0-2.2-3.2C6.9,31.9,9,32,9,32a4.3,4.3,0,0,1,3.3,2c1.7,2.9,5.5,2.6,6.7,2.1a5.4,5.4,0,0,1,.5-2.9C12.7,32,9,28,9,22.6A10.7,10.7,0,0,1,11.9,15a6.2,6.2,0,0,1,.3-6.4,8.9,8.9,0,0,1,6.4,2.9,15.1,15.1,0,0,1,5.4-.8,17.1,17.1,0,0,1,5.4.7,9,9,0,0,1,6.4-2.8,6.5,6.5,0,0,1,.4,6.4A10.7,10.7,0,0,1,39,22.6C39,28,35.3,32,28.5,33.2a5.4,5.4,0,0,1,.5,2.9v6.2a1.8,1.8,0,0,0,1.9,1.8A21.7,21.7,0,0,0,24,1.9Z" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex flex-col h-5">
        <div className="h-5">
          <h4>{repoData?.full_name}</h4>
        </div>
        <div className="flex flex-row space-x-2">
          {/* Star SVG */}
          <div className="flex flex-row place-items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-star-icon lucide-star"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
            </svg>
            <h1>{repoData?.stargazers_count}</h1>
          </div>
          <div className="flex flex-row place-items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-git-fork-icon lucide-git-fork"
            >
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
              <path d="M12 12v3" />
            </svg>{" "}
            <h1>{repoData?.forks_count}</h1>
          </div>
        </div>
      </div>
    </a>
  );
};

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-20 place-content-center">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-[70%_30%]">
        <div>icon</div>
        <GitHubStats repoName="personal-website" ownerName="kaydenpham27" />
      </div>
      {children}
    </div>
  );
};
