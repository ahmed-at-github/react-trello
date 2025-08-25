import { createContext, useReducer } from "react";
import { boardReducer } from "../reducers/board";

export const BoardContext = createContext();

export const BoardProvider = () => {
  const [boards, dispatchBoard] = useReducer(boardReducer, []);

  <BoardContext.provider value={{ boards, dispatchBoard }}>
    {children}
  </BoardContext.provider>;
};
