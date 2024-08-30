import { SortOrder } from "../../util/SortOrder";

export type LeaderboardOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  points?: SortOrder;
  rankPosition?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
