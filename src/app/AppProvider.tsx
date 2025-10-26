import type React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SideBar } from "@/components/SideBar";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  // TODO: Add more providers e.g. protected routes, auth, etc
  return (
    <ThemeProvider>
      <SideBar>{children}</SideBar>
    </ThemeProvider>
  );
};
