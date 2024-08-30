import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  privileges?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
