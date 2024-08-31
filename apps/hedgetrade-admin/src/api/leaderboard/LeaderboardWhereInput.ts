import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LeaderboardWhereInput = {
  id?: StringFilter;
  points?: IntNullableFilter;
  rankPosition?: IntNullableFilter;
  user?: UserWhereUniqueInput;
};
