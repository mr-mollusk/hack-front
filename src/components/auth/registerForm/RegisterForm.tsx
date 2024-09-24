import { Box, Image, Button, Text } from "@chakra-ui/react";
import { useFormContext, SubmitHandler } from "react-hook-form";
import { PasswordInput } from "../passwordInput";
import { AgreementText } from "../agreementText";
import { TextInput } from "../textInput";
import { RegisterFormData, RegisterFormProps } from "../auth.types";
import "./registerform.scss";

export const RegisterForm = ({
  onSubmit,
  isPasswordShow,
  handlePasswordVisibility,
}: RegisterFormProps) => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useFormContext<RegisterFormData>();

  const submitHandler: SubmitHandler<RegisterFormData> = (values) => {
    onSubmit(values);
  };

  return (
    <form className="rb_form" onSubmit={handleSubmit(submitHandler)}>
      <Box className="rb_flexbox">
        <Image src="./pictures/cook.png" alt="cook" className="rb_image" />
        <Text fontSize="1.2rem" maxW="20rem" as="b">
          Добро пожаловать!
        </Text>
        <Text fontSize=".9rem" maxW="20rem" as="i">
          Пожалуйста, введите свои данные
        </Text>
        <TextInput
          id="name"
          label="Логин"
          placeholder="Login"
          register={register}
          errors={errors}
          required="Это обязательное поле"
          minLength={4}
        />
        <PasswordInput
          id="password"
          label="Пароль"
          isPasswordShow={isPasswordShow}
          handlePasswordVisibility={handlePasswordVisibility}
          register={register}
          required="Это обязательное поле"
          errors={errors}
          minLength={{ value: 8, message: "Минимальная длина - 8 символов" }}
        />
        <PasswordInput
          id="newPassword"
          label="Повторите пароль"
          isPasswordShow={isPasswordShow}
          handlePasswordVisibility={handlePasswordVisibility}
          register={register}
          errors={errors}
          required="Это обязательное поле"
          showButton={false}
          validate={(value) =>
            value === getValues("password") || "Пароли не совпадают"
          }
        />
        <AgreementText />
        <Button
          className="bottom-button"
          isLoading={isSubmitting}
          type="submit"
        >
          Зарегистрироваться
        </Button>
      </Box>
    </form>
  );
};
