import React from "react";
import { useQuery } from "@apollo/client";
import { Typography, Grid } from "@material-ui/core";
import { BluePrintItemCard } from "../Components/Cards/BluePrintItemCard";
import { GET_BLUEPRINTS } from "../data-provider/queries";

const BluePrintsMarket: React.FC = () => {
  const { loading, error, data } = useQuery(GET_BLUEPRINTS);

  if (loading) {
    return <Typography>Loading blueprints...</Typography>;
  }

  if (error) {
    return <Typography color="error">Error fetching blueprints: {error.message}</Typography>;
  }

  return (
    <div className="dashboard-container">
      <Typography variant="h5" className="dashboard-header">
        BluePrints Market
      </Typography>
      <Grid container spacing={2}>
        {data.blueprints.map((blueprint: any) => (
          <Grid key={blueprint.id} item xs={12} md={3}>
            <BluePrintItemCard blueprint={blueprint} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BluePrintsMarket;
