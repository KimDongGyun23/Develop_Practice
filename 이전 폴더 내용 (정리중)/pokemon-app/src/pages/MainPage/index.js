import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import styled from 'styled-components';
import Autocomplete from '../../components/Autocomplete';

const Container = styled.div`
  padding : 3rem;
  background-color : #BCC8C1;
  min-height : 100vh;
  box-sizing : border-box;
`;

const CardList = styled.div`
  display : flex;
  flex-wrap : wrap;
  gap : 1rem;
  justify-content : center;
`;

const ShowMore = styled.div`
  text-align : center;
  margin-top : 1rem;
`;

const BtnShowMore = styled.button`
  background-color : #283549;
  border-radius : 0.5rem;
  padding : 0.5rem 1rem;
  color : white;
  font-weight : 700;
`;

function MainPage() {
  // 모든 포켓몬 데이터를 가지고 있는 State
  const [allPokemons, setAllPokemons] = useState([]);
  // 실제로 리스트로 보여주는 포켓몬 데이터를 가지고 있는 State
  const [displayedPokemons, setDisplayPokemons] = useState([]);
  // 한번에 보여주는 포켓몬 수
  const limitNum = 20;
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=1008=&offset=0`;

  // 이 함수를 이용해서 limitNum 만큼 displayedPokemons state에 포켓몬 추가
  function filterDisplayedPokemonData(allPokemonsData, displayedPokemons = []){
    const limit = displayedPokemons.length + limitNum;
    // 모든 포켓몬 데이터에서 limitNum 만큼 더 가져오기
    const array = allPokemonsData.filter((_, index)=> index+1 <= limit)

    return array;
  }


  useEffect(()=>{
    fetchPokeData();
  }, [])

  const fetchPokeData = async ()=> {
    try{
      const response = await axios.get(url);
      setAllPokemons(response.data.results);
      setDisplayPokemons(filterDisplayedPokemonData(response.data.results))
    } catch (error){
      console.error(error);
    }
  }

  return (
    <Container>
      <Autocomplete
        allPokemons={allPokemons}
        setDisplayPokemons={setDisplayPokemons}
      />

      <CardList>
        {
          displayedPokemons.length > 0 ? (
            displayedPokemons.map(({name, url})=>(
              <Card 
                key={url}
                name={name}
                url={url}
              />
            ))
          ) : (
            <h2>포켓몬이 없습니다.</h2>
          )
        }
      </CardList>

      <ShowMore>
        {(allPokemons.length > displayedPokemons.length) && (displayedPokemons.length !== 1) && (
          <BtnShowMore 
            onClick={()=>setDisplayPokemons(filterDisplayedPokemonData(allPokemons, displayedPokemons))}
          >더보기</BtnShowMore>
        )}
      </ShowMore>
    </Container>
  );
}

export default MainPage;
