import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BlueprintWhereUniqueInput } from "../blueprint/BlueprintWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StakeWhereInput = {
  amount?: FloatNullableFilter;
  blueprint?: BlueprintWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  user?: UserWhereUniqueInput;
};
