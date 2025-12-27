import { SiCodeforces } from "@icons-pack/react-simple-icons";

type CodeforcesIconProps = {
  className?: string;
};

export const CodeforcesIcon = ({ className }: CodeforcesIconProps) => {
  return (
    <a className={className} href="https://codeforces.com/profile/UWR_Pham">
      <SiCodeforces />
    </a>
  );
};
