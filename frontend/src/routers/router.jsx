import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
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
