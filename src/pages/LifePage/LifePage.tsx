import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { ProfileCard } from "@/components/ProfileCard";
import { TagsCard } from "@/components/TagsCard";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import React from "react";

export const LifePage = () => {
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch("./public/something.md")
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

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
          <Card>
            <CardContent>
              <MarkdownRenderer content={markdown} />
            </CardContent>
          </Card>
          <div>
            <TagsCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
