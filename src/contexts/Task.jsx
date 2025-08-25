import { createContext, useReducer } from "react";
import { taskReducer } from "../reducers/task";

export const ListContext = createContext();

const TaskProvier = () => {
  const [tasks, dispatchTask] = useReducer(taskReducer, []);

  <TaskContext.provider value={{ tasks, dispatchTask }}>
    {children}
  </TaskContext.provider>;
};
