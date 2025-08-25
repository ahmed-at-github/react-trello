import { createContext, useReducer } from "react";
import { listReducer } from "../reducers/list";

export const ListContext = createContext();

export const ListProvider = () => {
  const [lists, dispatchList] = useReducer(listReducer, []);

  <ListContext.provider value={{ lists, dispatchList }}>
    {children}
  </ListContext.provider>;
};
