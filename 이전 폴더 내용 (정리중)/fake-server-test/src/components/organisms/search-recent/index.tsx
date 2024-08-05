import ListTag from "@components/molecules/list-tag";
import * as S from "./style";

const SearchRecent = () => {
  return (
    <S.Container>
      <S.Title>
        <h4>최근 검색어</h4>
        <p>지우기</p>
      </S.Title>

      <ListTag search />
    </S.Container>
  );
};

export default SearchRecent;
