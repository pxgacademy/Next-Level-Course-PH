import SectionContainer from "@/components/SectionContainer";
import { selectFilter, selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Task = () => {
  const tasks = useAppSelector(selectTasks);
  const filter = useAppSelector(selectFilter);

  return (
    <SectionContainer>
      <h2>Task</h2>
    </SectionContainer>
  );
};

export default Task;
