import {
  HStack,
  IconButton,
  VStack,
  useTheme,
  Heading,
  Text,
  FlatList,
  Center,
} from "native-base";

import { SignOut, ChatTeardropText } from "phosphor-react-native";

import Logo from "../../assets/logo_secondary.svg";
import Filter from "../../components/filters";

import { useState } from "react";
import Orders, { OrderProps } from "../../components/orders";
import Button from "../../components/button";

const Home = () => {
  const { colors } = useTheme();

  const [selectState, setSelectState] = useState<"working" | "finished">(
    "working"
  );

  const [orders, setOrders] = useState<OrderProps[]>([
    // {
    //   id: "12345",
    //   client: "Emilly",
    //   time: "11/12/2022 as 12:00",
    //   status: "working",
    // },
  ]);

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

        <HStack space={3} py={3}>
          <Filter
            title="Em andamento"
            isAtivate={selectState === "working" ? true : false}
            type="working"
            onPress={() => setSelectState("working")}
          />
          <Filter
            title="Finalizado"
            isAtivate={selectState === "finished" ? true : false}
            type="finished"
            onPress={() => setSelectState("finished")}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => <Orders data={item} />}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText size={45} color={colors.gray[300]} />
              <Text color="gray.300" textAlign="center" fontSize="xl" p={4}>
                Você ainda não possui solicitações{" "}
                {selectState === "working" ? "em aberto" : "finalizadas"}
              </Text>
            </Center>
          )}
        />
        <Button title="Nova Solicitação" />
      </VStack>
    </VStack>
  );
};

export default Home;
