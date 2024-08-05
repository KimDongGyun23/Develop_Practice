import * as S from "./style";
import BoxHeader from "@components/atoms/box-header";
import Search from "../search";

const HeaderSearch = () => {
  return (
    <>
      <BoxHeader>
        <S.SearchBox>
          <Search />
        </S.SearchBox>

        <S.Cancle>취소</S.Cancle>
      </BoxHeader>
    </>
  );
};

export default HeaderSearch;
