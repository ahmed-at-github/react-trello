import { useContext, useRef, useState } from "react";
import { BoardContext } from "../contexts/Board";

function BoardForm() {
  const [boardTitle, setBoardTitle] = useState("");
  const ref = useRef(null);
  const { dispatchBoard } = useContext(BoardContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(ref);

    if (boardTitle.trim() === "") return alert("Please provide a valid title");
    dispatchBoard({ type: "CREATE_BOARD", payload: { title: boardTitle } });
    setBoardTitle("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          type="text"
          value={boardTitle}
          onChange={(e) => {
            setBoardTitle(e.target.value);
          }}
        />
        <button type="submit">Create Board</button>
      </form>
    </div>
  );
}

export default BoardForm;
