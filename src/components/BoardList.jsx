import { useContext } from "react";
import { BoardContext } from "../contexts/Board";
import { Link } from "react-router";
import BoardItem from "./BoardItem";

function BoardList() {
  const { boards } = useContext(BoardContext);
  console.log(boards);
  

  return (
    <div>
      {boards.map((board) => (
        <Link key={board.id} to={`/`}>
          <BoardItem board={board}/>
        </Link>
      ))}
    </div>
  );
} 

export default BoardList;
