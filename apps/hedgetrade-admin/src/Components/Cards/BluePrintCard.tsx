import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { DashboardIcon, DotsIcon, FireIcon, UsageIcon } from "../Icons";
import "./card.css";
import { Button } from "react-admin";
import { StarIcon } from "../Icons";
import React from "react";
export const BluePrintCard = () => {
  return (
    // <Paper elevation={6}>
    <Card className="blueprint-card">
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
        <Grid container spacing={2}>
          <Grid className="grid-row-item-left" item xs={6} md={6}>
            <FireIcon size={20} />
            <FireIcon size={20} />
            <FireIcon size={20} />
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography align="right" variant="h6">
              ETH/BTC
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography align="center" variant="h6">
              00:45:25
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography align="center" variant="h6">
              100
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography align="center" variant="h6">
              327
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Typography align="center" variant="h6" color={"secondary"}>
              +60%
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Button fullWidth color="secondary">
              <Typography variant="body2">Manage</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} md={6}>
            <Button color="secondary" fullWidth>
              <Typography variant="body2">Stake</Typography>
            </Button>
          </Grid>
          
        </Grid>
      </CardContent>
    </Card>
    // </Paper>
  );
};
