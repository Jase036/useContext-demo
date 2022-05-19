import { useContext } from "react";
import { DemoContext } from "../context/DemoContext";
import ChildB from "./ChildB";

const Counter = () => {
  const { counter, setCounter } = useContext(DemoContext);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Counter +1
      </button>
      <ChildB />
    </div>
  );
};

export default Counter;
