import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const AppUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="password_hash" source="passwordHash" />
        <TextField label="rank" source="rank" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <TextField label="wallet_address" source="walletAddress" />
      </SimpleShowLayout>
    </Show>
  );
};
