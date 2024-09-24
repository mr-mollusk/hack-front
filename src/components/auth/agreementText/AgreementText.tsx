import { Text } from "@chakra-ui/react";
import "./agreementtext.scss";

export const AgreementText = () => (
  <Text className="agree-text">
    Регистрируясь, я соглашаюсь с <a href="#">Условиями использования</a> и
    принимаю <a href="#">Политику конфиденциальности</a>.
  </Text>
);
