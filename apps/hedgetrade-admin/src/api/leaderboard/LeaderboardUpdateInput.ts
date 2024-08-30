import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardUpdateInput = {
  points?: number | null;
  rankPosition?: number | null;
  user?: UserWhereUniqueInput | null;
};
