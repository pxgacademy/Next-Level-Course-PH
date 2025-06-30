export interface TaskT {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "Heigh" | "Medius" | "Low";
}
