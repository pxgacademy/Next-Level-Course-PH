import { Model } from "mongoose";

export interface AddressType {
  city: string;
  street: string;
  zip: string;
}

export interface UserType {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  phone: string;
  password: string;
  role: "user" | "admin";
  address: AddressType;
}

export interface UserPasswordInstanceMethod {
  hashPasswordByInstance(password: string): string;
}

export interface UserPasswordStaticMethod extends Model<UserType> {
  hashPasswordByStatic(password: string): string;
}
