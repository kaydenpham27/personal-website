import { NewsFeedCard, AboutMeCard, TechStackCarousel } from "./components";
import { ContactMeCard } from "./components/ContactMeCard";
import { motion } from "motion/react";

const TECH_STACK_IMG_PATHS = [
  "./public/tech-stack-images/aws-cloud.png",
  "./public/tech-stack-images/c-plus-plus.png",
  "./public/tech-stack-images/docker.png",
  "./public/tech-stack-images/microsoft-sql-server.png",
  "./public/tech-stack-images/postgres.png",
  "./public/tech-stack-images/TS.png",
];

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <div className="flex flex-col w-fit pl-40 pr-40">
        <div className="pt-6">
          <AboutMeCard className="shadow-xl/20" />
        </div>
        <TechStackCarousel className="pt-6" imgPaths={TECH_STACK_IMG_PATHS} />
        <div className="grid grid-cols-1 md:grid-cols-[70%_1%_29%] pt-6">
          <ContactMeCard className="shadow-xl/20" />
          <div></div>
          <NewsFeedCard className="shadow-xl/20" />
        </div>
      </div>
    </motion.div>
  );
};
