import { SideBar } from "@/components/SideBar";
import { HomePage } from "@/pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};
