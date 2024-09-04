import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { BluePrintCard } from "../Components/Cards/BluePrintCard";

const PurchasedBluePrints = () => {
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
      <Typography variant="h5" className="dashboard-header">
        Purchased BluePrints
      </Typography>
      <Grid container spacing={2}>
        {blueprints.map((blueprint, i) => (
          <Grid key={i} item xs={12} md={3}>
            <BluePrintCard />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PurchasedBluePrints;
