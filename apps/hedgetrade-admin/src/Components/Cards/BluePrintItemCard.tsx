import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { DotsIcon, FireIcon } from "../Icons";
import "./card.css";
import { Button } from "react-admin";
import { StarIcon } from "../Icons";
import { BluePrintDataLabel } from "../DataLabels";
import Timer from "../Timer";

interface Stake {
    id: string;
    // Define the structure for Stake
  }
  
  interface Transaction {
    id: string;
    // Define the structure for Transaction
  }
  
  interface User {
    id: string;
    firstName: string;
    walletAddress: string;
    // Add other relevant user fields if needed
  }
  

interface Blueprint {
    id: string;
    name: string;
    aiData?: any; // assuming JSON can be any structure
    buyPair?: string;
    description?: string;
    exchange?: string;
    expiry?: string;
    maxOrder?: string;
    minOrder?: string;
    sellPair?: string;
    stake?: string;
    stakeAmount: number;
    stopLoss?: string;
    successRate: number;
    takeProfit?: string;
    tradeType?: string;
    stakes?: Stake[]; // This would require a Stake interface to be defined separately
    transactions?: Transaction[]; // This would require a Transaction interface
    createdAt: string; // Assuming DateTime is a string in ISO format
    updatedAt: string; // Assuming DateTime is a string in ISO format
    user: User; // This would require a User interface to be defined separately
  }
  
interface BluePrintItemCardProps {
  blueprint: Blueprint;
}

export const BluePrintItemCard: React.FC<BluePrintItemCardProps> = ({
  blueprint,
}) => {
  console.log(blueprint);
  return (
    <Card className="blueprint-card">
      <CardContent>

        <Grid className="card-header" container spacing={4}>
          <Grid item className="grid-row-item-left" xs={6} md={6}>
            <Avatar
              variant="circular"
            //   src={blueprint.profile}
              alt={blueprint.user.firstName}
              className={"blueprint-avatar"}
            />
            <Typography variant="body2">Jimmy</Typography>
          </Grid>
          <Grid item className="grid-row-item-right" xs={6} md={6}>
            <StarIcon size={12} />
            <Typography variant="body2">543</Typography>
            <a href="#">
              <DotsIcon size={12} />
            </a>
          </Grid>
        </Grid>

        <Grid container spacing={1} className="grid-row-item-rating">
          <Grid className="grid-row-item-left" item xs={6} md={6}>
            {[...Array(Math.round(blueprint.successRate))].map((_, index) => (
              <FireIcon key={index} size={12} />
            ))}
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography variant="h4" align="right">
              {/* {blueprint.buyPair} */}
              *****
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={6}>
            <BluePrintDataLabel
              dataLabel={"Time Left"}
              dataValue={<Timer expiryDate="2024-09-20T12:00:00Z"/>}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <BluePrintDataLabel
              dataLabel={"Stake Price (ACA)"}
              dataValue={String(blueprint.stakeAmount)}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <BluePrintDataLabel
              dataLabel={"Buyers"}
              dataValue={String(blueprint.transactions?.length)}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <BluePrintDataLabel
              color="lawngreen"
              dataLabel={"Potential Profit"}
              dataValue={"+"+String(blueprint.successRate)+"%"}
            />
          </Grid>
          </Grid>
          {/* swithing the buttons depending on the blueprint owrnership or  purchase status*/}
        <Grid container spacing={1} className="blueprint-buttons-container">
          {/* <Grid item xs={6} md={6}>
            <Button className="blueprint-button">
              <Typography>MANAGE</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} md={6}>
            <Button className="blueprint-button">
              <Typography>STATS</Typography>
            </Button>
          </Grid> */}
          <Grid item xs={12} md={12}>
            <Button className="blueprint-button">
              <Typography>UNLOCK BLUEPRINT</Typography>
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
