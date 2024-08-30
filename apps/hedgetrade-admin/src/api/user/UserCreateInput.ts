import { AdminCreateNestedManyWithoutUsersInput } from "./AdminCreateNestedManyWithoutUsersInput";
import { BlueprintCreateNestedManyWithoutUsersInput } from "./BlueprintCreateNestedManyWithoutUsersInput";
import { LeaderboardCreateNestedManyWithoutUsersInput } from "./LeaderboardCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { StakeCreateNestedManyWithoutUsersInput } from "./StakeCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  admins?: AdminCreateNestedManyWithoutUsersInput;
  blueprints?: BlueprintCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  leaderboards?: LeaderboardCreateNestedManyWithoutUsersInput;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  rank?: number | null;
  roles: InputJsonValue;
  stakes?: StakeCreateNestedManyWithoutUsersInput;
  transactions?: TransactionCreateNestedManyWithoutUsersInput;
  username: string;
  walletAddress?: string | null;
};
