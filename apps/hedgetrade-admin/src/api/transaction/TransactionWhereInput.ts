import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BlueprintWhereUniqueInput } from "../blueprint/BlueprintWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  blueprint?: BlueprintWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
