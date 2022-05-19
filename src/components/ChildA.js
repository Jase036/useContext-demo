import { useContext } from "react";
import { DemoContext } from "../context/DemoContext";

const ChildA = () => {
  const { counter } = useContext(DemoContext);
  return (
    <div>
      <h1>This is Child A</h1>
      <h3>The counter value is: {counter}</h3>
    </div>
  );
};

export default ChildA;
