import { motion } from "motion/react";
import { ProjectCard, type ProjectCardProps } from "./components";
import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";
import { BASE_URL } from "@/constants";

// TODO: This will be retrieved through the API later
const projects: ProjectCardProps[] = [
  {
    title: "Telegram Clone",
    description: "Cloned Telegram using Typescript and AWS",
    tags: ["AWS", "Cloud", "CI/CD", "Backend", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
    imgPath: `${BASE_URL}/project-images/telegram.png`,
    imgClassName: "w-30 h-30",
    startDate: "20-8-2025",
    endDate: "22-8-2025",
  },
  {
    title: "Competive Programming Solutions",
    description:
      "I've been doing CP for a while, so I decided to create this repository where I save my solutions for the official ICPC contests and interesting problems from platforms like CodeForces, AtCoder or QOJ",
    tags: ["C++"],
    githubUrl: "https://github.com/kaydenpham27/Competitive-Programming",
    imgPath: `${BASE_URL}/project-images/icpc.png`,
    imgClassName: "w-50 h-30",
    startDate: "20-8-2025",
    endDate: "22-8-2025",
  },
  {
    title: "Microservice Evaluation",
    description:
      "FUSE, a microservice evaluation technique, based on eBPF technology to monitor microservice's behavior at the Kernal level",
    tags: ["Python", "Cloud"],
    githubUrl: "https://github.com/kaydenpham27/MicroserviceEvaluation",
    imgPath: `${BASE_URL}/project-images/eBPF.png`,
    imgClassName: "w-60 h-30",
    startDate: "20-8-2025",
    endDate: "22-8-2025",
  },
];

export const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2 mx-auto max-w-380"
    >
      <div className="pl-[5rem] pr-[5rem] pt-10 pb-10">
        <div className="grid md:grid-cols-[19rem_auto_17rem] grid-cols-1 justify-stretch gap-5">
          <div>
            <ProfileCard />
          </div>
          <div className="flex flex-row flex-wrap items-center gap-2">
            {projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  imgPath={project.imgPath}
                  imgClassName={project.imgClassName}
                  startDate={project.startDate}
                  endDate={project.endDate}
                />
              );
            })}
          </div>
          <div>
            <TagsCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
