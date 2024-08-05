import StateTrade from "@components/atoms/state-trade";
import * as S from "./style";

const BoxTradeItem = () => {
  return (
    <S.Container>
      <S.BoxImage>image</S.BoxImage>

      <S.BoxText>
        <S.SectionTitle>
          <p>name</p>
          <div>time</div>
        </S.SectionTitle>

        <StateTrade />

        <S.SectionPrice>
          <p>16,500원</p>
          <S.BoxState>거래중</S.BoxState>
        </S.SectionPrice>
      </S.BoxText>
    </S.Container>
  );
};

export default BoxTradeItem;
