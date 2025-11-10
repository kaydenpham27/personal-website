import { NewsFeedCard, AboutMeCard } from "./components";
import { ContactMeCard } from "./components/ContactMeCard";
import { motion } from "motion/react";

export const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <div className="flex flex-col pl-50 pr-50">
        <div className="grid grid-cols-1 md:grid-cols-[70%_1%_29%] pt-10">
          <AboutMeCard />
          <div></div>
          <NewsFeedCard />
        </div>

        <div className="pt-6 pl-40 pr-40">
          <ContactMeCard />
        </div>
      </div>
    </motion.div>
  );
};
