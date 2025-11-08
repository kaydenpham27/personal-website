import { BlogCard, InfoCard } from "./components";

type HomePageProps = {
  [key: string]: string;
};

export const HomePage = ({}: HomePageProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[70%_30%] pt-10 pl-50 pr-50 gap-6">
      <InfoCard />
      <BlogCard />
    </div>
  );
};
