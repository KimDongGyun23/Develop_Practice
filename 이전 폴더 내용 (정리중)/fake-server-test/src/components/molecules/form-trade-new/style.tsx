import styled from "styled-components";

export const Form = styled.form`
  & .form-group {
    font-size: 16px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid var(--color-grey-300);
    padding: 0.7rem 1rem;
  }

  & label {
    font-weight: 700;
  }
`;

export const GroupTitle = styled.div`
  & input {
    width: 100%;
  }
`;

interface GroupFlexProps {
  reverse?: string;
}

export const GroupFlex = styled.div<GroupFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.reverse};

  & input {
    margin-left: 1rem;
    flex-grow: 1;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.4em;
  border: none;
`;

export const BtnUpload = styled.button`
  background-color: var(--color-green-500);
  color: var(--color-grey-700);
  font-size: 16px;
  margin-right: 1rem;
`;
