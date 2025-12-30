import { ProfileCard } from "@/components/ProfileCard";
import { motion } from "motion/react";
import { useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import React from "react";
import { BASE_URL } from "@/constants";

export const LifePostPage = () => {
  const { contentUri } = useParams();
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(`${BASE_URL}/${contentUri}`)
      .then((res) => res.text())
      .then((res) => setMarkdown(res));
  }, [contentUri]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2 mx-auto max-w-380"
    >
      <div className="pl-[5rem] pr-[5rem] pt-10 pb-10">
        <div className="grid md:grid-cols-[19rem_auto] grid-cols-1 justify-stretch gap-5">
          <div>
            <ProfileCard />
          </div>
          <Card>
            <CardContent>
              <MarkdownRenderer content={markdown} />
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};
