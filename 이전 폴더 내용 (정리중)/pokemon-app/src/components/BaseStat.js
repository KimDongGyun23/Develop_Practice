import { useEffect, useRef } from "react";
import styled from "styled-components"

const Tr = styled.tr`
  width : 100%;
  color : white;

  & td{
    padding : 0.5rem 1rem;
  }
`;

const FullStat = styled.div`
  height : 1rem;
  display : flex;
  align-items : flex-start;
  overflow : hidden;
  width : 100%;
  min-width : 10rem;
  border-radius : 3rem;
  background-color : gray;
`;

const CurrentStat = styled.div`
  background-color : var(--${props=>props._color});
  height : 1.5rem;
`;

export const BaseStat = ({type, nameStat, valueStat}) => {
  const ref = useRef(null);

  useEffect(()=>{
    const setValueStat = ref.current;
    const calc = valueStat * (100 / 255);
    setValueStat.style.width = calc + '%';
  },[])

  return (
    <Tr>
      <td>{nameStat}</td>
      <td>{valueStat}</td>
      <td>
        <FullStat>
          <CurrentStat _color={type} ref={ref} />
        </FullStat>
      </td>
      <td>255</td>
    </Tr>
  )
}
