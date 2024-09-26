import { Center, Spinner } from "@chakra-ui/react";

export const Loader = () => (
   <Center w="100%" h="100%">
      <Spinner size="xl" color="cyan.500" thickness="0.2rem" />
   </Center>
);
