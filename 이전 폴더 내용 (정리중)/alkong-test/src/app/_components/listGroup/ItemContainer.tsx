import { ChildrenProps } from "@/app/_types/common";

export const ItemContainer = ({ children }: ChildrenProps) => {
  return (
    <div className="flexColumn px-5 py-3 gap-2 bg-[#E6E6E6] rounded-xl">
      {children}
    </div>
  );
};

export const BetweenLayout = ({ children }: ChildrenProps) => {
  return <div className="flexBetweenAlign">{children}</div>;
};
