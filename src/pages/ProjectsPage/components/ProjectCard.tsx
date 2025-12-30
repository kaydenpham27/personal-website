import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { Calendar1, CalendarCheck } from "lucide-react";

// TODO: Add more stuff here
export type ProjectCardTag =
  // Cloud & Infrastructure
  | "AWS"
  | "Azure"
  | "GCP"
  | "Cloud"
  | "Serverless"
  | "CI/CD"
  | "Docker"
  | "Kubernetes"

  // Languages
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "Go"
  | "Java"
  | "Rust"
  | "C++"

  // Frontend
  | "React"
  | "Next.js"
  | "Vue"
  | "Svelte"
  | "Tailwind"
  | "Vite"

  // Backend
  | "Node.js"
  | "Express"
  | "FastAPI"
  | "Django"
  | "Spring Boot"

  // Databases
  | "PostgreSQL"
  | "MongoDB"
  | "DynamoDB"
  | "Redis"
  | "MySQL"

  // Tools & Concepts
  | "API"
  | "GraphQL"
  | "REST"
  | "WebSocket"
  | "OAuth"
  | "JWT"
  | "Microservices"
  | "Monorepo"

  // Categories
  | "Web"
  | "Mobile"
  | "CLI"
  | "Library"
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "DevOps"
  | "AI/ML"
  | "Open Source";

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: ProjectCardTag[];
  githubUrl: string;
  imgPath: string;
  imgClassName: string;
  startDate: string;
  endDate: string;
};

export const ProjectCard = ({
  title,
  description,
  imgPath,
  imgClassName,
  tags,
  githubUrl,
  startDate,
  endDate,
}: ProjectCardProps) => {
  return (
    <a
      href={githubUrl}
      title={`View ${title} in details`}
      className="block w-full flex-shrink-0"
    >
      <Card className="h-full flex flex-col items-center shadow-xl/20 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl cursor-pointer">
        <CardHeader className="flex flex-col text-start w-full">
          <CardTitle>
            <Typography.H4>{title}</Typography.H4>
          </CardTitle>

          <div className="flex flex-wrap gap-2 sm:gap-4 justify-start pb-4">
            {/* Start Date */}
            <div className="flex flex-row gap-2 items-center">
              <Calendar1 className="w-5 flex-shrink-0" />
              <Typography.Small className="whitespace-nowrap">
                {startDate}
              </Typography.Small>
            </div>

            {/* End Date */}
            <div className="flex flex-row gap-2 items-center">
              <CalendarCheck className="w-5 flex-shrink-0" />
              <Typography.Small className="whitespace-nowrap">
                {endDate}
              </Typography.Small>
            </div>
          </div>

          <CardDescription>
            <Typography.Muted className="line-clamp-3">
              {description}
            </Typography.Muted>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col w-full items-center gap-5">
          <img
            src={imgPath}
            className={cn("w-full h-auto border-gray-200 ", imgClassName)}
            alt={title}
          />{" "}
          <div className="flex flex-row flex-wrap justify-center gap-2">
            {tags.map((tag) => {
              return (
                <Badge key={tag} variant={"outline"}>
                  <Typography.Small>{tag}</Typography.Small>
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </a>
  );
};
