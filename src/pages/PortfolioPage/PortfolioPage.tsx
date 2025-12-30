import { BASE_URL } from "@/constants";
import {
  AboutMeCard,
  TechStackCarousel,
  type TechStackCarouselProps,
} from "./components";
import { motion } from "motion/react";

const TECH_STACK_IMGS: TechStackCarouselProps["imgs"] = [
  // Clouds
  {
    path: `${BASE_URL}/tech-stack-images/aws-cloud.png`,
    className: "w-25 h-25",
  },
  {
    path: `${BASE_URL}/tech-stack-images/microsoft-azure.png`,
    className: "w-25 h-25",
  },
  // Languages
  {
    path: `${BASE_URL}/tech-stack-images/c-plus-plus.png`,
    className: "w-25 h-25",
  },
  {
    path: `${BASE_URL}/tech-stack-images/TS.png`,
    className: "w-25 h-25",
  },
  // Containerisation
  {
    path: `${BASE_URL}/tech-stack-images/docker.png`,
    className: "w-25 h-25",
  },
  {
    path: `${BASE_URL}/tech-stack-images/kubernetes.png`,
    className: "w-25 h-25",
  },
  // Version controls
  {
    path: `${BASE_URL}/tech-stack-images/git.png`,
    className: "w-25 h-25",
  },
  // Databases
  {
    path: `${BASE_URL}/tech-stack-images/postgres.png`,
    className: "w-25 h-25",
  },
  {
    path: `${BASE_URL}/tech-stack-images/mysql.png`,
    className: "w-25 h-25",
  },
];

export const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2 max-w-380 mx-auto"
    >
      <div className="flex flex-col w-fit pl-[5rem] pr-[5rem]">
        <div className="pt-6">
          <AboutMeCard className="shadow-xl/20" />
        </div>
        <TechStackCarousel className="pt-6" imgs={TECH_STACK_IMGS} />
        {/* <div className="grid grid-cols-1 md:grid-cols-[70%_1%_29%] pt-6">
          <ContactMeCard className="shadow-xl/20" />
          <div></div>
          <NewsFeedCard className="shadow-xl/20" />
        </div> */}
      </div>
    </motion.div>
  );
};
