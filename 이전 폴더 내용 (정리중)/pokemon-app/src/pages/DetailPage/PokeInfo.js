import styled from "styled-components";
import { Balance } from '../../assets/Balance';
import { Vector} from '../../assets/Vector'

const Container = styled.div`
  display : flex;
  align-items : center;
  justify-content : space-between;
  width : 100%;
  max-width : 400px;
  text-align : center;
`;

const InfoBox = styled.div`
  width : 100%;
  color : white;

  &>div{
    display : flex;
    justify-content : center;
    margin-top : 1rem;
    gap : 2rem;
  }
`;


const PokeInfo = ({pokemon}) => {
  return (
    <Container>
      <InfoBox>
        <h4>Weight</h4>
        <div>
          <Balance />
          {pokemon.weight} kg
        </div>
      </InfoBox>

      <InfoBox>
        <h4>Height</h4>
        <div>
          <Vector />
          {pokemon.height} m
        </div>
      </InfoBox>

      <InfoBox>
        <h4>Moves</h4>
        {pokemon.abilities.map((ability, index)=>(<div key={ability}>{ability}</div>))}
      </InfoBox>

    </Container>
  )
}

export default PokeInfo