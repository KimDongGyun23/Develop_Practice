import BoxHeader from "@components/atoms/box-header";
import BoxIcon from "@components/atoms/box-icon";
import { IoIosClose } from "react-icons/io";
import { ChildrenType } from "src/types/shared";

const HeaderText = ({ children }: ChildrenType) => {
  return (
    <BoxHeader>
      <BoxIcon />
      <div>{children}</div>
      <BoxIcon>
        <IoIosClose />
      </BoxIcon>
    </BoxHeader>
  );
};

export default HeaderText;
