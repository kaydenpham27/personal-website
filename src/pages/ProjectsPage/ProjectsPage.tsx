import { motion } from "motion/react";
import { ProjectCard, type ProjectCardProps } from "./components";

const projects: ProjectCardProps[] = [
  {
    title: "Telegram Clone",
    tags: ["aws", "cloud", "CI/CD"],
    githubUrl: "https://github.com/kaydenpham27/Telegram.git",
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
      <div className="flex flex-col pl-50 pr-50 pt-10 items-center">
        {projects.map((project) => {
          return (
            <ProjectCard
              title={project.title}
              tags={project.tags}
              githubUrl={project.githubUrl}
            />
          );
        })}
      </div>
    </motion.div>
  );
};
