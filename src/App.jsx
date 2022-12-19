import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home></Home> },
    { path: "*", element: <NotFound></NotFound> },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
