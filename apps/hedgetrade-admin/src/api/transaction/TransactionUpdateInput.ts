import { BlueprintWhereUniqueInput } from "../blueprint/BlueprintWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  blueprint?: BlueprintWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
