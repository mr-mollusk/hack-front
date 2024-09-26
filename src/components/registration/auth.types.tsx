// Тип данных формы
export type RegisterFormData = {
   name: string;
   password: string;
   repeatpassword: string;
};

// Интерфейс для PasswordInputProps
export interface PasswordInputProps {
   label: string;
   id: string;
   isPasswordShow: boolean;
   handlePasswordVisibility?: () => void;
   showButton?: boolean;
}

// Интерфейс для RegisterFormProps
export interface RegisterFormProps {
   onSubmit: (values: RegisterFormData) => void;
   isPasswordShow: boolean;
   handlePasswordVisibility: () => void;
}
