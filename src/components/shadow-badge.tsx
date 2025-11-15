import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ShadowBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export const ShadowBadge = ({ children, className }: ShadowBadgeProps) => {
  return (
    <Badge
      className={cn(
        "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-200",
        className,
      )}
    >
      {children}
    </Badge>
  );
};
