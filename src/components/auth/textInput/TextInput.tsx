import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { TextInputProps } from "../auth.types";

export const TextInput: React.FC<TextInputProps> = ({
  id,
  label,
  placeholder,
  register,
  errors,
  required,
  minLength,
}) => (
  <FormControl isInvalid={!!errors[id]} className="form-box">
    <FormLabel htmlFor={id}>{label}</FormLabel>
    <Input
      id={id}
      placeholder={placeholder}
      {...register(id, {
        required: required ? required : false,
        minLength: minLength
          ? {
              value: minLength,
              message: `Минимальная длина - ${minLength} символов`,
            }
          : undefined,
      })}
    />
    <FormErrorMessage>{errors[id]?.message}</FormErrorMessage>
  </FormControl>
);
