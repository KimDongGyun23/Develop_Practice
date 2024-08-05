import { Link } from "react-router-dom";
import styled from "styled-components";
import { ArrowLeft } from '../../assets/ArrowLeft'

const Container = styled.section`
  width : 100%;
  hight : 100%;
  display : flex;
  flex-direction : column;
  justify-content : flex-end;
  align-items : center;
  position : relative;
`;

const InfoBox = styled.div`
  width : 100%;
  box-sizing : border-box;
  position : absolute;
  top : 3rem;
  display : flex;
  align-items : center;
  justify-content : space-between;
  padding : 0 2rem;
`;

const PokemonId = styled.div`
  color : white;
  font-weight : 700;
  font-size : 1.5rem;
`;

const PokemonName = styled.div`
  display : flex;
  align-items : center;
  gap : 1rem;

  & h1{
    color : white;
    font-weight : 700;
    font-size : 2rem;
  }
`;

const LeftArrow = styled(ArrowLeft)`
  width : 2rem;
  hight : 3rem;
  color : white;
`;

const ImgBox = styled.div`
  position : relative;
  height : auto;
  max-width : 15.5rem;
  margin-top : 6rem;
  margin-bottom : -7rem;
`;



const DetailHeader = ({pokemon, setIsModalOpen}) => {
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`;

  return (
    <Container>
      <InfoBox>
        <PokemonName>
          <Link to="/">
            <LeftArrow />
          </Link>
          <h1>
            {pokemon.name}
          </h1>
        </PokemonName>

        <PokemonId>
          #{pokemon.id.toString().padStart(3, '00')}
        </PokemonId>
      </InfoBox>

      <ImgBox>
        <img
          width="100%"
          height="auto"
          src={img}
          loading="lazy"
          alt={pokemon.name}
          onClick={()=>setIsModalOpen(true)}
        />
      </ImgBox>
    </Container>
  )
}

export default DetailHeader