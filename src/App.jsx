import { Outlet } from "react-router";
import "./App.css";
import Board from "./pages/Board";

function App() {
  console.log("hi");
  
  return (
    <>
      <header>App header</header>
      <Outlet />
      <footer>App footer</footer>
    </>
  );
}

export default App;
