import { useContext, useState } from "react";
import { TaskContext } from "../contexts/Task";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";
import AddItem from "./AddItem";
import ItemForm from "./ItemForm";
import TaskCard from "./TaskCard";
import { Droppable } from "@hello-pangea/dnd";

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
    <Droppable droppableId={taskList.id+""}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div>
              <p>
                List title: {taskList.title}
                <button onClick={handleRemoveList}>X</button>
              </p>
              <div>
                {taskList.tasks
                  .map((taskId) => {
                    return allTasks.find((i) => i.id === taskId);
                  })
                  .map((task, index) => {
                    return <TaskCard task={task} index={index} />;
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
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
}

export default TaskList;
