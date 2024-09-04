import React, { useEffect, useState } from "react";
import { DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LinearProgress, Paper, CssBaseline } from "@material-ui/core";
import { CustomRoutes } from "./Components/CustomRoutes";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CreateBluePrint from "./pages/CreateBluePrint";
import { SideMenu } from "./Components/SideMenu";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import { CustomThemeProvider } from "./Contexts/ThemeContext";
import BluePrintsMarket from "./pages/BluePrintsMarket";
import PurchasedBluePrints from "./pages/PurchasedBluePrints";
import MyAccount from "./pages/MyAccount";
import LeaderBoard from "./pages/LeaderBoard";
import HowToGuide from "./pages/HowToGuide";
import HedgeAI from "./pages/HedgeAI";
import MyBluePrints from "./pages/MyBluePrints";
import BluePrintProfile from "./pages/BluePrintProfile";
import Wallet from "./pages/Wallet";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  if (!dataProvider) {
    return (
      <Paper>
        <LinearProgress />
      </Paper>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized); // Toggle sidebar minimized state
  };

  return (
    <CustomThemeProvider>
      <CssBaseline />
      <Router>
        <div className="App">
          <TopBar toggleSidebar={toggleSidebar} isSidebarMinimized={isSidebarMinimized} />
          <div style={{ display: "flex" }}>
            <SideMenu isMinimized={isSidebarMinimized} /> 
            <div
              style={{
                marginLeft: isSidebarMinimized ? "60px" : "200px", 
                padding: "20px",
                width: "100%",
                transition: "margin-left 0.3s",
                backgroundColor: "#111111",
                minHeight: "100vh",
                marginTop: "40px"
              }}
            >
              <Routes>
                {CustomRoutes}
                {/* <Route path="/" element={<Dashboard />} key="dashboard" /> */}
                {/* <Route path="/create-blueprint" element={<CreateBluePrint />} key="create-blueprint" /> */}
                {/* <Route path="/my-blueprints" element={<MyBluePrints />} key="my-blueprints" />
                <Route path="/blueprints-market" element={<BluePrintsMarket />} key="blueprint-marketplace" />
                <Route path="/purchased-blueprints" element={<PurchasedBluePrints />} key="purchased-blueprints" />
                <Route path="/my-account" element={<MyAccount />} key="my-account" />
                <Route path="/leaderboard" element={<LeaderBoard />} key="leaderboard" />
                <Route path="/how-ro-guide" element={<HowToGuide />} key="how-to-guides" />
                <Route path="/hedge-ai" element={<HedgeAI />} key="hedge-ai" />
                <Route path="/blueprint-profile" element={<BluePrintProfile />} key="blueprint-profile" />
                <Route path="/wallet" element={<Wallet />} key="wallet" /> */}

              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </CustomThemeProvider>
  );
};

export default App;
