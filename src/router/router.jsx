import { createBrowserRouter } from "react-router";
import App from "../App";
import Board from "../pages/Board";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> /* Acts as Root*/,
    children: [
      {
        path: "/",
        element: <Board />,
      },
      // { path: "/boards/:boardId", element: <Board /> },
    ],
  },
]);
