import Typography from "@/components/ui/typography";

type DetailsRowProps = {
  iconUrl: string;
  title: string;
  description: string;
};

const DetailsRow = ({ iconUrl, title, description }: DetailsRowProps) => {
  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-[5%_20%_75%] items-center pt-4 text-left">
      <img src={iconUrl} className="w-8" />
      <Typography.H4 className="pl-4"> {title} </Typography.H4>
      <Typography.Large className="font-normal pl-4">
        {description}
      </Typography.Large>
    </div>
  );
};

export const PersonalDetailsCard = () => {
  return (
    <div className="flex flex-col justify-start items-start pl-4">
      <Typography.H2> Software Engineer </Typography.H2>
      <Typography.H3 className="font-normal">Trung Kien Pham</Typography.H3>
      <Typography.Large className="font-normal pb-6">
        Brisbane, Australia
      </Typography.Large>
      <DetailsRow
        iconUrl="./public/work_place.png"
        title="Company"
        description="Nanoputian"
      />
      <DetailsRow
        iconUrl="./public/energy_drink.png"
        title="Drink"
        description="I love iced long black! Don't really know if 
        this is what they call it anywhere else, but in Australia, this is a GOATed drink. I can
        survive only by drinking iced long blacks. An iced long black can boost my software development
        productivity by INF. 
        "
      />
      <DetailsRow
        iconUrl="./public/enjoy.png"
        title="Hobbies"
        description="I love doing Competive Programming where I have ... 
        "
      />
    </div>
  );
};
