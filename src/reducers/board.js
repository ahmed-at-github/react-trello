/*
boardState = [
{id, title, list:[listId], task:[taskId] }
]
*/

export const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_BOARD": {
      const newBoard = {
        id: Date.now() + "",
        title: action.payload.title,
        lists: [],
        tasks: [],
      };
      return [...state, newBoard];
    }
    case "UPDATE_BOARD": {
      return state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, title: action.payload.title };
        return item;
      });
    }

    case "REMOVE_BOARD": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "ADD_LISTB_ID": {
      const updatedBoard = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, lists: [...item.lists, action.payload.listId] };
        return item;
      });

      return updatedBoard;
    }

    case "REMOVE_LISTB_ID": {
      const updatedBoard = state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,

            lists: item.lists.filter(
              (listId) => listId != action.payload.listId
            ),
          };
        return item;
      });

      return updatedBoard;
    }
    case "ADD_TASKB_ID": {
      const updatedBoard = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, tasks: [...item.tasks, action.payload.taskId] };
        return item;
      });

      return updatedBoard;
    }
    case "REMOVE_TASKB_ID": {
      const updatedBoard = state.map((item) => {
        if (item.id === action.payload.id)
          return {
            ...item,
            tasks: item.tasks.filter(
              (taskId) => taskId != action.payload.taskId
            ),
          };
        return item;
      });

      return updatedBoard;
    }

    default:
      break;
  }
};
