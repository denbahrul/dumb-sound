import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/user/home";
import AppLayout from "../components/layout/app-layout";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
