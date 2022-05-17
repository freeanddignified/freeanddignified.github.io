import React, { createContext, useMemo, useState } from "react";
import { categoriesData } from '../data/categories'
import { productsData } from '../data/products'

const AppContext = createContext({});

const AppProvider = (props) => {
    const [isUserAuth, setIsUserAuth] = useState(false);
    const [userName, setUserName] = useState("");
    const [categories, setCategories] = useState(categoriesData)
    const [products, setProducts] = useState(productsData)

  const appDataMemo = useMemo(
    () => ({
      isUserAuth,
      setIsUserAuth,
      userName,
      setUserName,
        categories, setCategories,
        products, setProducts
    }),
    [isUserAuth, setIsUserAuth, userName, setUserName, categories, setCategories, products, setProducts]
  );

  return (
    <AppContext.Provider value={appDataMemo}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
