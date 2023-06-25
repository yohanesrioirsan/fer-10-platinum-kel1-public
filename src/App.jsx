import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Detail from "./pages/Detail";
import SignUp from "./pages/SignUp";
import SignIn from "./containers/SignIn/SignIn";
import PembayaranPilihMetode from "./pages/PembayaranPilihMetode";

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
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/pembayaranpilihmetode",
      element: <PembayaranPilihMetode />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
