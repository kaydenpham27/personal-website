import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";

type NewsFeedCardProps = {
  className?: string;
};

export const NewsFeedCard = ({ className }: NewsFeedCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          <Typography.H1>Newsfeed</Typography.H1>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
