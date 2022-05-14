import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import { AppContext } from "../../context/AppDataContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Check credentials in JSON for match
  // Show error & send for Registration, if not matched
  const onSubmit = (changeLoginStatus, userCreddentials) => {
    changeLoginStatus(true);
    console.log(userCreddentials);
  };

  return (
    <div>
      <Header></Header>
      <h1>Please log in</h1>
      <AppContext.Consumer>
        {({ isUserAuth, setIsUserAuth }) => {
          return isUserAuth ? (
            <h2>You are already logged in</h2>
          ) : (
            <form
              onSubmit={handleSubmit((...rest) =>
                onSubmit(setIsUserAuth, rest[0])
              )}
            >
              <input
                placeholder="e-mail"
                type="email"
                {...register("e-mail", { required: true })}
              />
              {errors["e-mail"] && <span>E-mail required</span>}
              <input
                placeholder="password"
                {...register("password", { required: true, maxLength: 24 })}
              />
              {errors.password && <span>Password required</span>}

              <input type="submit" />
            </form>
          );
        }}
      </AppContext.Consumer>
      <h3>Not yet registered?</h3>
      <Link to="/auth/register">Registration</Link>
    </div>
  );
};

export default Login;

// Apply YUP for improved e-mail validation?
// Put credentials to local storage & compare to content on submit?
