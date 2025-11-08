import Typography from "@/components/ui/typography";

type DetailsRowProps = {
  title: string;
  description: string;
};

const DetailsRow = ({ title, description }: DetailsRowProps) => {
  return (
    <div className="flex flex-row justify-items-center items-center pt-4">
      <Typography.H4> {title} </Typography.H4>
      <Typography.Medium className="pl-4"> {description} </Typography.Medium>
    </div>
  );
};

export const PersonalDetailsCard = () => {
  return (
    <div className="flex flex-col justify-start items-start pl-4">
      <Typography.H3> Software Engineer </Typography.H3>
      <Typography.Large className="font-normal">
        Trung Kien Pham
      </Typography.Large>
      <Typography.Medium> Brisbane, Australia </Typography.Medium>
      <DetailsRow title="Fav drink" description="Iced long black" />
      <DetailsRow title="Fav drink" description="Iced long black" />
      <DetailsRow title="Fav drink" description="Iced long black" />
    </div>
  );
};
