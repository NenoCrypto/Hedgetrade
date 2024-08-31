import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardCreateInput = {
  points?: number | null;
  rankPosition?: number | null;
  user?: UserWhereUniqueInput | null;
};
