import React from "react";
import { useForm } from "react-hook-form";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const businessTypes = [
  {
    value: "small",
    label: "Малий бізнес",
  },
  {
    value: "medium",
    label: "Середній бізнес",
  },
  {
    value: "big",
    label: "Великий бізнес",
  },
];

const BackOfficeNeeds = () => {
  const [businessType, setBusinessType] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (event) => {
    setBusinessType(event.target.value);
  };

  const onSubmit = (input) => alert(`Додано дані ${JSON.stringify(input)}`);

  return (
    <ThemeProvider theme={theme}>
      <Container
        //   action="#"
        //   method="POST"
        //   source="custom"
        //   name="form"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          backgroundColor: "#1976d2",
          height: "100%",
          padding: "2rem",
        }}
      >
        <TextField
          autoFocus
          type="text"
          id="outlined-basic"
          label="Ім'я"
          variant="outlined"
          //   error and helperText?
          error={errors.name ? true : false}
          {...register("name", { required: true })}
          sx={{ width: "30%", m: "0  0 1rem 0" }}
        />
        <TextField
          type="email"
          id="outlined-basic"
          label="e-mail"
          variant="outlined"
          error={errors["e-mail"] ? true : false}
          {...register("e-mail", { required: true })}
          sx={{ width: "30%", m: "0  0 1rem 0" }}
        />
        <TextField
          type="text"
          id="outlined-multiline-static"
          label="Запит"
          multiline
          rows={4}
          placeholder="Додайте ваш запит"
          {...register("request")}
          sx={{ width: "50%", m: "0  0 1rem 0" }}
        />
        <FormControlLabel
          control={
            <Checkbox
              sx={{
                color: errors.conditionsAcceptance ? "red" : "#fff",
                "&.Mui-checked": {
                  color: "rgba(0, 0, 0, 0.7)",
                },
              }}
            />
          }
          label={
            <span style={{ color: "inherit" }}>
              Я приймаю{" "}
              <a href="#" style={{ color: "inherit" }}>
                умови надання послуг
              </a>
            </span>
          }
          {...register("conditionsAcceptance", { required: true })}
          sx={{ width: "30%", m: "0  0 1rem 0" }}
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Выбрати тип бізнесу"
          value={businessType}
          onChange={handleChange}
          error={errors.businessType ? true : false}
          {...register("businessType", { required: true })}
          sx={{ width: "30%", m: "0  0 1rem 0" }}
        >
          {businessTypes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="outlined" sx={{ width: "15%" }}>
          Далі
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default BackOfficeNeeds;
