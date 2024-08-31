import { StakeWhereUniqueInput } from "./StakeWhereUniqueInput";
import { StakeUpdateInput } from "./StakeUpdateInput";

export type UpdateStakeArgs = {
  where: StakeWhereUniqueInput;
  data: StakeUpdateInput;
};
