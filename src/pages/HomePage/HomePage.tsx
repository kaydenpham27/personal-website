import { BlogCard, InfoCard } from "./components";
import { ContactMeCard } from "./components/ContactMeCard";

type HomePageProps = {
  [key: string]: string;
};

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className="flex flex-col pl-50 pr-50">
      <div className="grid grid-cols-1 md:grid-cols-[70%_1%_29%] pt-10">
        <InfoCard />
        <div></div>
        <BlogCard />
      </div>

      <div className="pt-6">
        <ContactMeCard />
      </div>
    </div>
  );
};
