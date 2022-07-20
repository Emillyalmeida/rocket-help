import { Input as NBinput, IInputProps } from "native-base";

const Input = ({ ...rest }: IInputProps) => {
  return (
    <NBinput
      {...rest}
      bg="gray.700"
      h={14}
      size="md"
      w="100%"
      borderWidth={0}
      fontFamily="body"
      color="gray.100"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth: 1,
        borderColor: "green.500",
        bg: "gray.700",
      }}
    />
  );
};

export default Input;
