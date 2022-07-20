import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Heading,
  Text,
} from "native-base";

import { SignOut } from "phosphor-react-native";

import Logo from "../../assets/logo_secondary.svg";

const Home = () => {
  const { colors } = useTheme();

  return (
    <VStack bg="gray.700" flex={1} pb={5}>
      <HStack
        justifyContent="space-between"
        px={4}
        pt={6}
        pb={5}
        w="full"
        alignItems="center"
        bg="gray.500"
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6} mt={8} space={4}>
        <HStack w="full" justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200" fontSize="md">
            3
          </Text>
        </HStack>

        <HStack></HStack>
      </VStack>
    </VStack>
  );
};

export default Home;
