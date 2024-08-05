import { ChildrenProps } from "@/app/_types/common";

export const GroupContainer = ({ children }: ChildrenProps) => {
  return <div className="flexColumn gap-[10px]">{children}</div>;
};

export const Label = ({ children }: ChildrenProps) => {
  return <p className="text-lg font-bold">{children}</p>;
};
