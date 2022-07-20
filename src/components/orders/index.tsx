import {
  Box,
  Circle,
  HStack,
  Text,
  useTheme,
  VStack,
  Pressable,
  IPressableProps,
} from "native-base";

import {
  ClockAfternoon,
  CircleWavyCheck,
  Hourglass,
} from "phosphor-react-native";

export interface OrderProps {
  id: string;
  client: string;
  time: string;
  status: "working" | "finished";
}

interface props extends IPressableProps {
  data: OrderProps;
}

const Orders = ({ data, ...rest }: props) => {
  const { colors } = useTheme();

  const colorType =
    data.status === "working" ? colors.secondary[700] : colors.green[300];

  return (
    <Pressable {...rest}>
      <HStack
        mb={4}
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bg={colorType} />
        <VStack flex={1} m={5} space={1}>
          <Text color="white" fontSize="md">
            Cliente : {data.client}
          </Text>
          <HStack alignItems="center" space={1}>
            <ClockAfternoon size={16} color={colors.gray[300]} />
            <Text color="gray.200" fontSize="xs">
              {data.time}
            </Text>
          </HStack>
        </VStack>

        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {data.status === "working" ? (
            <Hourglass size={24} color={colorType} />
          ) : (
            <CircleWavyCheck size={24} color={colorType} />
          )}
        </Circle>
      </HStack>
    </Pressable>
  );
};

export default Orders;
