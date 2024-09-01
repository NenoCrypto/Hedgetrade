import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@material-ui/core";
  import { DashboardIcon, UsageIcon } from "../Icons";
  import "./card.css";
  import { Button } from "react-admin";
import React from "react";
  export const SingleBluePrintCard = () => {
    return (
      // <Paper elevation={6}>
      <Card className="blueprint-card">
      
        <CardContent>
        <Grid container spacing={6}>
            <Grid item className="grid-row-item" xs={6} md={6}>
              <Avatar variant="circle"  className={"blueprint-avatar"} />
              <Typography variant="h6">Jimmy</Typography>
            </Grid>
            <Grid item className="grid-row-item" xs={6} md={6}>
                <DashboardIcon />
                <Typography>543</Typography>
                <a href="#">
                  <UsageIcon />
                </a>
            </Grid>
          </Grid>
          <Grid container spacing={6}>
            <Grid item xs={6} md={6}>
                <DashboardIcon size={20} />
            </Grid>
  
            <Grid item xs={6} md={6}>
                <Typography align="right" variant="h6">ETH/BTC</Typography>
            </Grid>
  
            <Grid item xs={6} md={6}>
                <Typography align="center" variant="h6">00:45:25</Typography>
            </Grid>
  
            <Grid item xs={6} md={6}>
                <Typography align="center" variant="h6">100</Typography>
            </Grid>
  
            <Grid item xs={6} md={6}>
                <Typography align="center" variant="h6">327</Typography>
            </Grid>
  
            <Grid item xs={6} md={6}>
                <Typography align="center"  variant="h6" color={'secondary'}>+60%</Typography>
            </Grid>
  
            <Grid item xs={6} md={6}>
               <Button>
               <Typography variant="body2">
                  Manage
                  </Typography></Button>
            </Grid>
            <Grid item xs={6} md={6}>
            <Button><Typography variant="body2">Stake</Typography></Button>
            </Grid>
  
          </Grid>
        </CardContent>
      </Card>
      // </Paper>
    );
  };
  