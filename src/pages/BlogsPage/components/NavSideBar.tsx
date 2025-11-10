import Typography from "@/components/ui/typography";
import { CollapsibleSection } from "./CollapsibleSection";

const sidebarData = {
  title: "Documentation",
  content: [
    {
      title: "Getting Started",
      content: ["Installation", "Quick Start", "Configuration"],
    },
    {
      title: "Components",
      content: [
        {
          title: "Forms",
          content: ["Input", "Button", "Checkbox"],
        },
        {
          title: "Layout",
          content: ["Grid", "Flex", "Container"],
        },
      ],
    },
    {
      title: "API Reference",
      content: ["Methods", "Properties", "Events"],
    },
  ],
};

export const NavSideBar = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Typography.H4> Blogs Hierarchy </Typography.H4>
      <div className="flex flex-col">
        <CollapsibleSection
          title={sidebarData.title}
          content={sidebarData.content}
          depth={0}
        />
      </div>
    </div>
  );
};
