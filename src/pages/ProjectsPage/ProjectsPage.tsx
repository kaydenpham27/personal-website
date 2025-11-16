import { motion } from "motion/react";
import { ProjectCard, type ProjectCardProps } from "./components";

const projects: ProjectCardProps[] = [
  {
    title: "Telegram Clone",
    description:
      "I basically cloned telegram I basically cloned telegram I basically cloned telegramI basically cloned telegram I basically cloned telegram",
    tags: ["AWS", "Cloud", "CI/CD", "Backend", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
    imgPath: "./public/project-images/telegram.png",
    imgClassName: "w-30 h-30",
  },
  {
    title: "Competive Programming Solutions",
    description:
      "I've been doing CP for a while, so I decided to create this repository where I save my solutions for the official ICPC contests and interesting problems from platforms like CodeForces, AtCoder or QOJ",
    tags: ["C++"],
    githubUrl: "https://github.com/kaydenpham27/Competitive-Programming",
    imgPath: "./public/project-images/icpc.png",
    imgClassName: "w-50 h-30",
  },
  {
    title: "Microservice Evaluation",
    description:
      "FUSE, a microservice evaluation technique, based on eBPF technology to monitor microservice's behavior at the Kernal level",
    tags: ["Python", "Cloud"],
    githubUrl: "https://github.com/kaydenpham27/MicroserviceEvaluation",
    imgPath: "./public/project-images/eBPF.png",
    imgClassName: "w-60 h-30",
  },
];

export const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <div className="grid grid-cols-3 pl-50 pr-50 pt-10 items-center gap-10">
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
            />
          );
        })}
      </div>
    </motion.div>
  );
};
