import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { BLUEPRINT_TITLE_FIELD } from "../blueprint/BlueprintTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Rank" source="rank" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="Wallet Address" source="walletAddress" />
        <ReferenceManyField reference="Admin" target="userId" label="Admins">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="privileges" source="privileges" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Blueprint"
          target="userId"
          label="Blueprints"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="stake_amount" source="stakeAmount" />
            <TextField label="success_rate" source="successRate" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Leaderboard"
          target="userId"
          label="Leaderboards"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="points" source="points" />
            <TextField label="rank_position" source="rankPosition" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Notification"
          target="userId"
          label="Notifications"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <BooleanField label="read" source="read" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Stake" target="userId" label="Stakes">
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="blueprint_"
              source="blueprint.id"
              reference="Blueprint"
            >
              <TextField source={BLUEPRINT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="userId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <ReferenceField
              label="blueprint_"
              source="blueprint.id"
              reference="Blueprint"
            >
              <TextField source={BLUEPRINT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <TextField label="transaction_date" source="transactionDate" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
