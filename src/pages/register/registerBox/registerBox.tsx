import React from 'react'
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Image,
  Text,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { EyeIcon, EyeIconOff } from '../../../components/index'
import { FormData } from './registerBox.types'

export const  RegisterBox = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<FormData>()
    async function onSubmit(values : FormData) {
        return new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2))
            resolve()
        }, 3000)
        })
    }

  return (
    <Box display="flex" flexDirection="row" justifyContent="space-between" w="100%" h="100%" >
      <Box 
         minW="49%"
         borderRadius=".5rem"
         bg="#ffffff"
         pos="relative"
         display={{ base: 'none', md: 'flex' }}
      >
        <Image src='./pictures/intro.jpg' alt='intro' h="100%" w="100%" borderRadius=".5rem" objectFit="fill"></Image>
        <Text pos="absolute" top="83%" left="5%" color="white" w="90%" fontSize="1rem"> 
        Управление начинается здесь
        </Text>
        <Text pos="absolute" top="88%" left="5%" color="grey" w="80%" fontSize=".9rem"> 
        Всего несколько шагов до удобного  и эффективного управления проектами
        </Text>
      </Box>
      
      <Box
        w={{ base: '100%', md: '49%' }}
        borderRadius=".5rem"
        border=".5rem solid #ffffff"
        bg="#ffffff"
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{height:'100%'}}>
        <Box display="flex" flexDir="column" alignItems="center" justifyContent="flex-end" h="100%" gap=".5rem">
            <Image src='./pictures/LETHIMCOOK.png' height='15%' alt='cook'></Image>
            <Text fontSize="1.2rem" maxW="20rem"  as='b'>Добро пожаловать!</Text>
            <Text fontSize=".9rem" maxW="20rem"  as='i'>Пожалуйста, введите свои данные</Text>
            <FormControl isInvalid={!!errors.name} maxW="20rem">
                <FormLabel htmlFor='name'>
                   <Text>Логин</Text>
                </FormLabel>
                <Input
                id='name'
                placeholder='Login'
                {...register('name', {
                    required: 'Это обязательное поле',
                    minLength: { value: 4, message: 'Минимальная длина - 4 символа' },
                })}
                />
                <FormErrorMessage>
                    {errors.name && typeof errors.name.message === 'string' ? errors.name.message : null}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.password} maxW="20rem">
                <FormLabel htmlFor='password'>Пароль</FormLabel>
                    <InputGroup>
                    <Input
                    id='password'
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                    {...register('password', {
                        required: 'Это обязательное поле',
                        minLength: { value: 8, message: 'Минимальная длина - 8 символов' },
                    })}
                    ></Input>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? <EyeIconOff/> : <EyeIcon/>}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                <FormErrorMessage>
                {errors.password && typeof errors.password.message  === 'string' ? errors.password.message : null}
                </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.newPassword} maxW="20rem">
                <FormLabel htmlFor='newPassword'>Повторите пароль</FormLabel>
                <Input
                id='newPassword'
                type={show ? 'text' : 'password'}
                placeholder='Repeat password'
                {...register('newPassword', {
                    required: 'Это обязательное поле',
                    validate: (value) => value === getValues('password') || 'Пароли не совпадают',
                })}
                />
                <FormErrorMessage>
                {errors.newPassword && typeof errors.newPassword.message  === 'string' ? errors.newPassword.message : null}
                </FormErrorMessage>
            </FormControl>
            <Text defaultChecked maxW="20rem">Регистрируясь, я соглашаюсь с <a href='#' style={{color:"blue"}}>Условиями использования моих личных данных</a> и принимаю <a href='#' style={{color:"blue"}}>Политику конфиденциальности</a>.</Text>
            <Box w="100%" display="flex" justifyContent="center" mb="1rem">
                <Button  colorScheme='gray' isLoading={isSubmitting} type='submit' h='2.5rem' w="20rem">
                    Зарегестрироваться
                </Button> 
            </Box>
            </Box>
        </form>
      </Box>
    </Box>
  )
}