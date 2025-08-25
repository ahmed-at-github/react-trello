/*
listState = [ {id, title, boardId} ]
*/
export const listReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_LIST": {
      const newList = {
        id: action.payload.id,
        title: action.payload.title,
        boardId: action.payload.boardId,
        tasks: [],
      };

      return [...state, newList];
    }
    case "UPDATE_LIST_NAME": {
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, title: action.payload.title };
        return item;
      });
      return updatedList;
    }
    case "CHANGE_BOARD_ID_LIST": {
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, boardId: action.payload.boardId };
        return item;
      });
      return updatedList;
    }
    case "REMOVE_LIST": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "ADD_TID_LIST": {
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, tasks: [...item.tasks, action.payload.taskId] };
        return item;
      });
      return updatedList;
    }
    case "REMOVE_TID_LIST": {
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            tasks: item.tasks.filter(
              (taskId) => taskId !== action.payload.taskId
            ),
          };
        return item;
      });
      return updatedList;
    }
    default:
      return state;
  }
};
