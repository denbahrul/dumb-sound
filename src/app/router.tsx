import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/user/home";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
