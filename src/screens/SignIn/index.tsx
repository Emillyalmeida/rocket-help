import { View, Text } from "react-native";

import { VStack, Heading } from "native-base";

import Logo from "../../assets/logo_primary.svg";

const SignIn = () => {
  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={6} pt={24} space={4}>
      <Logo />
      <Heading color="gray.100" fontSize="2xl">
        Olá Emilly
      </Heading>
    </VStack>
  );
};

export default SignIn;
