import BoxInput from "@components/atoms/box-input";
import styled from "styled-components";

const BoxInputTrade = styled(BoxInput)`
  height: 51px;
  box-shadow: none;

  & > input {
    margin: 0 1rem;
  }
`;

export default BoxInputTrade;
