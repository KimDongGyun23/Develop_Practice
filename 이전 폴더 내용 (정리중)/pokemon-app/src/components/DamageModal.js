import styled from "styled-components"
import DamageRelations from "./DamageRelations"
import { useRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Outer = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  position : fixed;
  z-index : 50;
  left : 0;
  bottom : 0;
  width : 100%;
  height : 100%;
  background-color : #2a3544;
`;

const Inner = styled.div`
  background-color : white;
  width : 50%;
  border-radius : 3rem;
`;

const Container = styled.div`
  display : flex;
  flex-direction : column;
  align-items : flex-start;
  padding : 3rem;
`;

const ModalHeader = styled.div`
  display : flex;
  align-items : center;
  width : 100%;
  justify-content : space-between;
  margin-bottom : 1rem;
`;

const Text = styled.div`
  color : #2a3544;
  font-size : 1.5rem;
  font-weight : 700;
`;

const Exit = styled.span`
  color : #2a3544;
  font-size : 1.5rem;
  font-weight : 700;
  cursor : pointer;
`;

const DamageModal = ({damages, setIsModalOpen}) => {
  const ref = useRef();
  useOnClickOutside(ref, ()=>setIsModalOpen(false));

  return (
    <Outer>
      <Inner ref={ref}>
        <Container>
          <ModalHeader>
            <Text>데미지 관계</Text>
            <Exit onClick={()=>setIsModalOpen(false)}> X </Exit>
          </ModalHeader>
          <DamageRelations damages={damages} />
        </Container>
      </Inner>
    </Outer>
  )
}

export default DamageModal