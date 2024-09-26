import { Button, Text } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import s from "./submitbutton.module.scss";

export const SubmitButton = () => {
   const {
      handleSubmit,
      formState: { isSubmitting },
   } = useFormContext();
   return (
      <>
         <Text className={s.agreeText}>
            Регистрируясь, я соглашаюсь с{" "}
            <a href="#">Условиями использования</a> и принимаю{" "}
            <a href="#">Политику конфиденциальности</a>.
         </Text>
         <Button
            className={s.bottomButton}
            isLoading={isSubmitting}
            onClick={handleSubmit((data) => console.log(data))}
         >
            Зарегистрироваться
         </Button>
      </>
   );
};
