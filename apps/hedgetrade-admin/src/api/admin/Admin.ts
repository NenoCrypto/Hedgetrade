import { User } from "../user/User";

export type Admin = {
  createdAt: Date;
  id: string;
  privileges?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
