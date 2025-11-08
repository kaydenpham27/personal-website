import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Typography from "@/components/ui/typography";
import { PersonalDetailsCard } from "./PersonalDetailsCard";

type InfoCardProps = {
  [key: string]: string;
};

export const InfoCard = ({}: InfoCardProps) => {
  return (
    <div className="w-full">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <Typography.H1> About Me </Typography.H1>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4">
          <PersonalDetailsCard />
          <img
            src="./public/AVA.png"
            className="w-75 place-self-center rounded-xs border-solid border-2 border-gray-700"
          />
        </CardContent>
      </Card>
    </div>
  );
};
