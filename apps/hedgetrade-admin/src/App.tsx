import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./App.scss";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { SideMenu } from "./Components/SideMenu";
import TopBar from "./Components/TopBar";
import Footer from "./Components/Footer";
import { CustomThemeProvider } from "./Contexts/ThemeContext";
import { CREDENTIALS_LOCAL_STORAGE_ITEM } from "./constants";
import { CustomRoutes } from "./Components/CustomRoutes";

// Set up the Apollo Client (this replaces buildGraphQLProvider)
const httpLink = createHttpLink({
  uri: "http://localhost:3002/graphql",
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(CREDENTIALS_LOCAL_STORAGE_ITEM);
  console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

const App = (): React.ReactElement => {
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarMinimized(!isSidebarMinimized);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <CustomThemeProvider>
        <CssBaseline />
        <Router>
          <div className="App">
            <TopBar toggleSidebar={toggleSidebar} isSidebarMinimized={isSidebarMinimized} />
            <div style={{ display: "flex" }}>
              <SideMenu isMinimized={isSidebarMinimized} />
              <div
                style={{
                  marginLeft: isSidebarMinimized ? "60px" : "15%",
                  
                }}
                className="dashboard-area"
              >
                <Routes>
                  {/* Route to BluePrintsMarket page */}
                  {/* <Route path="/blueprints" element={<BluePrintsMarket />} /> */}
                  {CustomRoutes}
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </Router>
      </CustomThemeProvider>
    </ApolloProvider>
  );
};

export default App;
