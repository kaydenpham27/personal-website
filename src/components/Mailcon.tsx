import { Mail } from "lucide-react";

type MailIconProps = {
  className?: string;
};

export const MailIcon = ({ className }: MailIconProps) => {
  return (
    <a href="mailto:kienpt5kkd@gmail.com" className={className}>
      <Mail />
    </a>
  );
};
