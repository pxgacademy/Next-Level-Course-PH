import type { RootState } from "@/redux/store";
import type { TaskT } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: TaskT[];
  filter: "all" | "heigh" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "",
      title: "",
      description: "",
      dueDate: "",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {},
});

export const selectTasks = (state: RootState) => state.todos.tasks;
export const selectFilter = (state: RootState) => state.todos.filter;

//
export const taskReducer = taskSlice.reducer;
