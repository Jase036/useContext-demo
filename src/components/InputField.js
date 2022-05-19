import { useContext } from "react";
import { DemoContext } from "../context/DemoContext";
import ChildA from "./ChildA";

const InputField = () => {
  const { input, setInput} = useContext(DemoContext)
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Type Something"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          type="submit"
        >
          Send
        </button>
        <ChildA />
      </form>
    </div>
  );
};

export default InputField;
