import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/user/home";
import AppLayout from "../components/layout/app-layout";
import AddArtist from "./routes/admin/add-artist";
import AddMusic from "./routes/admin/add-music";

export default function RouterApp() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/add-music",
          element: <AddMusic />,
        },
        {
          path: "/add-artist",
          element: <AddArtist />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
