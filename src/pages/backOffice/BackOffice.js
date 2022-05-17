import React, { Fragment, useContext } from "react";
import { Navigate, Outlet, useMatch } from "react-router-dom";

import Header from "../../components/Header";
import AdminLayout from "../../layout/AdminLayout";
import { AppContext } from "../../context/AppDataContext";

const BackOffice = () => {
  const renderDefault = useMatch("/dashboard");
  const { isUserAuth } = useContext(AppContext);
  let match = useMatch('/dashboard/shop')

  return (
    <Fragment>
      {isUserAuth ? (
        <Fragment>
          {renderDefault ? (
            <Navigate to="main" replace={true} />
          ) : (
            <div className="page">
              <Header />
              <AdminLayout bannerOff={!!match}>
                <Outlet></Outlet>
              </AdminLayout>{" "}
            </div>
          )}
        </Fragment>
      ) : (
        <Navigate to="/" replace={true} />
      )}
    </Fragment>
  );
};

export default BackOffice;
