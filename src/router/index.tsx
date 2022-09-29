import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom"

import App from "../App"
import Hello from "../components/Hello"
import Test from "../components/Test"
import { HttpSample } from "../components/HttpSample"
import ErrorPage from "../components/ErrorPage"

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/hello",
        element: <Hello />,
      },
      {
        path: "/http",
        element: <HttpSample />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
