import Typography from "@/components/ui/typography";

type DetailsRowProps = {
  iconUrl: string;
  title: string;
  description: string;
};

const DetailsRow = ({ iconUrl, title, description }: DetailsRowProps) => {
  return (
    <div className="w-full grid grid-cols-3  md:grid-cols-[5%_20%_75%] items-center pt-4">
      <img src={iconUrl} className="w-8" />
      <Typography.H4 className="pl-4"> {title} </Typography.H4>
      <Typography.Medium className="pl-4 text-left">
        {" "}
        {description}{" "}
      </Typography.Medium>
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
      <Typography.Medium className="pb-6">
        {" "}
        Brisbane, Australia{" "}
      </Typography.Medium>
      <DetailsRow
        iconUrl="./public/work_place.png"
        title="Company"
        description="Nanoputian"
      />
      <DetailsRow
        iconUrl="./public/energy_drink.png"
        title="Drink"
        description="I love iced long black, don't know if 
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
