import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StakeListRelationFilter } from "../stake/StakeListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlueprintWhereInput = {
  aiData?: JsonFilter;
  buyPair?: StringNullableFilter;
  description?: StringNullableFilter;
  exchange?: StringNullableFilter;
  expiry?: StringNullableFilter;
  id?: StringFilter;
  maxOrder?: StringNullableFilter;
  minOrder?: StringNullableFilter;
  name?: StringNullableFilter;
  sellPair?: StringNullableFilter;
  stake?: StringNullableFilter;
  stakeAmount?: FloatNullableFilter;
  stakes?: StakeListRelationFilter;
  stopLoss?: StringNullableFilter;
  successRate?: FloatNullableFilter;
  takeProfit?: StringNullableFilter;
  tradeType?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  user?: UserWhereUniqueInput;
};
