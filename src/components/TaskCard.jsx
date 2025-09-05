import { useContext, useState } from "react";
import ItemForm from "../components/ItemForm";
import { TaskContext } from "../contexts/Task";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";

function TaskCard({ task, index }) {
  const [taskTitle, setTaskTitle] = useState(task.title);
  const [editMode, setEditMode] = useState(false);
  const { dispatchTask } = useContext(TaskContext);
  const { dispatchList } = useContext(ListContext);
  const { dispatchBoard } = useContext(BoardContext);

  return (
    <div>
      {editMode ? (
        <ItemForm />
      ) : (
        <div onClick={0}>
          <p>
            Task title: {taskTitle}
            <button onClick={0}>X</button>
          </p>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
