import { Box } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import "./registerbox.scss";
import { RegisterImageBox } from "../../../components";
import { RegisterForm } from "../../../components/auth/registerForm";
import React from "react";
import { RegisterFormData } from "../../../components/auth/auth.types";

export const RegisterBox = () => {
  const [isPasswordShow, setShowPassword] = React.useState(false);
  const handlePasswordVisibility = () => setShowPassword(!isPasswordShow);

  const methods = useForm<RegisterFormData>();

  const onSubmit = (values: RegisterFormData) => console.log(values);

  return (
    <Box className="register-container">
      <RegisterImageBox />
      <Box className="register-box">
        <FormProvider {...methods}>
          <RegisterForm
            onSubmit={onSubmit}
            isPasswordShow={isPasswordShow}
            handlePasswordVisibility={handlePasswordVisibility}
          />
        </FormProvider>
      </Box>
    </Box>
  );
};
