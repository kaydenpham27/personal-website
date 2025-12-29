import { Mail } from "lucide-react";

type MailIconProps = {
  className?: string;
  fill?: string;
};

export const MailIcon = ({ className, fill }: MailIconProps) => {
  return (
    <a href="mailto:kienpt5kkd@gmail.com" className={className}>
      <Mail width={20} />
    </a>
  );
};
