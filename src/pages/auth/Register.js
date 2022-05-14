import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import { AppContext } from "../../context/AppDataContext";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Put credentials to JSON & check it for duplicates
  const onSubmit = (changeLoginStatus, userCreddentials) => {
    changeLoginStatus(true);
    console.log(userCreddentials);
  };

  return (
    <div>
      <Header></Header>
      <h1>Please register</h1>
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
      <h3>Already registered?</h3>
      <Link to="/auth/login">Login</Link>
    </div>
  );
};

export default Register;
