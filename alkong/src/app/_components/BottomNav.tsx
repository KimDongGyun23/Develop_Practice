"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const NAV_ITEM = ["홈", "진료", "가나다", "건강", "약"];

const NavItem = ({ item, url }: { item: string; url: string }) => {
  return (
    <Link href={url}>
      <div className="flexColumnAlign gap-1 px-1">
        <div className="w-8 h-8 bg-[#B3B3B3] rounded-full" />
        <div>{item}</div>
      </div>
    </Link>
  );
};

const BottomNav = () => {
  const route = useRouter();
  return (
    <div className="relative flex-shrink-0 h-[96px] bg-[#E6E6E6]">
      <div className="absolute -top-4 right-0 left-0 flex items-end  ">
        <div className="flex-1 flex justify-evenly">
          <NavItem item={NAV_ITEM[0]} url="/home" />
          <NavItem item={NAV_ITEM[1]} url="/care" />
        </div>
        <Link href="/family" className="flexColumnAlign ">
          <div className="flexCenter bg-[#E6E6E6] w-16 h-16 rounded-full">
            <div className="w-12 h-12 bg-[#B3B3B3] rounded-full" />
          </div>
          <div>가나다</div>
        </Link>

        <div className="flex-1 flex justify-evenly">
          <NavItem item={NAV_ITEM[3]} url="/health" />
          <NavItem item={NAV_ITEM[4]} url="/" />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
