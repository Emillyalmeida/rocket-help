import { Heading, HStack, Spinner } from "native-base";

const Loading = () => {
  return (
    <HStack flex={1} space={2} justifyContent="center" bg="gray.700">
      <Spinner accessibilityLabel="Loading posts" color="green.500" />
      {/* <Heading color="primary.700" fontSize="md">
        Loading
      </Heading> */}
    </HStack>
  );
};

export default Loading;
