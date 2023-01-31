import { FC, useState } from 'react'

import { AuthError, AuthErrorCodes } from 'firebase/auth'
import { createAuthUserWithEmailAndPassword } from '../../../utils/firebase/firebase.utils'

import {
  Box,
  Image,
  Heading,
  Center,
  Button,
  VStack,
  FormControl,
  Input,
} from 'native-base'

import { RootStackParamList } from '../../../infrastructure/navigation/authentication.navigator'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'

export type RegisterScreenProps = BottomTabScreenProps<RootStackParamList>

const Register: FC<RegisterScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState({ isError: false, errorMessage: '' })

  const handleRegistration = async () => {
    if (password !== confirmPassword)
      return setError({
        isError: true,
        errorMessage: 'As senhas não são iguais.',
      })

    if (password.length < 6)
      return setError({
        isError: true,
        errorMessage: 'A senha deve conter pelo menos 6 caracteres.',
      })

    try {
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      )
      console.log(userCredential)
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setError({
          isError: true,
          errorMessage: 'Este email já está sendo usado.',
        })
      } else {
        console.error('Erro ao criar usuário', error)
      }
    }
  }

  return (
    <Center w='100%' h='100%' bg='muted.900'>
      <Image
        source={require('../../../../assets/logo.png')}
        size='xl'
        alt='Logo da Garagem Ray Fitness'
      />

      <Box safeArea w='90%' maxW='290'>
        <Heading size='lg' fontWeight='600' color='light.50'>
          Vamos começar
        </Heading>
        <Heading mt='1' color='coolGray.400' fontWeight='medium' size='xs'>
          Entre para continuar
        </Heading>

        <VStack space={3} mt='5'>
          <FormControl isRequired isInvalid={error.isError}>
            <FormControl.Label
              _text={{
                bold: true,
              }}
            >
              E-mail
            </FormControl.Label>

            <Input
              w='100%'
              type='text'
              color='muted.100'
              keyboardType='email-address'
              textContentType='emailAddress'
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </FormControl>

          <FormControl isRequired isInvalid={error.isError}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              w='100%'
              type='password'
              color='muted.100'
              value={password}
              textContentType='password'
              secureTextEntry
              autoCapitalize='none'
              onChangeText={(p) => setPassword(p)}
            />

            {error.isError ? (
              <FormControl.ErrorMessage>
                {error.errorMessage}
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                A senha deve conter pelo menos 6 caracteres.
              </FormControl.HelperText>
            )}
          </FormControl>

          <FormControl isRequired isInvalid={error.isError}>
            <FormControl.Label>Confirmar Senha</FormControl.Label>
            <Input
              w='100%'
              type='password'
              color='muted.100'
              value={confirmPassword}
              textContentType='password'
              secureTextEntry
              autoCapitalize='none'
              onChangeText={(p) => setConfirmPassword(p)}
            />

            {error.isError ? (
              <FormControl.ErrorMessage>
                {error.errorMessage}
              </FormControl.ErrorMessage>
            ) : (
              <FormControl.HelperText>
                A senha deve conter pelo menos 6 caracteres.
              </FormControl.HelperText>
            )}
          </FormControl>

          <Button mt='2' colorScheme='indigo' onPress={handleRegistration}>
            Criar conta
          </Button>
        </VStack>
      </Box>
    </Center>
  )
}

export default Register
