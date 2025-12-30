import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import Typography from "./ui/typography";
import { Tag } from "./Tag";

type TagsCardProps = {
  className?: string;
};

const TAGS = [
  {
    label: "CP",
    count: 1,
  },
  {
    label: "Git",
    count: 1,
  },
  {
    label: "Computer Science",
    count: 1,
  },
  {
    label: "Software Architecture",
    count: 1,
  },
];

export const TagsCard = ({ className }: TagsCardProps) => {
  // TODO: Hooks to retrieve tags
  return (
    <Card className={cn(className, "w-full max-w-90")}>
      <CardHeader className="flex">
        <Typography.Medium className="font-semibold">Tags</Typography.Medium>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {TAGS.map((tag) => {
          return <Tag label={tag.label} count={tag.count} />;
        })}
      </CardContent>
    </Card>
  );
};
