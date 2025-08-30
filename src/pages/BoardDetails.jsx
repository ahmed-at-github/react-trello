import { useContext, useState } from "react";
import { Link, useParams } from "react-router";
import { TaskContext } from "../contexts/Task";
import AddItem from "../components/AddItem";
import ItemForm from "../components/ItemForm";
import { ListContext } from "../contexts/List";
import { BoardContext } from "../contexts/Board";

function BoardDetails() {
  const [listTitle, setListTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  let { boardId } = useParams();
  const { dispatchTask } = useContext(TaskContext);
  const { lists, dispatchList } = useContext(ListContext);
  const { dispatchBoard } = useContext(BoardContext);
  // const

  function handleOnSubmit(e) {
    e.preventDefault();
    const id = Date.now();
    dispatchList({
      type: "CREATE_LIST",
      payload: { id, title: listTitle, boardId },
    });
    dispatchBoard({
      type: "ADD_LISTB_ID",
      payload: { id: boardId, listId: id },
    });

    console.log(lists);

    setListTitle("");
    setEditMode(false);
  }

  return (
    <div>
      <Link to="/">Bact to Board</Link>
      {lists
        .filter((item) =>  item.boardId === boardId)
        .map((taskList) => {
          return <li key={taskList.id}>{taskList.title}</li>;
        })}
      {editMode ? (
        <ItemForm
          setEditMode={setEditMode}
          listForm={true}
          handleOnSubmit={handleOnSubmit}
          title={listTitle}
          handleOnChange={(e) => setListTitle(e.target.value)}
        />
      ) : (
        <AddItem listAdditem={true} setEditMode={setEditMode} />
      )}
    </div>
  );
}

export default BoardDetails;
