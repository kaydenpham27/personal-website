import React from "react";
import Typography from "./ui/typography";
import { Link } from "react-router";
import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GithubIcon";
import { cn } from "@/lib/utils";
import { ICON_COLOR } from "@/constants/color";
import { BASE_URL } from "@/constants";
import { Menu, X } from "lucide-react";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [focusSection, setFocusSection] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "KIEN'S LOG BOOK", section: "INTRO" },
    { to: "/portfolio", label: "PORTFOLIO", section: "PORTFOLIO" },
    { to: "/projects", label: "PROJECTS", section: "PROJECTS" },
    { to: "/blogs", label: "BLOGS", section: "BLOGS" },
    { to: "/life", label: "LIFE", section: "LIFE" },
  ];

  return (
    <>
      <div className="bg-[#fff] text-[#4a4a4a] pl-[5rem] pr-[5rem] shadow-md">
        {/* Desktop Display */}
        <div className="hidden lg:flex flex-row mx-auto max-w-345 h-12 justify-between overflow-x-auto scrollbar-hide">
          <div className="flex flex-row">
            <Link
              to="/"
              className="flex flex-col items-center justify-center px-3 cursor-pointer transition-colors hover:bg-gray-100"
              onClick={() => setFocusSection("")}
            >
              <img src={`${BASE_URL}/daffodils.png`} className="w-8" />
            </Link>
            <Link
              to="/"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "INTRO" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("INTRO")}
            >
              <Typography.Small className="font-semibold">
                KIEN'S LOG BOOK
              </Typography.Small>
            </Link>
            <Link
              to="/portfolio"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "PORTFOLIO" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("PORTFOLIO")}
            >
              <Typography.Small className="font-semibold">
                PORTFOLIO
              </Typography.Small>
            </Link>
            <Link
              to="/projects"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "PROJECTS" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("PROJECTS")}
            >
              <Typography.Small className="font-semibold">
                PROJECTS
              </Typography.Small>
            </Link>
            <Link
              to="/blogs"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "BLOGS" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("BLOGS")}
            >
              <Typography.Small className="font-semibold">
                BLOGS
              </Typography.Small>
            </Link>
            <Link
              to="/life"
              className={cn(
                "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                focusSection === "LIFE" ? "text-blue-600" : "",
              )}
              onClick={() => setFocusSection("LIFE")}
            >
              <Typography.Small className="font-semibold">
                LIFE
              </Typography.Small>
            </Link>
          </div>
          <div className="flex flex-row">
            <div className="flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors px-3">
              <GitHubIcon width="30px" height="30px" fill="#4a4a4a" />
            </div>
            <div className="flex w-10 justify-center items-center cursor-pointer hover:bg-gray-100 transition-colors">
              <LinkedInIcon fill={ICON_COLOR} width="30px" height="30px" />
            </div>
          </div>
        </div>

        {/* Mobile Display */}
        <div className="flex flex-col lg:hidden mx-auto max-w-345">
          <div className="flex flex-row w-full items-center justify-between">
            <Link to="/" onClick={() => setFocusSection("")}>
              <img
                src={`${BASE_URL}/daffodils.png`}
                className="w-8 h-8"
                alt="Logo"
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 bg-white">
              <nav className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.section}
                    to={item.to}
                    className={cn(
                      "px-4 py-3 hover:bg-gray-100 hover:text-blue-600 transition-colors",
                      focusSection === item.section
                        ? "text-blue-600 bg-gray-50"
                        : "",
                    )}
                    onClick={() => {
                      setFocusSection(item.section);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Typography.Small className="font-semibold">
                      {item.label}
                    </Typography.Small>
                  </Link>
                ))}
              </nav>

              <div className="flex justify-center gap-4 py-4 border-t border-gray-200">
                <a
                  href="https://github.com/kaydenpham27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="GitHub"
                >
                  <GitHubIcon width="30px" height="30px" fill="#4a4a4a" />
                </a>

                <a
                  href="https://www.linkedin.com/in/kienpham04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon fill={ICON_COLOR} width="30px" height="30px" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      {children}
    </>
  );
};
