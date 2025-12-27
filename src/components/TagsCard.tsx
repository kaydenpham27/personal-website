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
    count: 123,
  },
  {
    label: "Computer Science",
    count: 41,
  },
  {
    label: "Software Architecture",
    count: 12,
  },
  {
    label: "Git",
    count: 1,
  },
];

export const TagsCard = ({ className }: TagsCardProps) => {
  // TODO: Hooks to retrieve tags
  return (
    <Card className={cn(className, "w-full max-w-90")}>
      <CardHeader className="flex">
        <Typography.Lead>Tags</Typography.Lead>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {TAGS.map((tag) => {
          return <Tag label={tag.label} count={tag.count} />;
        })}
      </CardContent>
    </Card>
  );
};
