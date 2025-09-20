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
    case "UPDATE_LIST": {
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, title: action.payload.title };
        return item;
      });
      return updatedList;
    }
    case "REMOVE_LIST": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "CHANGE_BID_LIST": {
      const updatedList = state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, boardId: action.payload.boardId };
        return item;
      });
      return updatedList;
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
    case "SORT_TID": {
      const { destination, source, draggableId } = action.payload;
      console.log('Hi1');
      const updatedList = state.map((list) => {
         console.log('Hi11');
        if (
          source.droppableId === destination.droppableId &&
          list.id === source.droppableId
        ) {
          console.log('Hi1');
          
          // moving item on the same drop area, but diff index
          const copyofTasks = [...list.tasks];
          copyofTasks.splice(source.index, 1);
          copyofTasks.splice(destination.index, 0, draggableId);
          return { ...list, tasks: copyofTasks };
        }
        if (source.droppableId === list.id) {
          console.log('Hi2');
          // moving item on diff drop area, removing dropTask from list
          return {
            ...list,
            tasks: list.tasks.filter((taskId) => taskId !== parseInt(draggableId)),
          };
        }
        if (destination.droppableId === list.id) {
          console.log('Hi3');
          //moving item to a diff drop area, adding item to list
          return {
            ...list,
            tasks: [
              ...list.tasks.slice(0, destination.index),
              draggableId,
              ...list.tasks.slice(destination.index),
            ],
          };
        }
        return list;
      });

      return updatedList;
    }
    default:
      return state;
  }
};
