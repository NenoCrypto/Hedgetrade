import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AdminCreateInput = {
  privileges?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
