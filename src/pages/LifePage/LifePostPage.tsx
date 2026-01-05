import { ProfileCard } from "@/components/ProfileCard";
import { useParams } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import React from "react";
import { BASE_URL } from "@/constants";

export const LifePostPage = () => {
  const { contentUri } = useParams();
  const [markdown, setMarkdown] = React.useState("");

  React.useEffect(() => {
    fetch(`${BASE_URL}/life/${contentUri}/index.md`)
      .then((res) => res.text())
      .then((res) => setMarkdown(res));
  }, [contentUri]);

  return (
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
  );
};
