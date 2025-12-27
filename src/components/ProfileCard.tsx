import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Coffee, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { GITHUB_PROFILE_URL } from "@/constants/github";
import { GitHubIcon } from "./GithubIcon";
import { Instagram } from "./InstagramIcon";
import { LinkedIn } from "./LinkedInIcon";

type ProfileCardProps = {
  className?: string;
};

export const ProfileCard = ({ className = "" }: ProfileCardProps) => {
  // TODO: Hooks to retrieve data

  return (
    <Card className={cn(className, "w-full max-w-100")}>
      <CardContent className="flex flex-col justify-center">
        <img
          src="./public/AVA.png"
          className="w-40 place-self-center rounded-full border-solid border-2 border-gray-700"
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
          <div className="flex flex-row justify-between gap-10">
            <div className="flex flex-col">
              <Typography.H4> Posts </Typography.H4>
              <Typography.Lead> 132 </Typography.Lead>
            </div>
            <div className="flex flex-col">
              <Typography.H4> Categories </Typography.H4>
              <Typography.Lead> 12 </Typography.Lead>
            </div>
            <div className="flex flex-col">
              <Typography.H4> Tags </Typography.H4>
              <Typography.Lead> 5423 </Typography.Lead>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex justify-center gap-5">
            <a className="flex flex-wrap" href={GITHUB_PROFILE_URL}>
              <Button variant="outline" title="Follow for more">
                <GitHubIcon />
                <Typography.Muted>Follow</Typography.Muted>
              </Button>
            </a>
            <a className="flex flex-wrap" href={GITHUB_PROFILE_URL}>
              <Button variant="outline" title="Buy me a coffee">
                <Coffee />
                <Typography.Muted>Coffee</Typography.Muted>
              </Button>
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-row justify-around">
            <GitHubIcon width="30px" />
            <Instagram className="place-self-center" />
            <LinkedIn fill="#000000ff" height="30px" width="30px" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
