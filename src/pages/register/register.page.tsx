import { Box } from '@chakra-ui/react';
import { RegisterBox } from './registerBox';

export const RegisterPage = () => {

  return (
    <Box  
        //for page testing
        position="relative"
        minW='100%' 
        minH="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage="url('/pictures/background.jpg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
    >
        <Box 
            padding="1rem"
            w={{ base: '100vw', sm: '30rem', md: '50rem', lg: '60rem'  }}
            h='40rem'
            borderRadius={{base:'none', sm: "1rem"}}
            border={{base: 'none', sm:'.6rem solid #ffffff'}}
            bg="#e1e1e1"
        >
            <RegisterBox />
        </Box>
    </Box>
  );
};

