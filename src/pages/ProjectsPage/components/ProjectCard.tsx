import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";

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

const getProjectCardTagColor = (tag: ProjectCardTag): string => {
  switch (tag) {
    // Cloud & Infrastructure - Orange/Yellow tones
    case "AWS":
      return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
    case "Azure":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "GCP":
      return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
    case "Cloud":
      return "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20";
    case "Serverless":
      return "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20";
    case "CI/CD":
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
    case "Docker":
      return "bg-blue-600/10 text-blue-800 dark:text-blue-300 border-blue-600/20";
    case "Kubernetes":
      return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20";

    // Languages - Distinct colors
    case "TypeScript":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "JavaScript":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
    case "Python":
      return "bg-blue-600/10 text-blue-800 dark:text-blue-300 border-blue-600/20";
    case "Go":
      return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20";
    case "Java":
      return "bg-red-600/10 text-red-800 dark:text-red-300 border-red-600/20";
    case "Rust":
      return "bg-orange-600/10 text-orange-800 dark:text-orange-300 border-orange-600/20";
    case "C++":
      return "bg-purple-600/10 text-purple-800 dark:text-purple-300 border-purple-600/20";

    // Frontend - Blue/Cyan tones
    case "React":
      return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20";
    case "Next.js":
      return "bg-slate-700/10 text-slate-900 dark:text-slate-300 border-slate-700/20";
    case "Vue":
      return "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20";
    case "Svelte":
      return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
    case "Tailwind":
      return "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20";
    case "Vite":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";

    // Backend - Green/Purple tones
    case "Node.js":
      return "bg-green-600/10 text-green-800 dark:text-green-300 border-green-600/20";
    case "Express":
      return "bg-gray-600/10 text-gray-800 dark:text-gray-300 border-gray-600/20";
    case "FastAPI":
      return "bg-teal-600/10 text-teal-800 dark:text-teal-300 border-teal-600/20";
    case "Django":
      return "bg-green-700/10 text-green-900 dark:text-green-200 border-green-700/20";
    case "Spring Boot":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";

    // Databases - Purple/Pink tones
    case "PostgreSQL":
      return "bg-blue-700/10 text-blue-900 dark:text-blue-200 border-blue-700/20";
    case "MongoDB":
      return "bg-green-600/10 text-green-800 dark:text-green-300 border-green-600/20";
    case "DynamoDB":
      return "bg-indigo-600/10 text-indigo-800 dark:text-indigo-300 border-indigo-600/20";
    case "Redis":
      return "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20";
    case "MySQL":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";

    // Tools & Concepts - Mixed
    case "API":
      return "bg-pink-500/10 text-pink-700 dark:text-pink-400 border-pink-500/20";
    case "GraphQL":
      return "bg-pink-600/10 text-pink-800 dark:text-pink-300 border-pink-600/20";
    case "REST":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "WebSocket":
      return "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20";
    case "OAuth":
      return "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20";
    case "JWT":
      return "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-400 border-fuchsia-500/20";
    case "Microservices":
      return "bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-500/20";
    case "Monorepo":
      return "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20";

    // Categories - Neutral tones
    case "Web":
      return "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20";
    case "Mobile":
      return "bg-zinc-500/10 text-zinc-700 dark:text-zinc-400 border-zinc-500/20";
    case "CLI":
      return "bg-stone-500/10 text-stone-700 dark:text-stone-400 border-stone-500/20";
    case "Library":
      return "bg-neutral-500/10 text-neutral-700 dark:text-neutral-400 border-neutral-500/20";
    case "Full Stack":
      return "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20";
    case "Frontend":
      return "bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20";
    case "Backend":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    case "DevOps":
      return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
    case "AI/ML":
      return "bg-purple-600/10 text-purple-800 dark:text-purple-300 border-purple-600/20";
    case "Open Source":
      return "bg-emerald-600/10 text-emerald-800 dark:text-emerald-300 border-emerald-600/20";

    default:
      return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
  }
};

export type ProjectCardProps = {
  title: string;
  description: string;
  tags: ProjectCardTag[];
  githubUrl: string;
  imgPath: string;
};

export const ProjectCard = ({
  title,
  description,
  imgPath,
  tags,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <Card className="w-100 items-center">
      <CardContent>
        <img src={imgPath} className="w-50" />
      </CardContent>
      <CardHeader className="w-100">
        <CardTitle>
          <Typography.H4>{title}</Typography.H4>
        </CardTitle>
        <CardDescription>
          <Typography.Muted>{description}</Typography.Muted>
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {tags.map((tag) => {
            return (
              <Badge className={getProjectCardTagColor(tag)}>
                <Typography.Small> {tag} </Typography.Small>
              </Badge>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
