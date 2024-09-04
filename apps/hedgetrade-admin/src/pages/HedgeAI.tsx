import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { BluePrintCard } from "../Components/Cards/BluePrintCard";

const HedgeAI = () => {

    const blueprints = [
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
      <Grid item xs={12} md={9}>
        <Typography variant="h5" className="dashboard-header">BluePrints</Typography>
        <Grid container spacing={0}>
          {blueprints.map((blueprint, i) => (
            <Grid key={i} item xs={12} md={3}>
              <BluePrintCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default HedgeAI;
