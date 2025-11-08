import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { PersonalDetailsCard } from "./PersonalDetailsCard";

type InfoCardProps = {};

export const InfoCard = ({}: InfoCardProps) => {
  return (
    <div className="w-full">
      <Card className="w-full">
        {/* <CardHeader>
        <CardTitle>
          <Typography.H1></Typography.H1>
        </CardTitle>
        <CardDescription>
          <Typography.Muted>This is my website</Typography.Muted>
        </CardDescription>
      </CardHeader> */}
        <CardContent className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-4">
          <PersonalDetailsCard />
          <div>Picture</div>
        </CardContent>
      </Card>
    </div>
  );
};
