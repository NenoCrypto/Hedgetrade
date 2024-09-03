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
                <Route path="/" element={<Dashboard />} key="dashboard" />
                <Route path="/create-blueprint" element={<CreateBluePrint />} key="create-blueprint" />
                <Route path="/my-blueprints" element={<CreateBluePrint />} key="my-blueprints" />
                <Route path="/blueprint-marketplace" element={<CreateBluePrint />} key="blueprint-marketplace" />
                <Route path="/purchased-blueprints" element={<CreateBluePrint />} key="purchased-blueprints" />
                <Route path="/my-account" element={<CreateBluePrint />} key="my-account" />
                <Route path="/leaderboard" element={<CreateBluePrint />} key="leaderboard" />
                <Route path="/how-to-guides" element={<CreateBluePrint />} key="how-to-guides" />
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
