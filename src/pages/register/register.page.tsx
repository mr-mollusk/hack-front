import { Box } from "@chakra-ui/react";
import { RegisterBox } from "./registerBox";
import "./registerpage.scss";
export const RegisterPage = () => {
  return (
    <Box className="register-page">
      <Box className="register-window">
        <RegisterBox />
      </Box>
    </Box>
  );
};
