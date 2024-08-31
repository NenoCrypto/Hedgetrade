import { SortOrder } from "../../util/SortOrder";

export type BlueprintOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  stakeAmount?: SortOrder;
  successRate?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
