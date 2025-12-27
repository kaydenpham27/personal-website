import { SiInstagram } from "@icons-pack/react-simple-icons";

type InstagramIconProps = {
  className?: string;
};

export const InstagramIcon = ({ className }: InstagramIconProps) => {
  return (
    <a className={className} href="https://www.instagram.com/farm.loyal/">
      <SiInstagram />
    </a>
  );
};
