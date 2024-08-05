import { ChildrenProps } from "@/app/_types/common";

export const PrimaryText = ({ children }: ChildrenProps) => {
  return <p className="font-bold text-lg">{children}</p>;
};

export const SecondaryText = ({ children }: ChildrenProps) => {
  return <p className="text-base">{children}</p>;
};
