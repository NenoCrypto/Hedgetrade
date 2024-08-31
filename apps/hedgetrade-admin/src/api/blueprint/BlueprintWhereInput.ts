import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StakeListRelationFilter } from "../stake/StakeListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlueprintWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  stakeAmount?: FloatNullableFilter;
  stakes?: StakeListRelationFilter;
  successRate?: FloatNullableFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
