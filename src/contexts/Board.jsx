import { createContext, useReducer } from "react";
import { boardReducer } from "../reducers/board";

export const BoardContext = createContext();

const BoardProvier = () => {
  const [boards, dispatchBoard] = useReducer(boardReducer, []);

  <BoardContext.provider value={{ boards, dispatchBoard }}>
    {children}
  </BoardContext.provider>;
};
