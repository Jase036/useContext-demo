import styled, { createGlobalStyle } from "styled-components";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Home />
      </Wrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  * {
    margin: 15px;
    padding: 5px;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
    }
  
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 300px;
`;

export default App;
