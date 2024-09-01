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
export const DashBoardCard = (props:any) => {
  return (
    // <Paper elevation={6}>
    <Card className="dashboard-card">
      <CardContent>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <div className="dashboard-icon">
              <props.icon 
              style={{
                padding: '10px',
                border: '3px solid',
                borderRadius: '50%',
                borderColor: props.color,
              }}
              color={props.color}
              height={24} width={24}/>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
          <div className="dashboard-stats">
            <Typography variant="h4">{props.leftValue}</Typography>
            <Typography variant="body2">{props.leftLabel}</Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
          <div className="dashboard-stats">
            <Typography variant="h4">{props.rightValue}</Typography>
            <Typography variant="body2">{props.rightLabel}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    // </Paper>
  );
};
