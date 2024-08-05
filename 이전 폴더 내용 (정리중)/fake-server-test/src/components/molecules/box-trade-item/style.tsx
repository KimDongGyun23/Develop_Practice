import styled from "styled-components";

export const Container = styled.div`
  width: 163.5px;
  height: 232px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BoxImage = styled.div`
  width: 100%;
  height: 163px;
  border-radius: 10px;
  box-shadow: inset 0 0 20px red;
`;

export const BoxText = styled.div`
  height: 63px;
  padding: 0 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    font-size: 12px;
    font-weight: 700;
  }
  & > div {
    font-size: 9px;
    color: var(--color-grey-500);
  }
`;

export const SectionPrice = styled.div`
  display: flex;
  gap: 6px;

  & > p {
    line-height: 146.7%;
    font-size: 15px;
  }
`;

export const BoxState = styled.div`
  width: 38px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border-radius: 5px;
  padding: 3px 5px;
`;
