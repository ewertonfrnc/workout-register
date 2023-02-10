import { FC, useState } from "react";

import {
  Box,
  Text,
  Image,
  Heading,
  Center,
  Button,
  HStack,
  VStack,
  FormControl,
  Input,
  Link,
} from "native-base";

import { signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils";

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../../infrastructure/navigation/authentication.navigator";

export type LoginScreenProps = BottomTabScreenProps<RootStackParamList>;

const Login: FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
  };

  const handleNavigation = () => navigation.navigate("Register");

  const handleLogin = async () => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center w="100%" h="100%" bg="muted.900">
      <Image
        source={require("../../../../assets/logo.png")}
        size="xl"
        alt="Logo da Garagem Ray Fitness"
      />

      <Box safeArea w="90%" maxW="290">
        <Heading size="lg" fontWeight="600" color="light.50">
          Vamos começar
        </Heading>
        <Heading mt="1" color="coolGray.400" fontWeight="medium" size="xs">
          Entre para continuar
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              type="text"
              value={email}
              w="100%"
              color="muted.100"
              autoComplete="email"
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(text) => setEmail(text)}
            />
          </FormControl>

          <FormControl>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
              type="password"
              w="100%"
              color="muted.100"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </FormControl>

          <Button onPress={handleLogin} mt="2" colorScheme="indigo">
            Entrar
          </Button>

          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.400">
              Ainda sem conta?.{" "}
            </Text>

            <Link
              onPress={handleNavigation}
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
            >
              Criar conta
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Login;
