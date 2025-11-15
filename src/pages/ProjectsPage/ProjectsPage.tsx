import { motion } from "motion/react";
import { ProjectCard, type ProjectCardProps } from "./components";

const projects: ProjectCardProps[] = [
  {
    title: "Telegram Clone",
    description:
      "I basically cloned telegram I basically cloned telegram I basically cloned telegramI basically cloned telegram I basically cloned telegram",
    tags: ["AWS", "Cloud", "CI/CD", "Backend", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
    imgPath: "./public/telegram.png",
  },
  {
    title: "Telegram Clone",
    description:
      "I basically cloned telegram I basically cloned telegram I basically cloned telegramI basically cloned telegram I basically cloned telegram",
    tags: ["AWS", "Cloud", "CI/CD", "Backend", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
    imgPath: "./public/telegram.png",
  },
  {
    title: "Telegram Clone",
    description:
      "I basically cloned telegram I basically cloned telegram I basically cloned telegramI basically cloned telegram I basically cloned telegram",
    tags: ["AWS", "Cloud", "CI/CD", "Backend", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
    imgPath: "./public/telegram.png",
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
            />
          );
        })}
      </div>
    </motion.div>
  );
};
