/**
 task = [{id, title, boardId, listId}]
 */
export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_TASK": {
      const newTask = {
        id: action.payload.id,
        title: action.payload.title,
        listId: action.payload.listId,
        boardId: action.payload.boardId,
      };
      return [...state, newTask];
    }
    case "UPDATE_TASK_TITLE": {
      const updatedTask = state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            title: action.payload.title,
          };
        return item;
      });
      return updatedTask;
    }
    case "REMOVE_TASK": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "CHANGE_LIST_ID": {
      const updatedTask = state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            listId: action.payload.listId,
          };
        return item;
      });
      return updatedTask;
    }
    case "REMOVE_LIST_ID": {
      const updatedTask = state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            boardId: action.payload.boardId,
          };
        return item;
      });
      return updatedTask;
    }

    default:
      return state;
  }
};
