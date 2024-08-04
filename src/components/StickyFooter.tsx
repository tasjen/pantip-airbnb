import { UserRound } from 'lucide-react';

type Props = {
  className?: string;
};

export default function StickyFooter({ className = '' }: Props) {
  return (
    <a
      href="https://pantip.com/login"
      className={`sticky bottom-0 flex flex-col items-center border-t bg-background p-2 ${className} md:hidden`}
    >
      <UserRound className="size-8 opacity-80" />
      <p className="text-sm">เข้าสู่ระบบ</p>
    </a>
  );
}
