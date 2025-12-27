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
        "inline-flex items-center rounded-sm overflow-hidden border-0 border-blue-500 h-7",
        className,
      )}
    >
      {/* Blue section for label */}
      <Typography.Muted className="bg-blue-500 text-white px-3 py-1.5">
        {label}
      </Typography.Muted>

      {/* White section for count */}
      <Typography.Muted className="bg-gray-200 text-gray-900 px-3 py-1.5 text-sm font-medium">
        {count}
      </Typography.Muted>
    </div>
  );
};
