import { decrement, increment } from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";

const Redux = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (qnty: number) => {
    dispatch(increment(qnty));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Counter with Redux</h1>

      <div>
        <button onClick={() => handleIncrement(5)}>Increment 5</button>
        <button onClick={() => handleIncrement(1)}>Increment</button>
        <span style={{ margin: "20px" }}>{count}</span>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Redux;
