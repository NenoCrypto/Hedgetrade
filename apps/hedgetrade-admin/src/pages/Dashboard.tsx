import * as React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import "./dashboard.css";
import { DashBoardCard } from "../Components/Cards/DashBoardCard";
import { BluePrintCard } from "../Components/Cards/BluePrintCard";
import { StarIcon } from "../Components/Icons/StarIcon";
import { CartIcon } from "../Components/Icons/CartIcon";
import { WalletIcon } from "../Components/Icons/WalletIcon";
import { LeaderBoardCard } from "../Components/Cards/LeaderBoardCard";
import { NoteBookIcon, PencilIcon } from "../Components/Icons";


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

const Dashboard = () => (
  
  <div className="dashboard-container">
    <Grid container spacing={3}>
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
          icon={NoteBookIcon}
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

    <Grid container spacing={4}>
      <Grid item xs={12} md={9}>
        <Typography variant="h5" className="dashboard-header">Featured BluePrints</Typography>
        <Grid container spacing={4}>
          {blueprints.map((blueprint, i) => (
            <Grid key={i} item xs={12} md={4}>
              <BluePrintCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={3} >
        <Typography variant="h5" className="dashboard-header">LeaderBoard</Typography>

        {LeaderBoard.map((lItem) => (
          <LeaderBoardCard />
        ))}
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
