import { Menu as MenuIcon, UserRound as UserIcon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './shadcn/ui/dropdown-menu';

export default function Menu() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <span className="space-x-4 rounded-full border p-4 transition-shadow duration-150 hover:shadow-md">
          <MenuIcon className="inline size-6" />
          <UserIcon className="inline size-6" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        <DropdownMenuItem className="font-medium">
          <a href="https://pantip.com/login">เข้าสู่ระบบ / สมัครสมาชิก</a>
        </DropdownMenuItem>
        <DropdownMenuItem className="font-medium">
          <a href="https://pantip.com/forum/new_topic">ตั้งกระทู้</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="https://pantip.com">หน้าแรก</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://pantip.com/home/feed">My Feed</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://pantip.com/home/pick">Pantip Pick</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://pantip.com/home/hitz">Pantip Hitz</a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://pantip.com/home/communities">Explore</a>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <a href="https://pantip.com/point" target="_blank">
            แลก พ้อย
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="https://pantip.com/activities" target="_blank">
            กิจกรรมพันทิป
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
