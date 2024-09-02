import React from "react";
import {
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { DashboardIcon } from "../Icons";
import "./card.css";
import DashboardCardIcon from "./DashboardCardIcon";
export const DashBoardCard = (props:any) => {
  return (
    // <Paper elevation={6}>
    <Card className="dashboard-card">
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={2} md={2}>
            <DashboardCardIcon icon={props.icon} color={props.color}/>
          </Grid>

          <Grid item xs={5} md={5}>
          <div className="dashboard-stats">
            <Typography variant="h4">{props.leftValue}</Typography>
            <Typography className="dashboard-stats-desc" variant="body2">{props.leftLabel}</Typography>
            </div>
          </Grid>

          <Grid item xs={5} md={5}>
          <div className="dashboard-stats">
            <Typography variant="h4">{props.rightValue}</Typography>
            <Typography className="dashboard-stats-desc" variant="body2">{props.rightLabel}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    // </Paper>
  );
};
