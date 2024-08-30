import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type AppUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  passwordHash?: StringNullableFilter;
  rank?: IntNullableFilter;
  role?: "Option1";
  username?: StringNullableFilter;
  walletAddress?: StringNullableFilter;
};
