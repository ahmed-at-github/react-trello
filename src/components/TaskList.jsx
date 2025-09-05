import { useContext, useState } from "react";
import { TaskContext } from "../contexts/Task";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";
import AddItem from "./AddItem";
import ItemForm from "./ItemForm";
import TaskCard from "./TaskCard";

function TaskList({ taskList }) {
  const [taskTitle, setTaskTitle] = useState("");
  const [editMode, setEditMode] = useState(false);

  const { tasks: allTasks, dispatchTask } = useContext(TaskContext);
  const { dispatchList } = useContext(ListContext);
  const { dispatchBoard } = useContext(BoardContext);

  function handleOnSubmit(e) {
    e.preventDefault();
    const id = Date.now() + "";

    dispatchTask({
      type: "CREATE_TASK",
      payload: {
        id: id,
        title: taskTitle,
        listId: taskList.id,
        boardId: taskList.boardId,
      },
    });

    dispatchList({
      type: "ADD_TID_LIST",
      payload: {
        id: taskList.id,
        taskId: id,
      },
    });

    dispatchBoard({
      type: "ADD_TASKB_ID",
      payload: {
        id: taskList.boardId,
        taskId: id,
      },
    });

    setEditMode(false);
  }
  function handleRemoveList() {
    dispatchList({
      type: "REMOVE_LIST",
      payload: { id: taskList.id },
    });
    dispatchBoard({
      type: "REMOVE_LISTB_ID",
      payload: { id: taskList.boardId, listId: taskList.id },
    });
  }
  return (
    <>
      <p>
        List title: {taskList.title}
        <button onClick={handleRemoveList}>X</button>
      </p>
      <div>
        {taskList.tasks
          .map((taskId) => {
            console.log(taskId);
            return allTasks.find((i) => i.id === taskId);
          })
          .map((task) => {
            return <TaskCard task={task} />;
          })}
      </div>

      {editMode ? (
        <ItemForm
          listForm={false}
          handleOnSubmit={handleOnSubmit}
          title={taskTitle}
          handleOnChange={(e) => setTaskTitle(e.target.value)}
          setEditMode={setEditMode}
        />
      ) : (
        <AddItem setEditMode={setEditMode} />
      )}
    </>
  );
}

export default TaskList;
