import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { BluePrintCard } from "../Components/Cards/BluePrintCard";
import { LeaderBoardCard } from "../Components/Cards/LeaderBoardCard";

const LeaderBoard = () => {
  const Leaderboard = [
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
    {
      name: "Blueprint",
      profile: "Profile",
    },
  ];

  return (
    <div className="dashboard-container">
      <Typography variant="h5" className="dashboard-header">
        LeaderBoard
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
              {Leaderboard.map((Item: any) => (
                <LeaderBoardCard />
              ))}
            
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="hedge-card">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Rewards Merit
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

export default LeaderBoard;
