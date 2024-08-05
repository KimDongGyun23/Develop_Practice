import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.color ? "var(--color-green-500)" : "var(--color-grey-500)"};
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  width: 100%;
`;

export default Button;
