import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";

// TODO: Add more stuff here
export type ProjectCardTag = "aws" | "cloud" | "CI/CD";

export type ProjectCardProps = {
  title: string;
  tags: ProjectCardTag[];
  githubUrl: string;
};

export const ProjectCard = ({ title, tags, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="w-200">
      <CardHeader>
        <CardTitle>
          <Typography.H4>{title}</Typography.H4>
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
