import type { RootState } from "@/redux/store";
import type { FilterT, TaskFormValues, TaskT } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
  tasks: TaskT[];
  filter: "All" | "High" | "Medium" | "Low";
}

const createTask = (taskData: TaskFormValues): TaskT => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    userId: taskData.userId || null,
  };
};

const initialState: InitialState = {
  tasks: [],
  filter: "All",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, action: PayloadAction<TaskFormValues>) => {
      const newTask = createTask(action.payload);
      state.tasks.push(newTask);
    },

    toggleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },

    updateFilter: (state, action: PayloadAction<FilterT>) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    // it will work based on removeUser from userSlice
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) =>
        task.userId === action.payload ? (task.userId = null) : task
      );
    });
  },
});

// this a callback function
export const selectTasks = (state: RootState) => {
  const filter = state.todos.filter;

  if (filter === "Low")
    return state.todos.tasks.filter((task) => task.priority === "Low");
  else if (filter === "Medium")
    return state.todos.tasks.filter((task) => task.priority === "Medium");
  else if (filter === "High")
    return state.todos.tasks.filter((task) => task.priority === "High");
  else return state.todos.tasks;
};
export const selectFilter = (state: RootState) => state.todos.filter;

//
export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

//
export const taskReducer = taskSlice.reducer;
