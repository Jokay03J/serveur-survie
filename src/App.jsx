import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  const router = createBrowserRouter([
    { path: "/serveur-survie/", element: <Home></Home> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
