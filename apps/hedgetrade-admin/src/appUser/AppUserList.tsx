import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AppUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AppUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="password_hash" source="passwordHash" />
        <TextField label="rank" source="rank" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <TextField label="wallet_address" source="walletAddress" />
      </Datagrid>
    </List>
  );
};
