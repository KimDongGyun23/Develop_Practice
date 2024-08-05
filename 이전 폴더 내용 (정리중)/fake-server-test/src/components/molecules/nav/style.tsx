import styled from "styled-components";

export const BoxNav = styled.div`
  height: 86px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 25px;
  box-shadow: 0 0 3px var(--color-grey-500);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const BoxItem = styled.div`
  min-width: 38.2px;
  height: 51px;
  text-align: center;

  & > p {
    margin-top: 10px;
    font-size: 10px;
  }
`;
