import { Trash2 } from "lucide-react";
import type { TaskT } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

const TaskCard = ({ task }: { task: TaskT }) => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div
            className={cn("size-3 rounded-full", {
              "bg-red-500": task.priority === "Heigh",
              "bg-yellow-500": task.priority === "Medium",
              "bg-green-500": task.priority === "Low",
            })}
          />
          <h1>{task.title}</h1>
        </div>
        <div>
          <Button variant="link" className="p-0 text-red-500">
            <Trash2 />
          </Button>
          <Checkbox />
        </div>
      </div>
      <p className="mt-5">{task.description}</p>
    </div>
  );
};

export default TaskCard;
