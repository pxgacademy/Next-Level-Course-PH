import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { Button } from "../components/ui/button";
import SectionContainer from "@/components/SectionContainer";

const ReduxCounter = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (qnty: number) => {
    dispatch(increment(qnty));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <SectionContainer>
      <h1 className="text-5xl mb-6">Counter with Redux</h1>

      <div>
        <span className="p-4 bg-white/10 mb-4 inline-block rounded">
          {count}
        </span>
        <div className="flex items-center gap-x-3">
          <Button onClick={() => handleIncrement(5)}>Increment 5</Button>
          <Button onClick={() => handleIncrement(1)}>Increment</Button>
          <Button onClick={handleDecrement}>Decrement</Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ReduxCounter;
