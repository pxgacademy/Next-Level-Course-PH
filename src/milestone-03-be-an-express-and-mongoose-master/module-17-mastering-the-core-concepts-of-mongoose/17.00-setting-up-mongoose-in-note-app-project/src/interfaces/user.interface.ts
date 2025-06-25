export interface UserType {
  name: {
    firstName: string;
    lastName: string;
  };
  email: string;
  password: string;
  role: "user" | "admin";
}
