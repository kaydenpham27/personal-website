import { cn } from "@/lib/utils";
import Typography from "./ui/typography";

type TagProps = {
  label: string;
  count: number;
  className?: string;
};

export const Tag = ({ className, label, count }: TagProps) => {
  return (
    <div
      className={cn(
        "flex flex-row items-center rounded-[4px] overflow-hidden h-5",
        className,
      )}
    >
      {/* Blue section for label */}
      <Typography.Small className="bg-blue-500 text-white px-3 py-1.5">
        {label}
      </Typography.Small>

      {/* White section for count */}
      <Typography.Small className="bg-gray-200 text-gray-900 px-3 py-1.5 text-sm font-medium">
        {count}
      </Typography.Small>
    </div>
  );
};
