import { Box, Image, Text } from "@chakra-ui/react";
import s from "./registrationimagebox.module.scss";

export const RegistrationImageBox = () => (
   <Box className={s.imageBox}>
      <Image className={s.image} src="./pictures/intro.jpg" alt="intro"></Image>
      <Text className={s.header}>Управление начинается здесь</Text>
      <Text className={s.subheader}>
         Всего несколько шагов до удобного и эффективного управления проектами
      </Text>
   </Box>
);
