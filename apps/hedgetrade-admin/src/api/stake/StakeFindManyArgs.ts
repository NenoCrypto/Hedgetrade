import { StakeWhereInput } from "./StakeWhereInput";
import { StakeOrderByInput } from "./StakeOrderByInput";

export type StakeFindManyArgs = {
  where?: StakeWhereInput;
  orderBy?: Array<StakeOrderByInput>;
  skip?: number;
  take?: number;
};
