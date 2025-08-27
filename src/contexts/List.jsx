import { createContext, useReducer } from "react";
import { listReducer } from "../reducers/list";

export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [lists, dispatchList] = useReducer(listReducer, []);

  return (
    <ListContext.Provider value={{ lists, dispatchList }}>
      {children}
    </ListContext.Provider>
  );
};
