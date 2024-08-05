import styled from "styled-components";

const Container = styled.div`
  display : flex;
  margin : 0 4rem;
  flex-wrap : wrap;
  justify-content : center;
`;

const PokeSprite = ({pokemon}) => {
  return (
    <Container>
      {
        pokemon.sprites.map((spriteUrl)=>(
          <img
            key={spriteUrl}
            src={spriteUrl}
            alt="sprite"
          />
        ))
      }
    </Container>
  )
}

export default PokeSprite