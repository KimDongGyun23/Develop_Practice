import * as S from "./style";
import ListTag from "@components/molecules/list-tag";
import HeaderLogo from "@components/molecules/header-logo";
import Search from "@components/molecules/search";
import BoxTradeItem from "@components/molecules/box-trade-item";
import Nav from "@components/molecules/nav";

const PageTrade = () => {
  return (
    <>
      <HeaderLogo />

      <S.SectionSearch>
        <Search />
      </S.SectionSearch>

      <ListTag />

      <BoxTradeItem />

      <Nav />
    </>
  );
};

export default PageTrade;
