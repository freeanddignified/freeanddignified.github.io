import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button, Box, Container, TextField, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "../../components/Header";
import { AppContext } from "../../context/AppDataContext";

const LinkBehavior = React.forwardRef((props, ref) => {
  const { href, ...other } = props;
  return (
    <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
  );
});

const theme = createTheme({
  components: {
    MuiTextField: { defaultProps: { position: "relative" } },
    MuiFormHelperText: {
      styleOverrides: { root: { position: "absolute", bottom: "-1.5rem" } },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Check credentials in JSON for match
  // Show error & send for Registration, if not matched
  const onSubmit = (setIsUserAuth, setUserName, userCreddentials) => {
    setIsUserAuth(true);
    setUserName(userCreddentials["e-mail"]);
    console.log(setIsUserAuth, userCreddentials["e-mail"]);
  };

  return (
    <div>
      <Header></Header>
      <Box sx={{ textAlign: "center" }}>
        <AppContext.Consumer>
          {({ isUserAuth, setIsUserAuth, userName, setUserName }) => {
            return isUserAuth ? (
              <h2>
                Ви вже увійшли до облікового запису
                <span
                  style={{
                    textDecorationLine: "underline",
                    marginLeft: "1rem",
                  }}
                >
                  {userName}
                </span>
              </h2>
            ) : (
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "3rem",
                    m: "3rem 0",
                  }}
                >
                  Увійдіть до свого облікового запису
                </Typography>
                <Container
                  maxWidth="xs"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  component="form"
                  onSubmit={handleSubmit((userCreddentials) =>
                    onSubmit(setIsUserAuth, setUserName, userCreddentials)
                  )}
                >
                  <TextField
                    sx={{ width: "100%", m: "0  0 2rem 0" }}
                    id="outlined-basic"
                    label="e-mail"
                    variant="outlined"
                    type="email"
                    error={errors["e-mail"] ? true : false}
                    helperText={errors["e-mail"] && "Введіть E-mail адресу"}
                    {...register("e-mail", { required: true })}
                  />
                  <TextField
                    sx={{ width: "100%", m: "0  0 2rem 0" }}
                    id="outlined-basic"
                    label="пароль"
                    variant="outlined"
                    error={errors.password ? true : false}
                    helperText={
                      (errors.password?.type === "required" &&
                        "Введіть пароль") ||
                      (errors.password?.type === "maxLength" &&
                        "Пароль має містити не більше 24 символів")
                    }
                    {...register("password", { required: true, maxLength: 24 })}
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ m: "0  0 2rem 0", maxWidth: "10rem" }}
                  >
                    Увійти
                  </Button>
                </Container>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2rem",
                    m: "0  0 2rem 0",
                  }}
                >
                  Ще не маєте облікового запису?
                </Typography>
                <Button href="/auth/register" variant="contained">
                  Зареєструватися
                </Button>
              </ThemeProvider>
            );
          }}
        </AppContext.Consumer>
      </Box>
    </div>
  );
};

export default Login;

// Apply YUP for improved e-mail validation? -> no for now
// Put credentials to local storage & compare to content on submit?
// Do vertical margins with Stack spacing?
// Add own state to form fields?

// Alternative way to exclude Consuner -> local state
// import { AppContext } from "../context/AppDataContext";
// const {categories} = useContext(AppContext);
// <input type="submit" onSubmit={() => setIsUserAuth(!isUserAuth)}/>