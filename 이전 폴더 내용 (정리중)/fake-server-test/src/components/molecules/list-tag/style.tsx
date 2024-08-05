import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  & > div {
    flex-shrink: 0;
  }
`;
