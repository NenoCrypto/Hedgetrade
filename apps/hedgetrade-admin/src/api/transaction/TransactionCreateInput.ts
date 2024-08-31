import { BlueprintWhereUniqueInput } from "../blueprint/BlueprintWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  blueprint?: BlueprintWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
