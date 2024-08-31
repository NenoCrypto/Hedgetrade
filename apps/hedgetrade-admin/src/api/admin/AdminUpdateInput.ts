import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminUpdateInput = {
  privileges?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
