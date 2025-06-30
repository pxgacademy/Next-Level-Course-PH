import App from "@/pages/App";
import HoldButton from "@/pages/HoldButton";
import Redux from "@/pages/Redux";
import Task from "@/pages/Task";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        // path: "tasks",
        index: true,
        Component: Task,
      },
      {
        path: "tasks",
        Component: Task,
      },
      {
        path: "users",
        Component: User,
      },
      {
        path: "redux",
        Component: Redux,
      },
      {
        path: "hold-button",
        Component: HoldButton,
      },
    ],
  },
]);

export default router;
