import { UseFormRegister, FieldErrors } from "react-hook-form";

// Тип данных формы
export type RegisterFormData = {
  name: string;
  password: string;
  newPassword: string;
};

export type ValidateFunction = (value: string) => boolean | string | undefined;

// Интерфейс для PasswordInputProps
export interface PasswordInputProps {
  id: keyof RegisterFormData;
  label: string;
  isPasswordShow: boolean;
  handlePasswordVisibility: () => void;
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
  showButton?: boolean;
  required?: string;
  validate?: ValidateFunction;
  minLength?: { value: number; message: string };
}

// Интерфейс для RegisterFormProps
export interface RegisterFormProps {
  onSubmit: (values: RegisterFormData) => void;
  isPasswordShow: boolean;
  handlePasswordVisibility: () => void;
}

// Интерфейс для TextInputProps
export interface TextInputProps {
  id: keyof RegisterFormData;
  label: string;
  placeholder?: string;
  register: UseFormRegister<RegisterFormData>;
  errors: FieldErrors<RegisterFormData>;
  required?: string;
  minLength?: number;
}
