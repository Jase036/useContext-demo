import { useContext } from "react";
import { DemoContext } from "../context/DemoContext";

const ChildC = () => {
  const { input, counter } = useContext(DemoContext);
  return (
    <div>
      <h1>This is Child C</h1>
      <h3>The Input Field value is: {input}</h3>
      <h3>The Counter value is: {counter}</h3>
    </div>
  );
};

export default ChildC;
