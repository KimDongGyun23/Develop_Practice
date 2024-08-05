import { ReactNode } from "react";
import * as S from "./style";
import { IoIosClose } from "react-icons/io";

interface TagType {
  search: boolean;
  children: ReactNode;
}

const Tag = ({ search, children }: TagType) => {
  return (
    <S.Container>
      {children}

      {search && <IoIosClose />}
    </S.Container>
  );
};

export default Tag;
