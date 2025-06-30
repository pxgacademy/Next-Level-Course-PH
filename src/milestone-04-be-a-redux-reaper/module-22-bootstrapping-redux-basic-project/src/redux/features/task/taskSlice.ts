import type { RootState } from "@/redux/store";
import type { TaskT } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tasks: TaskT[];
  filter: "All" | "Heigh" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "1aKlmG5p0r",
      title: "",
      description: "",
      dueDate: "",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "All",
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
