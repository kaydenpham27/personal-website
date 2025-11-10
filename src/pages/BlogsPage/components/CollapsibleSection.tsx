import Typography from "@/components/ui/typography";
import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";

type CollapsibleSectionContent = {
  title: string;
  content: CollapsibleSectionContent[] | string[];
};

type CollapsibleSectionProps = {
  title: string;
  content: CollapsibleSectionContent[] | string[];
  depth: number;
};

export const CollapsibleSection = ({
  title,
  content,
  depth,
}: CollapsibleSectionProps) => {
  // Map depth to specific Tailwind classes
  const getPadLeft = (depth: number) => {
    const paddingClasses: Record<number, string> = {
      0: "pl-0",
      1: "pl-5",
      2: "pl-10",
      3: "pl-15",
      4: "pl-20",
    };
    return paddingClasses[depth] || "pl-20"; // fallback for deep nesting
  };

  const [open, setOpen] = React.useState(true);

  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <Typography.Large className={getPadLeft(depth)}>
          {title}
        </Typography.Large>
        {open && (
          <ChevronDown
            className="transition-transform"
            onClick={() => setOpen(!open)}
          />
        )}
        {!open && (
          <ChevronRight
            className="transition-transform"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open &&
        content.map((cell, index) => {
          if (typeof cell === "string") {
            return (
              <div
                key={index}
                className={`${getPadLeft(depth + 1)} flex flex-row`}
              >
                <Typography.Medium>{cell}</Typography.Medium>
              </div>
            );
          } else {
            return (
              <CollapsibleSection
                key={index}
                title={cell.title}
                content={cell.content}
                depth={depth + 1}
              />
            );
          }
        })}
    </>
  );
};
