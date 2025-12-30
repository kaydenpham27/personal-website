import { ICON_COLOR } from "@/constants/color";
import { SiCodeforces } from "@icons-pack/react-simple-icons";

type CodeforcesIconProps = {
  className?: string;
  fill?: string;
};

export const CodeforcesIcon = ({ className, fill }: CodeforcesIconProps) => {
  return (
    <a className={className} href="https://codeforces.com/profile/UWR_Pham">
      <SiCodeforces width={20} fill={fill || ICON_COLOR} />
    </a>
  );
};
