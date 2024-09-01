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
        <Grid container spacing={6}>
          <Grid item className="grid-row-item-left" xs={6} md={6}>
            <Avatar
              variant="circle"
              sizes="48"
              className={"blueprint-avatar"}
            />
            <Typography variant="body2">Jimmy</Typography>
          </Grid>
          <Grid item className="grid-row-item-right" xs={6} md={6}>
            <StarIcon size={20} />
            <Typography>543</Typography>
            <a href="#">
              <DotsIcon />
            </a>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    // </Paper>
  );
};
