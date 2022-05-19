import { createContext, useState } from "react";

export const DemoContext = createContext(null);

export const DemoContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);

  return (
    <DemoContext.Provider value={{ input, setInput, counter, setCounter }}>
      {children}
    </DemoContext.Provider>
  );
};
