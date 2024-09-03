import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StakeTitle } from "../stake/StakeTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { UserTitle } from "../user/UserTitle";

export const BlueprintCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Buy Pair" source="buyPair" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="Exchange" source="exchange" />
        <TextInput label="Expiry" source="expiry" />
        <TextInput label="Max Order" source="maxOrder" />
        <TextInput label="Min Order" source="minOrder" />
        <TextInput label="name" source="name" />
        <TextInput label="Sell Pair" source="sellPair" />
        <TextInput label="stake" source="stake" />
        <NumberInput label="stake_amount" source="stakeAmount" />
        <ReferenceArrayInput
          source="stakes"
          reference="Stake"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StakeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Stop Loss" source="stopLoss" />
        <NumberInput label="success_rate" source="successRate" />
        <TextInput label="Take Profit" source="takeProfit" />
        <TextInput label="Trade Type" source="tradeType" />
        <ReferenceArrayInput
          source="transactions"
          reference="Transaction"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TransactionTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="user_">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
