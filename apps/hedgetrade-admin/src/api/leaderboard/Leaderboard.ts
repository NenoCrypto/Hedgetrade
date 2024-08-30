import { User } from "../user/User";

export type Leaderboard = {
  createdAt: Date;
  id: string;
  points: number | null;
  rankPosition: number | null;
  updatedAt: Date;
  user?: User | null;
};
