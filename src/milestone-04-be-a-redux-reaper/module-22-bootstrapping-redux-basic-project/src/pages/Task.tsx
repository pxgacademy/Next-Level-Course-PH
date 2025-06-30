import SectionContainer from "@/components/SectionContainer";
import AddTaskModal from "@/components/task/AddTaskModal";
import TaskCard from "@/components/task/TaskCard";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";
import type { TaskT } from "@/types";

const Task = () => {
  const tasks = useAppSelector(selectTasks);

  return (
    <SectionContainer>
      <div>
        <AddTaskModal />
      </div>
      <div className="space-y-2.5 mt-6">
        {tasks?.map((task: TaskT) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Task;
