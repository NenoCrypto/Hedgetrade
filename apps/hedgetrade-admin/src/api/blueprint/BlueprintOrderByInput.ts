import { SortOrder } from "../../util/SortOrder";

export type BlueprintOrderByInput = {
  aiData?: SortOrder;
  buyPair?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  exchange?: SortOrder;
  expiry?: SortOrder;
  id?: SortOrder;
  maxOrder?: SortOrder;
  minOrder?: SortOrder;
  name?: SortOrder;
  sellPair?: SortOrder;
  stake?: SortOrder;
  stakeAmount?: SortOrder;
  stopLoss?: SortOrder;
  successRate?: SortOrder;
  takeProfit?: SortOrder;
  tradeType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
