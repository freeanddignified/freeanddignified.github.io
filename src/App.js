import { AppProvider } from "./context/AppDataContext";
import AppRouter from "./AppRouter";
import {HashRouter} from "react-router-dom";
import React from "react";

const App = () => {
  return (
      <HashRouter>
          <AppProvider>
              <AppRouter />
          </AppProvider>
      </HashRouter>
    // <div className="App">
    //   Here will be a demo free and dignified site
    // </div>
  );
};

export default App;
