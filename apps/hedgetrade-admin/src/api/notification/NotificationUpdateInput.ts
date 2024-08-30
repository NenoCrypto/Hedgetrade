import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  message?: string | null;
  read?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
