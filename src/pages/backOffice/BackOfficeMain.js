import React from "react";

import Box from "@mui/material/Box";

import BackOfficeMainOption from "../../components/BackOfficeMainOption";

const BackOffice = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={2}
      sx={{ width: "100%", padding: "2rem", backgroundColor: "#1976d2" }}
    >
      <BackOfficeMainOption>
        Відео інструкції та алгоритми роботи платформи
      </BackOfficeMainOption>
      <BackOfficeMainOption>Бренд "Вільні та гідні"</BackOfficeMainOption>
      <BackOfficeMainOption>
        Освітні програми та рівні сертифікації
      </BackOfficeMainOption>
      <BackOfficeMainOption>
        Мої останні замовлення та продажі
      </BackOfficeMainOption>
      <BackOfficeMainOption>
        Сервісні повідомлення та зворотній зв'язок
      </BackOfficeMainOption>
      <BackOfficeMainOption>
        Комісії та тарифні плани на всі послуги платформи
      </BackOfficeMainOption>
    </Box>
  );
};

export default BackOffice;
