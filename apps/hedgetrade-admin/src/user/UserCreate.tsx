import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  PasswordInput,
  NumberInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";
import { BlueprintTitle } from "../blueprint/BlueprintTitle";
import { LeaderboardTitle } from "../leaderboard/LeaderboardTitle";
import { NotificationTitle } from "../notification/NotificationTitle";
import { StakeTitle } from "../stake/StakeTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="admins"
          reference="Admin"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdminTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="blueprints"
          reference="Blueprint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BlueprintTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="leaderboards"
          reference="Leaderboard"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LeaderboardTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="notifications"
          reference="Notification"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotificationTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <NumberInput step={1} label="Rank" source="rank" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="stakes"
          reference="Stake"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StakeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <TextInput label="Wallet Address" source="walletAddress" />
      </SimpleForm>
    </Create>
  );
};
