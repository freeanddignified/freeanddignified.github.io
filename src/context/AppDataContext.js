import React, { createContext, useMemo, useState } from "react";

const AppContext = createContext({});

const AppProvider = (props) => {
  const [isUserAuth, setIsUserAuth] = useState(false);

  const appDataMemo = useMemo(
    () => ({
      isUserAuth, setIsUserAuth
    }),
    [isUserAuth, setIsUserAuth]
  );

  return (
    <AppContext.Provider value={appDataMemo}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
