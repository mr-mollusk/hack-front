import { Box, Image, Text } from "@chakra-ui/react";
import { RegistrationForm, RegistrationImageBox } from "../../../components";
import s from "./registrationbox.module.scss";

export const RegistrationBox = () => {
   return (
      <Box className={s.registerContainer}>
         <RegistrationImageBox />
         <Box className={s.registerBox}>
            <Box className={s.flexbox}>
               <Image
                  src="./pictures/cook.png"
                  alt="cook"
                  className={s.image}
               />
               <Text fontSize="1.2rem" maxW="20rem" as="b">
                  Добро пожаловать!
               </Text>
               <Text fontSize=".9rem" maxW="20rem" as="i">
                  Пожалуйста, введите свои данные
               </Text>
               <RegistrationForm />
            </Box>
         </Box>
      </Box>
   );
};
