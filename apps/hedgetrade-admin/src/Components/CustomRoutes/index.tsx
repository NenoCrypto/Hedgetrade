import * as React from "react";
import { Route } from "react-router-dom";
import CreateBluePrint from "../../pages/CreateBluePrint";
import Dashboard from "../../pages/Dashboard";

// Define the custom routes
export const CustomRoutes = [
  <Route path="/dashboard" element={<Dashboard />} key="dashboard" />,
  <Route path="/create-blueprint" element={<CreateBluePrint />} key="create-blueprint" />,
  <Route path="/my-blueprints" element={<CreateBluePrint />} key="my-blueprints" />,
  <Route path="/blueprint-marketplace" element={<CreateBluePrint />} key="blueprint-marketplace" />,
  <Route path="/purchased-blueprints" element={<CreateBluePrint />} key="purchased-blueprints" />,
  <Route path="/my-account" element={<CreateBluePrint />} key="my-account" />,
  <Route path="/leaderboard" element={<CreateBluePrint />} key="leaderboard" />,
  <Route path="/how-to-guides" element={<CreateBluePrint />} key="how-to-guides" />,
];
