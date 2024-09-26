import {
   FormControl,
   FormErrorMessage,
   FormLabel,
   Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import s from "./textinput.module.scss";

export const TextInput = () => {
   const {
      register,
      formState: { errors },
   } = useFormContext();

   return (
      <FormControl isInvalid={!!errors["name"]} className={s.box}>
         <FormLabel htmlFor="loginName">Логин</FormLabel>
         <Input
            id="loginName"
            placeholder="Логин"
            {...register("name", {
               required: {
                  value: true,
                  message: `Это обязательное поле`,
               },
               minLength: {
                  value: 4,
                  message: `Минимальная длина - ${4} символов`,
               },
            })}
         />
         <FormErrorMessage>
            {typeof errors["name"]?.message === "string"
               ? errors["name"]?.message
               : null}
         </FormErrorMessage>
      </FormControl>
   );
};
