import React from "react";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { DashboardIcon, DotsIcon, FireIcon, UsageIcon } from "../Icons";
import "./card.css";
import { Button } from "react-admin";
import { StarIcon } from "../Icons";
export const LeaderBoardCard = () => {
  return (
    // <Paper elevation={6}>
    <Card className="leaderboard-card">
    <CardContent>
      <Grid className="" container spacing={4}>
        <Grid item className="grid-row-item-left" xs={6} md={6}>
          <Avatar
            variant="circle"
            sizes="24"
            className={"blueprint-avatar"}
          />
          <Typography variant="body2">Jimmy</Typography>

          {/* <Grid className="grid-row-item-left" item xs={6} md={6}>
          <FireIcon size={12} />
          <FireIcon size={12} />
          <FireIcon size={12} />
        </Grid> */}
        </Grid>
        <Grid  item className="grid-row-item-right" xs={6} md={6}>
          <StarIcon size={12} />
          <Typography variant="body2">543</Typography>
          <a href="#">
            <DotsIcon size={12} />
          </a>
        </Grid>
      </Grid>
    
    </CardContent>
  </Card>
    // </Paper>
  );
};
