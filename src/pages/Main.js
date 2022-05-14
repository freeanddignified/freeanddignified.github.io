import React from "react";
import { Outlet, Link } from "react-router-dom";

import Header from "../components/Header";
import { AppContext } from "../context/AppDataContext";

const Main = () => {
  return (
    <div>
      <Header />
      <AppContext.Consumer>
        {({ isUserAuth }) => {
          return isUserAuth ? (
            <h1>Main page</h1>
          ) : (
            <h2>You must be registered and logged in to see this content</h2>
          );
        }}
      </AppContext.Consumer>
      <Outlet />
    </div>
  );
};

export default Main;
