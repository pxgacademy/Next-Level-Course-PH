import SectionContainer from "@/components/SectionContainer";
import AddTaskModal from "@/components/task/AddTaskModal";
import TaskCard from "@/components/task/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import type { FilterT, TaskT } from "@/types";

const Task = () => {
  // const tasks = useAppSelector((state) => state.todos.tasks);
  // (state) => state.todos.tasks) // callback function, and it is stored in the userSlice.ts
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  return (
    <SectionContainer>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Tasks</h2>

        <Tabs
          defaultValue="All"
          onValueChange={(value) => dispatch(updateFilter(value as FilterT))}
        >
          <TabsList>
            <TabsTrigger value="All">All</TabsTrigger>
            <TabsTrigger value="Low">Low</TabsTrigger>
            <TabsTrigger value="Medium">Medium</TabsTrigger>
            <TabsTrigger value="High">High</TabsTrigger>
          </TabsList>
        </Tabs>

        <div>
          <AddTaskModal />
        </div>
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
