import { useState } from "react"
import styled from "styled-components";

const Form = styled.form`
  display : flex;
  justify-content : center;
  margin-bottom : 2rem;
`;

const InputField = styled.input`
  background-color : #69778b;
  color : #BCC8D4;
  border : none;
  font-size : 1.5rem;
  padding : 0.5rem 1rem;
  border-radius : 0.5rem 0 0 0.5rem;

  &::placeholder{
    color : #BCC8D4;
  }
`;

const BtnSubmit = styled.button`
  background-color : #1e263b;
  color : #949eaa;
  border : none;
  font-size : 1.7rem;
  padding : 0.5rem 1rem;
  border-radius : 0 0.5rem 0.5rem 0;
`;

const ListBox = styled.div`
  width : 15%;
  margin : 0 auto;
  display : flex;
  flex-direction : column;
  align-items : center;
  transform : translateY(-2rem);
  text-align : center;
  background-color : #283549;
  max-height : 10rem;
  overflow : auto;
`;

const BtnAuto = styled.button`
  border : none;
  padding : 0.3rem;
  color : #BCC8D4;
  background-color : inherit;
`;


export default function Autocomplete( {allPokemons, setDisplayPokemons} ) {
  const [searchTerm, setSearchTerm] = useState('');

  // handleSubmit
  const handlSubmit = (e) => {
    e.preventDefault();

    let text = searchTerm.trim();
    setDisplayPokemons(filterNames(text));
    setSearchTerm('');
  }

  // filterNames
  const filterNames = (input) => {
    const value = input.toLowerCase();
    return value
      ? allPokemons.filter((e)=>e?.name.includes(value))
      : []
  }

  // checkEqualName
  function checkEqualName(input){
    const filteredArray = filterNames(input);
    // 검색하는 것에 정확히 일치하는 포켓몬 이름이 있으면 autocomplete 없애기
    return filteredArray[0]?.name === input ? [] : filteredArray;
  }

  return (
    <div>
      <Form onSubmit={handlSubmit}>
        <InputField 
          type="text"
          onChange={((e) => setSearchTerm(e.target.value))}
          value={searchTerm}
          placeholder="포켓몬 이름 검색"
        />
        <BtnSubmit type="submit"><i className="fa-solid fa-magnifying-glass" /></BtnSubmit>
      </Form>

      {checkEqualName(searchTerm).length > 0 && (
        <ListBox>
          <ul>
            {checkEqualName(searchTerm).map((e, i) => (
              <li key={`button-${i}`}>
                <BtnAuto
                  aria-label={e.name}
                  onClick={()=>setSearchTerm(e.name)}
                >
                  {e.name}
                </BtnAuto>
              </li>
            ))}
          </ul>
        </ListBox>
      )}
    </div>
  )
}
