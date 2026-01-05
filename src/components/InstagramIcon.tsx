import { ICON_COLOR } from "@/constants/color";
import { SiInstagram } from "@icons-pack/react-simple-icons";

type InstagramIconProps = {
  className?: string;
  fill?: string;
  width?: string;
};

export const InstagramIcon = ({
  className,
  fill,
  width,
}: InstagramIconProps) => {
  return (
    <a className={className} href="https://www.instagram.com/farm.loyal/">
      <SiInstagram width={width || 20} fill={fill || ICON_COLOR} />
    </a>
  );
};
