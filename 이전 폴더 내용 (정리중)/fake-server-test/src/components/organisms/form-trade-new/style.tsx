import BoxInputTrade from "@components/molecules/box-input-trade";
import styled from "styled-components";

interface InputNumProps {
  size?: string;
}

export const ListImage = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const InputFile = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  border: 0;
`;

export const Label = styled.label`
  display: block;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid var(--color-grey-300);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  & > svg {
    width: 20px;
    height: 20px;
    color: var(--color-grey-300);
  }
`;

export const BoxImage = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border-radius: 8px;
  flex-shrink: 0;
  position: relative;

  & > img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
  }

  & > svg {
    width: 22px;
    height: 22px;
    top: 8px;
    right: 8px;
    color: var(--color-grey-500);
    position: absolute;
    z-index: 3;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 112px;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.4em;
  border-radius: 12px;
  border: 1px solid var(--color-grey-300);
  outline: none;
  color: var(--color-grey-500);
  padding: 1rem;
`;

export const InputNum = styled(BoxInputTrade)<InputNumProps>`
  width: ${(props) => props.size};
  align-items: center;

  & > input {
    width: 100%;
  }

  & > p {
    padding-left: 0.3rem;
    padding-right: 1rem;
  }
`;

export const LabelPlace = styled.p`
  margin-top: 12px;
`;

export const TextSubmit = styled.p`
  padding: 16px;
`;

export const SectionRadio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & input {
    margin-left: 0;
    margin-right: 7px;
  }
`;

export const ListCategory = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  & > div {
    flex-shrink: 0;
    // display: flex;
    // align-items: center;
    border-radius: 20px;
    font-size: 12px;
    padding: 0.5rem;
    border: 1px solid var(--color-grey-300);
  }
`;
