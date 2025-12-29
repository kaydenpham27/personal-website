import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Coffee, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { GITHUB_PROFILE_URL } from "@/constants/github";
import { GitHubIcon } from "./GithubIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { MailIcon } from "./Mailcon";
import { CodeforcesIcon } from "./CodeforcesIcon";

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className = "" }: ProfileCardProps) => {
  // TODO: Hooks to retrieve data

  return (
    <Card className={cn(className, "w-full")}>
      <CardContent className="flex flex-col justify-center">
        <img
          src="./public/AVA.png"
          className="w-30 place-self-center rounded-full border-solid border-2 border-gray-700"
        />
        <Typography.Large className="pt-5">Trung Kien Pham</Typography.Large>
        <Typography.Muted className="italic">
          Software Engineer
        </Typography.Muted>
        <Typography.Muted className="italic">Computer Science</Typography.Muted>
        <Typography.Muted className="italic">
          Competitive Programming
        </Typography.Muted>
        <div className="flex flex-row justify-center items-center gap-1 pb-6">
          <MapPin className="w-4" />
          <Typography.Muted> Brisbane, Australia </Typography.Muted>
        </div>
        <div className="flex flex-col gap-6">
          {/* Stats */}
          <div className="flex flex-wrap justify-around gap-5">
            <div className="flex flex-col">
              <Typography.Small className="font-thin font-serif">
                {" "}
                POSTS{" "}
              </Typography.Small>
              <Typography.Lead> 132 </Typography.Lead>
            </div>
            <div className="flex flex-col">
              <Typography.Small className="font-thin font-serif">
                {" "}
                CATEGORIES{" "}
              </Typography.Small>
              <Typography.Lead> 12 </Typography.Lead>
            </div>
            <div className="flex flex-col">
              <Typography.Small className="font-thin font-serif">
                {" "}
                TAGS{" "}
              </Typography.Small>
              <Typography.Lead> 5423 </Typography.Lead>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3">
            <a className="flex" href={GITHUB_PROFILE_URL} target="_blank">
              <Button
                variant="outline"
                className="min-w-30"
                title="Follow for more"
              >
                <GitHubIcon />
                <Typography.Muted>Follow</Typography.Muted>
              </Button>
            </a>
            <a className="flex" href={GITHUB_PROFILE_URL} target="_blank">
              <Button
                variant="outline"
                className="min-w-30"
                title="Buy me a coffee"
              >
                <Coffee />
                <Typography.Muted>Coffee</Typography.Muted>
              </Button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row justify-around items-center">
            <GitHubIcon width="20px" />
            <InstagramIcon />
            <LinkedInIcon height="20px" width="20px" />
            <MailIcon />
            <CodeforcesIcon />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
