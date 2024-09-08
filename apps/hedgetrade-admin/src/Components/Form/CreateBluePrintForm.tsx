import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useMutation, gql } from "@apollo/client";
import { MarketDropdown } from "./MarketDropdown";

// GraphQL Mutation for creating a blueprint
const CREATE_BLUEPRINT_MUTATION = gql`
  mutation CreateBlueprint($input: BlueprintCreateInput!) {
    createBlueprint(data: $input) {
      id
      name
      description
      successRate
      stopLoss
      takeProfit
      stakeAmount
      stake
      maxOrder
      minOrder
      tradeType
      exchange
      buyPair
      sellPair
    }
  }
`;

const CreateBluePrintForm = (props: any) => {
  const { handleSubmit, control } = useForm();
  const loggedInUser = "cm0l3ojkh0002u7cn28olsmn1"; // Replace with real user ID

  const [createBlueprint, { data, loading, error }] = useMutation(
    CREATE_BLUEPRINT_MUTATION
  );

  const onSubmit = async (formData: any) => {
    const blueprintData = {
      aiData: {}, // Handle this as needed
      buyPair: formData.buyPair || "",
      description: formData.description || "",
      exchange: formData.exchange || "",
      expiry: formData.expiry || "",
      maxOrder: formData.maxOrder || "",
      minOrder: formData.minOrder || "",
      name: formData.name || "Blueprint Name",
      sellPair: formData.sellPair || "",
      stake: formData.stake || "",
      stakeAmount: parseFloat(formData.stakeAmount) || 0,
      stopLoss: formData.stopLoss || "",
      successRate: parseFloat(formData.successRate) || 0,
      takeProfit: formData.takeProfit || "",
      tradeType: formData.tradeType || "",
      transactions: [], // Add logic for nested transactions if necessary
      user: {
        id: loggedInUser,
      },
    };

    try {
      await createBlueprint({
        variables: {
          input: blueprintData,
        },
      });
      console.log("Blueprint created successfully");
    } catch (error) {
      console.error("Error creating blueprint", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controller
            name="exchange"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Exchange" // Add/Modify Label here
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="buyPair"
            control={control}
            defaultValue=""
            render={({ field }) => (
                <MarketDropdown
                value={props.selectedPair}
                onChange={(event: any) =>
                  props.setSelectedPair(event.target.value as string)
                }
                onBlur={() => {}}
                name="tradingPair"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="tradeType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Trade Type" // Label
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="stakeAmount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Stake Amount" // Label
                type="number"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="minOrder"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Min Order" // Label
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="maxOrder"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Max Order" // Label
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="stopLoss"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Stop Loss" // Label
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="takeProfit"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Take Profit" // Label
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="successRate"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Success Rate (%)" // Label
                type="number"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={6}>
          <Controller
            name="expiry"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Expiry Date" // Label
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Description" // Label
                fullWidth
                variant="outlined"
                multiline
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Create Blueprint
          </Button>
        </Grid>
      </Grid>

      {/* Status Messages */}
      {loading && <p>Creating blueprint...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <p>Blueprint created successfully: {data.createBlueprint.name}</p>}
    </form>
  );
};

export default CreateBluePrintForm;
