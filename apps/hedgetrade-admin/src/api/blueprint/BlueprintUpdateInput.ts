import { StakeUpdateManyWithoutBlueprintsInput } from "./StakeUpdateManyWithoutBlueprintsInput";
import { TransactionUpdateManyWithoutBlueprintsInput } from "./TransactionUpdateManyWithoutBlueprintsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlueprintUpdateInput = {
  description?: string | null;
  name?: string | null;
  stakeAmount?: number | null;
  stakes?: StakeUpdateManyWithoutBlueprintsInput;
  successRate?: number | null;
  transactions?: TransactionUpdateManyWithoutBlueprintsInput;
  user?: UserWhereUniqueInput | null;
};
