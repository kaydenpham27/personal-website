import { SideBar } from "@/components/SideBar";
import { BlogsPage } from "@/pages/BlogsPage";
import { HomePage } from "@/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter basename="personal-website/">
      <SideBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<BlogsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
