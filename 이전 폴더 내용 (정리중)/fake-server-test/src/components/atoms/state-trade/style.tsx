import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2px;

  & > div {
    width: 9px;
    height: 9px;
    background-color: var(--color-green-300);
  }

  & > p {
    font-size: 10px;
    color: var(--color-grey-500);
  }
`;
