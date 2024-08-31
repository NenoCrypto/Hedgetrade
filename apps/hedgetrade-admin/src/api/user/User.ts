import { Admin } from "../admin/Admin";
import { Blueprint } from "../blueprint/Blueprint";
import { Leaderboard } from "../leaderboard/Leaderboard";
import { Notification } from "../notification/Notification";
import { JsonValue } from "type-fest";
import { Stake } from "../stake/Stake";
import { Transaction } from "../transaction/Transaction";

export type User = {
  admins?: Array<Admin>;
  blueprints?: Array<Blueprint>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  leaderboards?: Array<Leaderboard>;
  notifications?: Array<Notification>;
  rank: number | null;
  roles: JsonValue;
  stakes?: Array<Stake>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  username: string;
  walletAddress: string | null;
};
