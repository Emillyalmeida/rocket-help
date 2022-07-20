import { Heading, HStack, Spinner } from "native-base";

const Loading = () => {
  return (
    <HStack space={2} justifyContent="center">
      <Spinner accessibilityLabel="Loading posts" />
      {/* <Heading color="primary.700" fontSize="md">
        Loading
      </Heading> */}
    </HStack>
  );
};

export default Loading;
