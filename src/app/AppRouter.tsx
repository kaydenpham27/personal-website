import { SideBar } from "@/components/SideBar";
import { BASE_URL } from "@/constants";
import { BlogsPage } from "@/pages/BlogsPage";
import { HomePage } from "@/pages/HomePage";
import { LifePage, LifePostPage } from "@/pages/LifePage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { BrowserRouter, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <SideBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/life" element={<LifePage />} />
          <Route path="/life/:contentUri" element={<LifePostPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
