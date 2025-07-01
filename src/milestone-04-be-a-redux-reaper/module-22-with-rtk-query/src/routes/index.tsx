import App from "@/pages/App";
import HoldButton from "@/pages/HoldButton";
import ReduxCounter from "@/pages/ReduxCounter";
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
        path: "redux-counter",
        Component: ReduxCounter,
      },
      {
        path: "hold-button",
        Component: HoldButton,
      },
    ],
  },
]);

export default router;
