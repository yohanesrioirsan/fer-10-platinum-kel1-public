import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Detail from "./pages/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/result",
      element: <Result />,
    },
    {
      path: "/detail/",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
