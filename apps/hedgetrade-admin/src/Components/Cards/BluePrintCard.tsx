import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { DotsIcon, FireIcon } from "../Icons";
import "./card.css";
import { StarIcon } from "../Icons";
import React from "react";
import { BluePrintDataLabel } from "../DataLabels";
export const BluePrintCard = () => {
  return (
    // <Paper elevation={6}>
    <Card className="blueprint-card">
      <CardContent>
        <Grid className="card-header" container spacing={4}>
          <Grid item className="grid-row-item-left" xs={6} md={6}>
            <Avatar
              variant="circular"
              sizes="24"
              className={"blueprint-avatar"}
            />
            <Typography variant="body2">Ghochef</Typography>
          </Grid>
          <Grid  item className="grid-row-item-right" xs={6} md={6}>
            <StarIcon size={12} />
            <Typography variant="body2">543</Typography>
            <a href="#">
              <DotsIcon size={12} />
            </a>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid className="grid-row-item-left" item xs={6} md={6}>
            <FireIcon size={12} />
            <FireIcon size={12} />
            <FireIcon size={12} />
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography variant="h4"  align="right" >
              ETHUSDT
            </Typography>
          </Grid>
          </Grid>
        <Grid container spacing={1}>
          <Grid item xs={6} md={6}>
            <BluePrintDataLabel
              dataLabel={"Time Left"}
              dataValue={" 00:45:25"}
            />
          </Grid>

          <Grid item xs={6} md={6}>
            <BluePrintDataLabel dataLabel={"Stake Price (ACA)"} dataValue={"100"} />
          </Grid>

          <Grid item xs={6} md={6}>
            <BluePrintDataLabel dataLabel={"Buyers"} dataValue={"327"} />
          </Grid>

          <Grid item xs={6} md={6}>
            <BluePrintDataLabel dataLabel={"Potential Profit"} dataValue={"+60%"} />
          </Grid>

          <Grid item xs={6} md={6} style={{display:"flex"}}>
            <a className="blueprint-button"  >
              Manage
            </a>
          </Grid>
          <Grid item xs={6} md={6} style={{display:"flex"}}>
            <a className="blueprint-button"  >
              Stake
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    // </Paper>
  );
};
