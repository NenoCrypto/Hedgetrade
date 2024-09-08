import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { DashBoardCard } from "../Components/Cards/DashBoardCard";
import { StarIcon } from "../Components/Icons/StarIcon";
import { CartIcon } from "../Components/Icons/CartIcon";
import { WalletIcon } from "../Components/Icons/WalletIcon";
import { LeaderBoardCard } from "../Components/Cards/LeaderBoardCard";
import { PencilIcon } from "../Components/Icons";
import { BluePrintItemCard } from "../Components/Cards/BluePrintItemCard";
import { GET_BLUEPRINTS } from "../data-provider/queries";
import { useQuery } from "@apollo/client";

const LeaderBoard = [
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },

  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
  {
    name: "kawas",
  },
];

const Dashboard = () => {
  const { loading, error, data } = useQuery(GET_BLUEPRINTS);

  if (loading) {
    return <Typography>Loading blueprints...</Typography>;
  }

  if (error) {
    return (
      <Typography color="error">
        Error fetching blueprints: {error.message}
      </Typography>
    );
  }

  return (
    <div className="dashboard-container">
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>

          <DashBoardCard
            color={"#76D1F5"}
            leftLabel={"HedgeScore"}
            leftValue={"532"}
            rightLabel={"Trader Rank"}
            rightValue={"23"}
            icon={StarIcon}
          />
        </Grid>

        <Grid item xs={6} md={3}>
          <DashBoardCard
            color={"#9799A9"}
            leftLabel={"Published"}
            leftValue={"12"}
            rightLabel={"Success Rate"}
            rightValue={"77%"}
            icon={PencilIcon}
          />
        </Grid>

        <Grid item xs={6} md={3}>
          <DashBoardCard
            color={"#d476dc"}
            leftLabel={"Purchased"}
            leftValue={"5"}
            rightLabel={" Success Rate"}
            rightValue={"80%"}
            icon={CartIcon}
          />
        </Grid>

        <Grid item xs={6} md={3}>
          <DashBoardCard
            color={"#991181"}
            leftLabel={"ACA Earned"}
            leftValue={"11,200"}
            rightLabel={"Total Profit"}
            rightValue={"755%"}
            icon={WalletIcon}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Typography variant="h4" className="dashboard-header">
            Featured BluePrints
          </Typography>
          <Grid container spacing={2}>
            {data.blueprints.map((blueprint: any) => (
              <Grid key={blueprint.id} item xs={12} md={4}>
                <BluePrintItemCard blueprint={blueprint} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h4" className="dashboard-header">
            LeaderBoard
          </Typography>

          {LeaderBoard.map((lItem) => (
            <LeaderBoardCard />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
