import Typography from "@/components/ui/typography";
import { ChevronDown, ChevronRight } from "lucide-react";
import React from "react";
import { AnimatePresence, motion } from "motion/react";

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2"
      >
        <div
          className="flex flex-row justify-between items-center w-full cursor-pointer group"
          onClick={() => setOpen(!open)}
        >
          <Typography.Large
            className={`${getPadLeft(depth)} group-hover:text-blue-600 transition-colors`}
          >
            {title}
          </Typography.Large>
          <motion.div
            animate={{ rotate: open ? 0 : -90 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <ChevronDown className="group-hover:text-blue-600 hover:brightness-125" />
          </motion.div>{" "}
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden space-y-2"
            >
              {content.map((cell, index) => {
                if (typeof cell === "string") {
                  return (
                    <div
                      key={index}
                      className={`${getPadLeft(depth + 1)} flex flex-row hover:text-blue-600 cursor-pointer transition-colors`}
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
