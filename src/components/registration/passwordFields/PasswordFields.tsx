import { FormErrorMessage } from "@chakra-ui/react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { PasswordInput } from "../passwordInput";

export const PasswordFields = () => {
   const [isPasswordShow, setShowPassword] = useState(false);
   const handlePasswordVisibility = () => setShowPassword(!isPasswordShow);
   const {
      register,
      getValues,
      formState: { errors },
   } = useFormContext();

   return (
      <>
         <PasswordInput
            label={"Пароль"}
            id={"password"}
            showButton={true}
            isPasswordShow={isPasswordShow}
            handlePasswordVisibility={handlePasswordVisibility}
            {...register("password", {
               required: "Это обязательное поле",
            })}
         />
         <PasswordInput
            label={"Повторите пароль"}
            id={"repeatPassword"}
            showButton={false}
            isPasswordShow={isPasswordShow}
            {...register("repeatPassword", {
               required: "Это обязательное поле",
               validate: (value) =>
                  value === getValues("password") || "Пароли не совпадают",
            })}
         />
         <FormErrorMessage>
            {typeof errors["repeatPassword"]?.message === "string"
               ? errors["repeatPassword"].message
               : null}
         </FormErrorMessage>
      </>
   );
};
