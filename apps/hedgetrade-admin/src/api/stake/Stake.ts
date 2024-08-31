import { Blueprint } from "../blueprint/Blueprint";
import { User } from "../user/User";

export type Stake = {
  amount: number | null;
  blueprint?: Blueprint | null;
  createdAt: Date;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
