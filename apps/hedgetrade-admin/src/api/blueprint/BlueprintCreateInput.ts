import { InputJsonValue } from "../../types";
import { StakeCreateNestedManyWithoutBlueprintsInput } from "./StakeCreateNestedManyWithoutBlueprintsInput";
import { TransactionCreateNestedManyWithoutBlueprintsInput } from "./TransactionCreateNestedManyWithoutBlueprintsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlueprintCreateInput = {
  aiData?: InputJsonValue;
  buyPair?: string | null;
  description?: string | null;
  exchange?: string | null;
  expiry?: string | null;
  maxOrder?: string | null;
  minOrder?: string | null;
  name?: string | null;
  sellPair?: string | null;
  stake?: string | null;
  stakeAmount?: number | null;
  stakes?: StakeCreateNestedManyWithoutBlueprintsInput;
  stopLoss?: string | null;
  successRate?: number | null;
  takeProfit?: string | null;
  tradeType?: string | null;
  transactions?: TransactionCreateNestedManyWithoutBlueprintsInput;
  user?: UserWhereUniqueInput | null;
};
