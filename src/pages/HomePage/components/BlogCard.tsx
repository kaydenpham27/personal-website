import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";

type BlogCardProps = {
  className?: string;
};

export const BlogCard = ({ className }: BlogCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          <Typography.H1>Blog</Typography.H1>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
