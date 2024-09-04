import * as React from "react";
import { Route } from "react-router-dom";
import CreateBluePrint from "../../pages/CreateBluePrint";
import Dashboard from "../../pages/Dashboard";
import BluePrintProfile from "../../pages/BluePrintProfile";
import BluePrintsMarket from "../../pages/BluePrintsMarket";
import HedgeAI from "../../pages/HedgeAI";
import HowToGuide from "../../pages/HowToGuide";
import LeaderBoard from "../../pages/LeaderBoard";
import MyAccount from "../../pages/MyAccount";
import MyBluePrints from "../../pages/MyBluePrints";
import PurchasedBluePrints from "../../pages/PurchasedBluePrints";
import Wallet from "../../pages/Wallet";

// Define the custom routes
export const CustomRoutes = [
  <Route path="/" element={<Dashboard />} key="dashboard" />,
  <Route path="/create-blueprint" element={<CreateBluePrint />} key="create-blueprint" />,
  <Route path="/my-blueprints" element={<MyBluePrints />} key="my-blueprints" />,
  <Route path="/blueprints-market" element={<BluePrintsMarket />} key="blueprint-marketplace" />,
  <Route path="/purchased-blueprints" element={<PurchasedBluePrints />} key="purchased-blueprints" />,
  <Route path="/my-account" element={<MyAccount />} key="my-account" />,
  <Route path="/leaderboard" element={<LeaderBoard />} key="leaderboard" />,
  <Route path="/how-ro-guide" element={<HowToGuide />} key="how-to-guides" />,
  <Route path="/hedge-ai" element={<HedgeAI />} key="hedge-ai" />,
  <Route path="/blueprint-profile" element={<BluePrintProfile />} key="blueprint-profile" />,
  <Route path="/wallet" element={<Wallet />} key="wallet" />,

];
