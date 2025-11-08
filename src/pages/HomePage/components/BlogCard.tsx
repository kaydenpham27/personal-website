import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";

export const BlogCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Typography.H1>Blog</Typography.H1>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
