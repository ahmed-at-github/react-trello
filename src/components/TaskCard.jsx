import { useContext, useState } from "react";
import ItemForm from "../components/ItemForm";
import { TaskContext } from "../contexts/Task";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";
import { Draggable } from "@hello-pangea/dnd";

function TaskCard({ task, index }) {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTask } = useContext(TaskContext);
  const { dispatchList } = useContext(ListContext);
  const { dispatchBoard } = useContext(BoardContext);
  // console.log(task);

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatchTask({
      type: "UPDATE_TASK",
      payload: { id: task.id, title: taskTitle },
    });
    setEditMode(false);
  }
  function handleRemover(e) {
    e.preventDefault();
    dispatchTask({ type: "REMOVE_TASK", payload: { id: task.id } });
    dispatchList({
      type: "REMOVE_TID_LIST",
      payload: { id: task.listId, taskId: task.id },
    });
    dispatchBoard({
      type: "REMOVE_TASKB_ID",
      payload: { id: task.boardId, taskId: task.id },
    });
  }

  return (
    <Draggable draggableId={task.id + ""} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {editMode ? (
              <ItemForm
                handleOnChange={(e) => setTaskTitle(e.target.value)}
                title={taskTitle}
                setEditMode={setEditMode}
                handleOnSubmit={handleOnSubmit}
              />
            ) : (
              <div onClick={() => setEditMode(true)}>
                <p>
                  Task title: {taskTitle}
                  <button onClick={handleRemover}>X</button>
                </p>
              </div>
            )}
          </div>
        );
      }}
    </Draggable>
  );
}

export default TaskCard;
