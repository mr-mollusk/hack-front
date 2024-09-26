import { RegistrationBox } from "./registrationBox";

import { Box } from "@chakra-ui/react";
import s from "./registrationpage.module.scss";

export const RegistrationPage = () => {
   return (
      <Box className={s.page}>
         <Box className={s.window}>
            <RegistrationBox />
         </Box>
      </Box>
   );
};
