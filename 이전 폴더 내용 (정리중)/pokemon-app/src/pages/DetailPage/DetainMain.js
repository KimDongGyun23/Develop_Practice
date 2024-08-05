import styled from "styled-components";
import Type from "../../components/Type";
import PokeInfo from "./PokeInfo";
import PokeStat from "./PokeStat";
import PokeSprite from "./PokeSprite";

const Container = styled.section`
  width : 100%;
  box-sizing : border-box;
  min-hight : 65%;
  background-color : #2a3544;
  display : flex;
  flex-direction : column;
  align-items : center;
  gap : 3rem;
  padding : 14rem 5rem 4rem 5rem;
`;

const PokeType = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  gap : 4rem;
`;

const Label = styled.h2`
  color : var(--${props => props._color});
  font-weight : 700;
`;

const Description = styled.p`
  max-width : 30rem;
  text-align : center;
  color : white;
  line-height : 2rem;
`;


const DetainMain = ({pokemon}) => {
  return (
    <Container>
      <PokeType>
        {pokemon.types.map((type)=>
          (<Type key={type} type={type}/>))}
      </PokeType>

      <Label _color={pokemon?.types?.[0]}>정보</Label>
      <PokeInfo pokemon={pokemon} />

      <Label _color={pokemon?.types?.[0]}>기본 능력치</Label>
      <PokeStat pokemon={pokemon} />

      <Label _color={pokemon?.types?.[0]}>설명</Label>
      <Description>{pokemon.description}</Description>

      <PokeSprite pokemon={pokemon} />
    </Container>
  )
}

export default DetainMain