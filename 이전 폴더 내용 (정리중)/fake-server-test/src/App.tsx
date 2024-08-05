import Router from "@components/atoms/router";
import styled from "styled-components";

const Layout = styled.div`
  max-width: 375px;
  min-height: 100vh;
  background-color: white;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 14px;
  position: relative;
`;

function App() {
  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
