import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Commands from "./components/Commands";
import ViewCommands from "./components/ViewCommands";
import ComHome from "./components/ComHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
  {
    path: "/create-commands",
    element: (
      <div>
        <Navbar />
        <ComHome />
      </div>
    ),
  },
  {
    path: "/commands",
    element: (
      <div>
        <Navbar />
        <Commands />
      </div>
    ),
  },
  {
    path: "/commands/:id",
    element: (
      <div>
        <Navbar />
        <ViewCommands />
      </div>
    ),
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
