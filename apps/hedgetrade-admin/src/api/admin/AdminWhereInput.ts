import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminWhereInput = {
  id?: StringFilter;
  privileges?: "Option1";
  user?: UserWhereUniqueInput;
};
