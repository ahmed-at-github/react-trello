import { createBrowserRouter } from "react-router";
import App from "../App";
import Board from "../pages/Board";
import BoardDetails from "../pages/BoardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> /* Acts as Root*/,
    children: [
      {
        path: "/",
        element: <Board />,
      },
      { path: "/:boardId", element: <BoardDetails /> },
    ],
  },
]);
