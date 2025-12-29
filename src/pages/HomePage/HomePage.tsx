import { motion } from "motion/react";
import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";

export const HomePage = () => {
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
          <div className="flex flex-row flex-wrap items-center gap-2"></div>
          <div>
            <TagsCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
