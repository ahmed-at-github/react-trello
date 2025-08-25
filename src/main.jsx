import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { router } from "./router/router";
import { BoardProvider } from "./contexts/Board";
import { ListProvider } from "./contexts/List";
import { TaskProvider } from "./contexts/Task";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoardProvider>
      <ListProvider>
        <TaskProvider>
          <RouterProvider router={router} />
        </TaskProvider>
      </ListProvider>
    </BoardProvider>
  </StrictMode>
);
