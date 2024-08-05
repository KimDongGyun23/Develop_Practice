import styled from "styled-components";

const BoxInput = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid var(--color-grey-300);
  box-shadow: 0 0 5px var(--color-grey-300);
  color: var(--color-grey-500);

  & > input {
    border: none;
    outline: none;
    flex-grow: 1;
  }
`;

export default BoxInput;
