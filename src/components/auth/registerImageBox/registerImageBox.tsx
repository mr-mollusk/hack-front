import { Box, Image, Text } from "@chakra-ui/react";
import "./registerimagebox.scss";

export const RegisterImageBox = () => (
  <Box className="rb_image-box">
    <Image className="ib_image" src="./pictures/intro.jpg" alt="intro"></Image>
    <Text className="ib_header">Управление начинается здесь</Text>
    <Text className="ib_subheader">
      Всего несколько шагов до удобного и эффективного управления проектами
    </Text>
  </Box>
);
