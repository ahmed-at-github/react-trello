import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { ListContext } from "../contexts/List";
import { TaskContext } from "../contexts/Task";

function BoardItem({ board }) {
  const { dispatchBoard } = useContext(BoardContext);
  const { tasks, dispatchTask } = useContext(TaskContext);
  const { lists, dispatchList } = useContext(ListContext);

  function removeHandler(e) {
    e.preventDefault();
    e.stopPropogation();
    const taskToBeDeleted = tasks.filter((task) => task.boardId === board.id);
    const listToBeDeleted = lists.filter((list) => list.boardId === board.id);
    dispatchBoard({ type: "REMOVE_BOARD", payload: { id: board.id } });

    listToBeDeleted.forEach((list) => {
      dispatchList({ type: "REMOVE_LIST", payload: { id: list.id } });
    });
    taskToBeDeleted.forEach((task) => {
      dispatchList({ type: "REMOVE_TASK", payload: { id: task.id } });
    });
  }
  return (
    <div>
      <h5>{board.title}</h5>
      <p onClick={removeHandler}>x</p>
    </div>
  );
}

export default BoardItem;
