// TASK related types
export interface TaskT {
  id: string;
  title: string;
  description: string;
  dueDate: Date | undefined;
  isCompleted: boolean;
  userId?: string | null;
  priority: "High" | "Medium" | "Low";
}
export type FilterT = "All" | "High" | "Medium" | "Low";
export type TaskFormValues = Omit<TaskT, "id" | "isCompleted">;

// USER related types
export interface UserT {
  id: string;
  name: string;
  email: string;
}

export type UserFormValues = Omit<UserT, "id">;
