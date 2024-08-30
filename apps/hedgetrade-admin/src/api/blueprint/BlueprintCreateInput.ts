import { StakeCreateNestedManyWithoutBlueprintsInput } from "./StakeCreateNestedManyWithoutBlueprintsInput";
import { TransactionCreateNestedManyWithoutBlueprintsInput } from "./TransactionCreateNestedManyWithoutBlueprintsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BlueprintCreateInput = {
  description?: string | null;
  name?: string | null;
  stakeAmount?: number | null;
  stakes?: StakeCreateNestedManyWithoutBlueprintsInput;
  successRate?: number | null;
  transactions?: TransactionCreateNestedManyWithoutBlueprintsInput;
  user?: UserWhereUniqueInput | null;
};
