import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BlueprintList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Blueprints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AI Data" source="aiData" />
        <TextField label="Buy Pair" source="buyPair" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="Exchange" source="exchange" />
        <TextField label="Expiry" source="expiry" />
        <TextField label="ID" source="id" />
        <TextField label="Max Order" source="maxOrder" />
        <TextField label="Min Order" source="minOrder" />
        <TextField label="name" source="name" />
        <TextField label="Sell Pair" source="sellPair" />
        <TextField label="stake" source="stake" />
        <TextField label="stake_amount" source="stakeAmount" />
        <TextField label="Stop Loss" source="stopLoss" />
        <TextField label="success_rate" source="successRate" />
        <TextField label="Take Profit" source="takeProfit" />
        <TextField label="Trade Type" source="tradeType" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user_" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
