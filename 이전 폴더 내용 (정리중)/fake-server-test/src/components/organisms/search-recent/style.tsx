import styled from "styled-components";

export const Container = styled.div`
  margin: 3rem 0;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  & h4 {
    font-size: 20px;
    font-weight: 700;
  }

  & p {
    color: var(--color-grey-500);
  }
`;
