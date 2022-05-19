import styledComponents from "styled-components";
import Counter from "./Counter";
import InputField from "./InputField";

const Home = () => {
  return (
    <Wrapper>
      <Counter />
      <InputField />
    </Wrapper>
  );
};

const Wrapper = styledComponents.div`
display: flex;
`;
export default Home;
