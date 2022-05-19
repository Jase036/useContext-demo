import { useContext } from "react";
import { DemoContext } from "../context/DemoContext";
import ChildC from "./ChildC";

const ChildB = () => {
  const { input } = useContext(DemoContext);
  return (
    <div>
      <h1>This is Child B</h1>
      <h3>The Input Field value is: {input}</h3>
      <ChildC />
    </div>
  );
};

export default ChildB;
