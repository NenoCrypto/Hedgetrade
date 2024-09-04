import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import TradingViewChart from "../Components/Chart/TradingViewChart";
import { NoteBookIconServer } from "../Components/Icons";
import axios from "axios";
import { MarketDropdown } from "../Components/Form/MarketDropdown"; // Import the MarketDropdown component
import FormInput from "../Components/Form/FormInput";

const MyAccount = () => {
  const { handleSubmit, control } = useForm();
  const loggedInUser = "cm0l3ojkh0002u7cn28olsmn1";
  const [selectedPair, setSelectedPair] = useState<string>("BTCUSDT");

  const onSubmit = async (data: any) => {
    const blueprintData = {
      aiData: {}, // Add relevant AI data if applicable
      buyPair: data.buyPair,
      description: data.description || "",
      exchange: data.exchange,
      expiry: data.expiry,
      maxOrder: data.maxOrder,
      minOrder: data.orderPrice,
      name: data.name || "Blueprint Name",
      sellPair: data.sellPair,
      stake: data.stake,
      stakeAmount: parseFloat(data.stakeAmount) || 0,
      stopLoss: data.stopLoss,
      successRate: parseFloat(data.successRate) || 0,
      takeProfit: data.takeProfit,
      tradeType: data.tradeType,
      user: {
        id: loggedInUser,
      },
    };

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbTBoeTYyOTYwMDAwemZhaDYwMHk3NW5rIiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcyNTM3NzI3MywiZXhwIjoxNzI1NTUwMDczfQ.9rXTPUPHZpAqPXl-yyMefYTvDfUDBh_3Gg-k6iTImqE";

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axios.post(
        "http://localhost:3002/api/blueprints",
        blueprintData,
        { headers }
      );
      console.log("Blueprint created successfully", response.data);
    } catch (error) {
      console.error("Error creating blueprint", error);
    }
  };

  return (
    <div className="dashboard-container">
      <Typography variant="h5" className="dashboard-header">
        My Account
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card className="hedge-card">
            <CardContent></CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="hedge-card">
            <CardContent>
             
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="hedge-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Instructions
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Staking
              </Typography>
              <Typography variant="body2" paragraph>
                Higher the stake, more confident you are in your prediction
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Expiry
              </Typography>
              <Typography variant="body2" paragraph>
                Set expiry of your blueprints to your discretion
              </Typography>

              <Typography variant="subtitle1" gutterBottom>
                Price limits
              </Typography>
              <Typography variant="body2" paragraph>
                Set the minimum and maximum order price limits that you feel
                should be followed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MyAccount;
