import { createContext, useState } from "react";
export const itemContext = createContext(null);

const Context = (props) => {
  const [items, setItems] = useState([]);
  return (
    <itemContext.Provider value={[items, setItems]}>
      {props.children}
    </itemContext.Provider>
  );
};

export default Context;
