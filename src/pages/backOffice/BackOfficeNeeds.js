import React from "react";

import {
    Button,
    TextField,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const BackOfficeNeeds = () => {

    return (
        <Card sx={{width: '80%', margin: '0 auto'}} elevation={0}>
            <CardContent sx={{
                display: "flex",
                flexFlow: "column nowrap"
            }}>
                <TextField
                    autoFocus
                    type="text"
                    id="outlined-basic"
                    label="1. Категорія діяльності"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="2. Рідкатегорія діяльності"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="3. Виробничі процеси. Унікальні технології та рецептура"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="4. Виробничі процеси. Габаритні машини та автомати"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="5. Виробничі процеси. Виробництво за ліцензією"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="6. Логістичні потужності"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="7. Сертифікація відповідності"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="8. Складські потужності"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="9. Принципи роботи із людським капіталом"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <TextField
                    type="email"
                    id="outlined-basic"
                    label="10. Сервісна стратегія"
                    variant="outlined"
                    sx={{width: "100%", m: "0  0 1rem 0"}}
                />
                <Button variant="outlined" sx={{minWidth: "200px"}}>
                    Надіслати запит
                </Button>
            </CardContent>
        </Card>
    );
};

export default BackOfficeNeeds;
