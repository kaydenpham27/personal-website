import { BlogContentCard, NavSideBar } from "./components";

export const BlogsPage = () => {
  // TODO: Use state here to load content and pass it down to NavBar and Content
  // Receives blogs from S3 bucket as static content, use React query to handle this,
  // pass content into ContentCard and NavSideBar
  return (
    <div className="grid grid-cols-1 md:grid-cols-[80%_20%] pl-60 pr-60 pt-10 space-x-4">
      <BlogContentCard />
      <NavSideBar />
    </div>
  );
};
