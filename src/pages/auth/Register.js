import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onSubmit = (setIsUserAuth, setUserName, userCreddentials) => {
    setIsUserAuth(true);
    setUserName(userCreddentials["e-mail"]);
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <Header />
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
                  Зареєструйте свій обліковий запис
                </Typography>
                <Container
                  maxWidth="xs"
                  component="form"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  onSubmit={handleSubmit((userCreddentials) =>
                    onSubmit(setIsUserAuth, setUserName, userCreddentials)
                  )}
                >
                  <TextField
                    type="email"
                    id="outlined-basic"
                    label="e-mail"
                    variant="outlined"
                    sx={{ width: "100%", m: "0  0 2rem 0" }}
                    error={errors["e-mail"] ? true : false}
                    helperText={errors["e-mail"] && "Введіть E-mail адресу"}
                    {...register("e-mail", { required: true })}
                  />
                  <TextField
                    type="password"
                    id="outlined-basic"
                    label="пароль"
                    variant="outlined"
                    sx={{ width: "100%", m: "0  0 2rem 0" }}
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
                    type="submit"
                    variant="contained"
                    sx={{ m: "0  0 2rem 0", maxWidth: "10rem" }}
                  >
                    Зареєструватися
                  </Button>
                </Container>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "2rem",
                    m: "0  0 2rem 0",
                  }}
                >
                  Вже маєте обліковий запис?
                </Typography>
                <Button href="/login" variant="contained">
                  Вхід
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
