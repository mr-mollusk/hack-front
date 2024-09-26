import { Box } from "@chakra-ui/react";
import { FormProvider, useForm } from "react-hook-form";
import { PasswordFields } from "../passwordFields/PasswordFields";
import { SubmitButton } from "../submitButton";
import { TextInput } from "../textInput";
import s from "./registrationform.module.scss";

export const RegistrationForm = () => {
   const methods = useForm();

   const submitHandler = (data: object) => {
      console.log(data);
   };

   return (
      <FormProvider {...methods}>
         <form
            className={s.form}
            onSubmit={methods.handleSubmit(submitHandler)}
         >
            <Box className={s.flexbox}>
               <TextInput />
               <PasswordFields />
               <SubmitButton />
            </Box>
         </form>
      </FormProvider>
   );
};
