import React from "react";
import {useForm} from "react-hook-form";

import {
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

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
    const [businessType, setBusinessType] = React.useState("small");

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handleChange = (event) => {
        setBusinessType(event.target.value);
    };

    const onSubmit = (input) => alert(`Додано дані ${JSON.stringify(input)}`);

    return (
        <Card sx={{width: '50%', margin: '0 auto'}}>
            <CardContent sx={{
                display: "flex",
                flexFlow: "column nowrap"
            }}>
                <TextField
                    autoFocus
                    type="text"
                    id="outlined-basic"
                    label="Ім'я"
                    variant="outlined"
                    error={errors.name ? true : false}
                    {...register("name", {required: true})}
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="e-mail"
                    variant="outlined"
                    error={errors["e-mail"] ? true : false}
                    {...register("e-mail", {required: true})}
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="text"
                    id="outlined-multiline-static"
                    label="Запит"
                    multiline
                    rows={4}
                    placeholder="Додайте ваш запит"
                    {...register("request")}
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                color: errors.conditionsAcceptance ? "red" : "#1976d2",
                                "&.Mui-checked": {
                                    color: "rgba(0, 0, 0, 0.7)",
                                },
                            }}
                        />
                    }
                    label={<span style={{color: "inherit"}}>Я приймаю{" "}<a href="#" style={{color: "inherit"}}>умови надання послуг</a></span>}
                    {...register("conditionsAcceptance", {required: true})}
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Выбрати тип бізнесу"
                    value={businessType}
                    onChange={handleChange}
                    // error={errors.businessType ? true : false}
                    //{...register("businessType", {required: true})}
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                >
                    {businessTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button type="submit" variant="outlined" sx={{minWidth: "200px"}}>
                    Далі
                </Button>
            </CardContent>
        </Card>
    );
};

export default BackOfficeNeeds;
