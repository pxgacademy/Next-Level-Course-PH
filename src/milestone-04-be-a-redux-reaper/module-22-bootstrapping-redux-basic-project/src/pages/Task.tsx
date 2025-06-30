import SectionContainer from "@/components/SectionContainer";
import TaskCard from "@/components/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import type { TaskT } from "@/types";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  console.log(tasks);

  return (
    <SectionContainer>
      <div className="space-y-2.5">
        {tasks?.map((task: TaskT) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Task;
