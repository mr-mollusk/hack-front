/// <reference types="vite-plugin-svgr/client" />
import {
   Button,
   FormControl,
   FormErrorMessage,
   FormLabel,
   Input,
   InputGroup,
   InputRightElement,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { PasswordInputProps } from "../auth.types";
import Eye from "./assets/eye.svg?react";
import EyeOff from "./assets/eyeOff.svg?react";
import s from "./passwordinput.module.scss";

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
   (
      { label, id, showButton, isPasswordShow, handlePasswordVisibility },
      ref,
   ) => {
      const {
         register,
         formState: { errors },
      } = useFormContext();

      return (
         <FormControl isInvalid={!!errors[id]} className={s.box}>
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <InputGroup>
               <Input
                  id={id}
                  type={isPasswordShow ? "text" : "password"}
                  placeholder={label}
                  {...register(id, {
                     required: {
                        value: true,
                        message: `Это обязательное поле`,
                     },
                     minLength: {
                        value: 8,
                        message: `Минимальная длина - ${8} символов`,
                     },
                  })}
                  ref={ref}
               />
               <InputRightElement width="4.5rem">
                  {showButton && (
                     <Button
                        onClick={handlePasswordVisibility}
                        className={s.eyeButton}
                     >
                        {isPasswordShow ? <EyeOff /> : <Eye />}
                     </Button>
                  )}
               </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
               {typeof errors[id]?.message === "string"
                  ? errors[id].message
                  : null}
            </FormErrorMessage>
         </FormControl>
      );
   },
);
