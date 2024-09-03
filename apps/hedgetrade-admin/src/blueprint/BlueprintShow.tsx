import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BLUEPRINT_TITLE_FIELD } from "./BlueprintTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BlueprintShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Stake"
          target="blueprintId"
          label="Stakes"
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
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="blueprintId"
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
