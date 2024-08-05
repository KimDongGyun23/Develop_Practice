import axios from "axios";
import { useEffect, useState } from "react"
import styled from "styled-components"
import { LazyImage } from "./LazyImage";
import { Link } from "react-router-dom";

const BackGround = styled.div`
  width : 15rem;
  background-color : #283549;
  border-radius : 0.5rem;
  overflow : hidden;
  text-align : center;
  transition : transform 0.2s;

  &:hover {
    transform : scale(1.05);
  }
`;

const PokemonId = styled.div`
  text-align : right;
  padding : 0.3rem;
  color : var(--${props => props.color});
`;

const PokemonName = styled.div`
  padding : 0.3rem;
  font-weight : 700;
  color : white;
  text-align : center;
  text-transform : uppercase;
  background-color : var(--${props => props.color});
`;

const PokemonImg = styled.div`
  height : 11rem;
`;

const LoadingText = styled.h2`
  color : white;
  font-weight : 700;
  font-size : 1.3rem;
  line-height : 5rem;
`;

export const Card = ({ url, name })=>{
  const [pokemon, setPokemon] = useState();
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`;


  useEffect(()=>{
    fetchPokeDetailData(url);
  }, [url])

  async function fetchPokeDetailData(url) {
    try{
      const response = await axios.get(url);
      const pokemonData = formatPokemonData(response.data);
      setPokemon(pokemonData);
    } catch (err){
      console.error(err);
    }
  }

  function formatPokemonData(params) {
    const { id, types, name } = params;
    const PokeData = {
      id,
      name,
      type : types[0].type.name,
    }
    return PokeData;
  }

  return(
    <BackGround>
      <Link aria-label={name} to={`/pokemon/${name}`}>
        {
          pokemon ? (
            <>
            <PokemonId color={pokemon?.type} >#{pokemon.id.toString().padStart(3, '00')}</PokemonId>
            
            <PokemonImg>
              <LazyImage url={img} alt={name} />
            </PokemonImg>

            <PokemonName color={pokemon?.type}>
                {pokemon.name}
            </PokemonName>
            </>
          ) : (
            <LoadingText>...loading</LoadingText>
          )
        }
      </Link>
    </BackGround>
  )
}