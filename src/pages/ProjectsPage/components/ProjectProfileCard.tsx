import { Card, CardContent } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

type ProjectProfileCardProps = {
  className?: string;
};

export const ProjectProfileCard = ({
  className = "",
}: ProjectProfileCardProps) => {
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
        <div className="flex flex-row justify-center items-center gap-1">
          <MapPin className="w-4" />
          <Typography.Muted> Brisbane, Australia </Typography.Muted>
        </div>
      </CardContent>
    </Card>
  );
};
