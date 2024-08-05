import { ChildrenProps } from "../_types/common";

const Tag = ({ children }: ChildrenProps) => {
  return (
    <div className="inline-block px-3 py-1 rounded-full bg-gray-300 font-medium">
      {children}
    </div>
  );
};

export default Tag;
