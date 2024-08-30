import { AdminUpdateManyWithoutUsersInput } from "./AdminUpdateManyWithoutUsersInput";
import { BlueprintUpdateManyWithoutUsersInput } from "./BlueprintUpdateManyWithoutUsersInput";
import { LeaderboardUpdateManyWithoutUsersInput } from "./LeaderboardUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StakeUpdateManyWithoutUsersInput } from "./StakeUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  admins?: AdminUpdateManyWithoutUsersInput;
  blueprints?: BlueprintUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardUpdateManyWithoutUsersInput;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  rank?: number | null;
  roles?: InputJsonValue;
  stakes?: StakeUpdateManyWithoutUsersInput;
  transactions?: TransactionUpdateManyWithoutUsersInput;
  username?: string;
  walletAddress?: string | null;
};
