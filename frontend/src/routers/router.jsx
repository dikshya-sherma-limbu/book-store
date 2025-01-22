import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/orders",
        element: <h1>Orders</h1>,
      },
      {
        path: "/about",
        element: <h1>About</h1>,
      },
    ],
  },
]);
export default router;
