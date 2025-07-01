import { Trash2 } from "lucide-react";
import type { TaskT } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  deleteTask,
  toggleCompleteState,
} from "@/redux/features/task/taskSlice";
import { selectUser } from "@/redux/features/user/userSlice";

const TaskCard = ({ task }: { task: TaskT }) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUser);

  const user = task?.userId ? users.find((u) => u.id === task.userId) : null;

  return (
    <div
      className={cn("border px-5 py-3 rounded-md", {
        "border-green-300": task.isCompleted,
      })}
    >
      {user && <p className="text-sm">{user.name}</p>}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-red-500": task.priority === "High",
              "bg-yellow-500": task.priority === "Medium",
              "bg-green-500": task.priority === "Low",
            })}
          />
          <h1>{task.title}</h1>
        </div>
        <div>
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="link"
            className="p-0 text-red-500"
          >
            <Trash2 />
          </Button>
          <Checkbox
            checked={task.isCompleted}
            onClick={() => dispatch(toggleCompleteState(task.id))}
          />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
