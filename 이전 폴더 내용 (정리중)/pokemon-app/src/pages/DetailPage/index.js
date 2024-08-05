import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LessThan } from '../../assets/LessThan';
import { GreaterThan } from '../../assets/GreaterThan';
import styled from 'styled-components';
import DamageModal from '../../components/DamageModal';
import { Loading } from '../../assets/Loading';
import DetailHeader from './DetailHeader';
import DetainMain from './DetainMain';

const Container = styled.article`
  display : flex;
  flex-direction : column;
  gap : 1rem;
`;

const Inner = styled.div`
  background-color : var(--${props => props._bg});
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : flex-end;
  position : relative;
  overflow : hidden;
`;

const LeftArrow = styled(LessThan)`
  width : 5rem;
  height : 8rem;
  padding : 1rem;
`;

const RightArrow = styled(GreaterThan)`
  width : 5rem;
  height : 8rem;
  padding : 1rem;
`;


const LeftLink = styled(Link)`
  position : absolute;
  top : 40%;
  left : 1rem;
`; 

const RightLink = styled(Link)`
  position : absolute;
  top : 40%;
  right : 1rem;
`; 

const LoadingBox = styled.div`
  position : absolute;
  top : 33%;
  transform : translateX(-50%);
  left : 50%;
`;

const AniLoading = styled(Loading)`
  width : 12rem;
  height : 12rem;
  animation : rotate 3s;

  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

function DetailPage() {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const params = useParams();
  const pokemonId = params.id;
  const baseUrl = `https://pokeapi.co/api/v2/pokemon/`; 

  useEffect(()=>{
    setIsLoading(true);
    fetchPokemonData(pokemonId);
  }, [pokemonId])

  async function fetchPokemonData(id){
    const url = `${baseUrl}${id}`;
    try {
      const {data : pokemonData} = await axios.get(url);
      
      if (pokemonData){
        const {name, id, types, weight, height, stats, abilities, sprites} = pokemonData;
        const nextAndPreviousPokemon = await getNextAndPreviousPokemon(id);
        
        const DamageRelations = await Promise.all(
          types.map(async (i)=> {
            const type = await axios.get(i.type.url);
            return type.data.damage_relations
          })
        )

        const formattedPokemonData = {
          id,
          name,
          abilities: formatPokemonAblities(abilities),
          DamageRelations,
          weight : weight / 10,
          height : height / 10,
          stats : formatPokemonStats(stats),
          types : types.map((i)=>i.type.name),
          previous : nextAndPreviousPokemon.previous,
          next : nextAndPreviousPokemon.next,
          sprites : formatPokemonSprites(sprites),
          description : await getPokemonDescription(id),
        }
        setPokemon(formattedPokemonData);
        setIsLoading(false);
      }

    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  const formatPokemonAblities = (abilities)=>{
    return abilities
      .filter((_, index) => index <= 1)
      .map((obj)=>obj.ability.name.replaceAll('-', ' '));
  }

  const formatPokemonStats = ([
    statHP,
    statATK,
    statDEP,
    statSATK,
    statSDEP,
    statSPD,
  ])=> [
    { name : 'Hit Points', baseStat : statHP.base_stat },
    { name : 'Attack', baseStat : statATK.base_stat },
    { name : 'Defense', baseStat : statDEP.base_stat },
    { name : 'Special Attack', baseStat : statSATK.base_stat },
    { name : 'Special Defense', baseStat : statSDEP.base_stat },
    { name : 'Speed', baseStat : statSPD.base_stat },
  ]

  const formatPokemonSprites = (sprites) => {
    const newSprites = {...sprites};
    Object.keys(newSprites).forEach(key=> {
      if(typeof newSprites[key] !== 'string'){
        delete newSprites[key];
      }
    });

    return Object.values(newSprites);
  }

  const filterAndFormatDescriptions = (flavorText) => {
    const koreanDescriptions = flavorText
      ?.filter((i)=>i.language.name === 'ko')
      .map((i)=>i.flavor_text.replace(/\r|\n|\f/g, ' '));
    return koreanDescriptions
  }

  const getPokemonDescription = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    const { data : pokemonSpecies } = await axios.get(url);

    const descriptions = filterAndFormatDescriptions(pokemonSpecies.flavor_text_entries);

    return descriptions[Math.floor(Math.random() * descriptions.length)]
  }

  async function getNextAndPreviousPokemon(id){
    const urlPokemon = `${baseUrl}?limit=1&offset=${id-1}`;
    // prev 와 next pokemon의 정보를 알 수 있는 url을 가지기 위해 요청을 보냄
    const {data : pokemonData} = await axios.get(urlPokemon);
    //pokemonData에 pokemon url이 담김

    const nextResponse = pokemonData.next && (await axios.get(pokemonData?.next))

    const previousResponse = pokemonData.previous && (await axios.get(pokemonData?.previous));
    // pokemon 데이터를 url을 통해 다 가져옴

    return {
      next : nextResponse?.data?.results?.[0]?.name,
      previous : previousResponse?.data?.results?.[0]?.name,
    }

  }

  if (isLoading){
    return(
      <LoadingBox>
        <AniLoading />
      </LoadingBox>
    )
  }

  if (!isLoading && !pokemon) { return ( <div>Not Found...</div> )}

  return (
    <Container>
      <Inner _bg={pokemon?.types?.[0]}>
        {pokemon.previous && (
          <LeftLink
            aria-label={`Previous pokemon`}
            to={`/pokemon/${pokemon.previous}`}
          >
            <LeftArrow />
          </LeftLink>
        )}
        {pokemon.next && (
          <RightLink
            aria-label={`Next pokemon`}
            to={`/pokemon/${pokemon.next}`}
          >
            <RightArrow />
          </RightLink>
        )}

        <DetailHeader 
          pokemon={pokemon}
          setIsModalOpen={setIsModalOpen}
        />

        <DetainMain pokemon={pokemon} />


        {isModalOpen ? 
          <DamageModal
            damages={pokemon.DamageRelations}
            setIsModalOpen={setIsModalOpen}
          />
          : null
        }


      </Inner>
    </Container>
  )
}

export default DetailPage