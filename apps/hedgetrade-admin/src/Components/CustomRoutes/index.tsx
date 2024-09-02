import * as React from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import CreateBluePrint from "../../pages/CreateBluePrint";
import Dashboard from "../../pages/Dashboard";

export default [
  <Router>
    <Routes>
      <Route path="/" Component={Dashboard} />
      <Route path="/create-blueprint" Component={CreateBluePrint} />
      <Route path="/my-blueprints" Component={CreateBluePrint} />
      <Route path="/blueprint-marketplace" Component={CreateBluePrint} />
      <Route path="/purchased-blueprints" Component={CreateBluePrint} />
      <Route path="/my-account" Component={CreateBluePrint} />
      <Route path="/leaderboard" Component={CreateBluePrint} />
      <Route path="/how-to-guides" Component={CreateBluePrint} />
    </Routes>
  </Router>,
];
