import { BlueprintWhereUniqueInput } from "../blueprint/BlueprintWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StakeCreateInput = {
  amount?: number | null;
  blueprint?: BlueprintWhereUniqueInput | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
