import { VStack, Heading, useTheme, Icon } from "native-base";

import Logo from "../../assets/logo_primary.svg";
import Input from "../../components/input";

import { Envelope, Key } from "phosphor-react-native";

const SignIn = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={6} pt={24} space={5}>
      <Logo />
      <Heading color="gray.100" fontSize="2xl">
        Acesse a conta
      </Heading>
      <VStack flex={1} space={3}>
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
    </VStack>
  );
};

export default SignIn;
