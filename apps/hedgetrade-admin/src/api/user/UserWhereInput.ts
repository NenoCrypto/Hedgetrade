import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { BlueprintListRelationFilter } from "../blueprint/BlueprintListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaderboardListRelationFilter } from "../leaderboard/LeaderboardListRelationFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StakeListRelationFilter } from "../stake/StakeListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type UserWhereInput = {
  admins?: AdminListRelationFilter;
  blueprints?: BlueprintListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  leaderboards?: LeaderboardListRelationFilter;
  notifications?: NotificationListRelationFilter;
  rank?: IntNullableFilter;
  stakes?: StakeListRelationFilter;
  transactions?: TransactionListRelationFilter;
  username?: StringFilter;
  walletAddress?: StringNullableFilter;
};
