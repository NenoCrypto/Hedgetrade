import { Stake } from "../stake/Stake";
import { Transaction } from "../transaction/Transaction";
import { User } from "../user/User";

export type Blueprint = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  stakeAmount: number | null;
  stakes?: Array<Stake>;
  successRate: number | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  user?: User | null;
};
