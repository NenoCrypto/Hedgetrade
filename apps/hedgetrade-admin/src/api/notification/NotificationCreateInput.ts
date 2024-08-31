import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  message?: string | null;
  read?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
