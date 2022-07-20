import { VStack, Heading, useTheme, Icon } from "native-base";

import Logo from "../../assets/logo_primary.svg";
import Input from "../../components/input";
import Button from "../../components/button";

import { Envelope, Key } from "phosphor-react-native";

const SignIn = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={6} pt={24} space={3}>
      <Logo />
      <Heading pt={8} color="gray.100" fontSize="xl">
        Acesse a conta
      </Heading>
      <VStack pt={3} pb={5} space={3}>
        <Input
          placeholder="E-mail"
          InputLeftElement={
            <Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
          }
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          InputLeftElement={
            <Icon as={<Key color={colors.gray[300]} />} ml={4} />
          }
        />
      </VStack>
      <Button title="Entrar" w="full" mt={2} />
    </VStack>
  );
};

export default SignIn;
