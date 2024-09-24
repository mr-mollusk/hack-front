/// <reference types="vite-plugin-svgr/client" />
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import Eye from "./assets/eye.svg?react";
import EyeOff from "./assets/eyeOff.svg?react";
import { PasswordInputProps } from "../auth.types";
import "./passwordinput.scss";

export const PasswordInput = ({
  id,
  label,
  isPasswordShow,
  handlePasswordVisibility,
  register,
  errors,
  showButton = true,
  validate,
  required,
  minLength,
}: PasswordInputProps) => (
  <FormControl isInvalid={!!errors[id]} className="form-box">
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <InputGroup>
      <Input
        id={id}
        type={isPasswordShow ? "text" : "password"}
        placeholder={label}
        {...register(id, {
          required: required ? required : false,
          validate,
          minLength,
        })}
      />
      <InputRightElement width="4.5rem">
        {showButton && (
          <Button onClick={handlePasswordVisibility} className="eye-button">
            {isPasswordShow ? <EyeOff /> : <Eye />}
          </Button>
        )}
      </InputRightElement>
    </InputGroup>
    <FormErrorMessage>
      {errors[id] && typeof errors[id].message === "string"
        ? errors[id].message
        : null}
    </FormErrorMessage>
  </FormControl>
);
