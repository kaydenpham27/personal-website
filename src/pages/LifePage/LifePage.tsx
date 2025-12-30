import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";
import type { Post } from "@/types";
import { motion } from "motion/react";
import { LifeCard } from "./components/LifeCard";

const pages: Post[] = [
  {
    title: "North Stradbroke Island",
    description: "A trip to North Stradbroke Island - Vietnamese Version",
    url: "north-stradbroke-island-25-12-2025.md",
    startDate: "25-12-2025",
    endDate: "25-12-2025",
    tags: ["Australia", "QLD"],
  },
];

export const LifePage = () => {
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
          <div className="flex flex-row flex-wrap items-start gap-2">
            {pages.map((page, index) => {
              return (
                <LifeCard
                  key={index}
                  title={page.title}
                  description={page.description}
                  url={page.url}
                  startDate={page.startDate}
                  endDate={page.endDate}
                  tags={page.tags}
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
