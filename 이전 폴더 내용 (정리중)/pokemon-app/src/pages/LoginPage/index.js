import styled from "styled-components"

const Container = styled.section`
  background-color : #92c4d0;
  min-height : 95vh;
  display : flex;
  align-items : center;
  justify-content : center;
`;

const InnerBox = styled.div`
  background-color : #d8ccb1;
  border-radius : 2rem;
  box-shadow : 0.3rem 0.3rem 0.3rem 0.3rem #b39288;
  opacity : 95%;
  display : flex;
  padding : 5rem;
  margin : 3rem;
  align-items : center;
  gap : 7rem;
`;

const Logo = styled.h2`
  font-weight : 700;
  font-size : 2rem;
  padding-bottom : 3rem;
`;

const Text = styled.p`
  margin-top : 0.5rem;
`;

const Img = styled.img`
  width : 20rem;
  height : 20rem;
  object-fit : contain;
`;

const LoginPage = () => {
  return (
    <Container>
      <InnerBox>
        <div>
          <Logo>Pokemon</Logo>
          <Text>포켓몬 사이트에 오신걸</Text>
          <Text>환영합니다.</Text>
          <Text>로그인해주세요.</Text>
        </div>
        <div>
          <Img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"/>
        </div>
      </InnerBox>
    </Container>
  )
}

export default LoginPage