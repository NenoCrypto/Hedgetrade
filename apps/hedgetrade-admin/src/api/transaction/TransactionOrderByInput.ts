import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  blueprintId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
