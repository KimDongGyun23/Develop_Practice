import * as S from "./style";

interface ListPriceProps {
  list: string[];
}

const ListPrice = ({ list }: ListPriceProps) => {
  return (
    <S.Container>
      {list.map((element, index) => (
        <S.TagPrice key={index}>
          <p>{element}</p>
        </S.TagPrice>
      ))}
    </S.Container>
  );
};

export default ListPrice;
