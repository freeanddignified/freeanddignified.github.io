import React, { createContext, useMemo, useState } from "react";

const AppContext = createContext({});

const AppProvider = (props) => {
  const [isUserAuth, setIsUserAuth] = useState(false);
  const [userName, setUserName] = useState("");

  const appDataMemo = useMemo(
    () => ({
      isUserAuth,
      setIsUserAuth,
      userName,
      setUserName,
    }),
    [isUserAuth, setIsUserAuth, userName, setUserName]
  );

  return (
    <AppContext.Provider value={appDataMemo}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
