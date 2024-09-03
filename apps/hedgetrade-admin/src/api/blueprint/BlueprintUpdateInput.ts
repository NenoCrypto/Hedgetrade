import { InputJsonValue } from "../../types";
import { StakeUpdateManyWithoutBlueprintsInput } from "./StakeUpdateManyWithoutBlueprintsInput";
import { TransactionUpdateManyWithoutBlueprintsInput } from "./TransactionUpdateManyWithoutBlueprintsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlueprintUpdateInput = {
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
  stakes?: StakeUpdateManyWithoutBlueprintsInput;
  stopLoss?: string | null;
  successRate?: number | null;
  takeProfit?: string | null;
  tradeType?: string | null;
  transactions?: TransactionUpdateManyWithoutBlueprintsInput;
  user?: UserWhereUniqueInput | null;
};
