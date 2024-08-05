import * as S from "./style";
import Tag from "@components/atoms/tag";
import { categories } from "src/data/categories";

interface ListTagProps {
  search?: boolean;
}

const ListTag = ({ search }: ListTagProps) => {
  return (
    <S.Container>
      {categories.map((category, index) => (
        <Tag search={search ? search : false} key={index}>
          {category}
        </Tag>
      ))}
    </S.Container>
  );
};

export default ListTag;
