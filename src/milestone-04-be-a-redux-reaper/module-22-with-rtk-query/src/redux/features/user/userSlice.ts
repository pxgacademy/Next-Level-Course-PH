import type { RootState } from "@/redux/store";
import type { UserFormValues, UserT } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialSate {
  users: UserT[];
}

const createUser = (user: UserFormValues): UserT => ({
  ...user,
  id: nanoid(),
});

const initialState: InitialSate = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserFormValues>) => {
      const newUser = createUser(action.payload);
      state.users.push(newUser);
    },

    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// this is a callback function
export const selectUser = (state: RootState) => {
  return state.users.users;
};

export const { addUser, removeUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
