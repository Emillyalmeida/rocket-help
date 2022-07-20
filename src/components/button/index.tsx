import { Button as NBButton, Heading, IButtonProps } from "native-base";

interface BProps extends IButtonProps {
  title: string;
}

const Button = ({ title, ...rest }: BProps) => {
  return (
    <NBButton
      bg="green.700"
      rounded="sm"
      h={14}
      fontSize="sm"
      _pressed={{ bg: "gray.500" }}
      {...rest}
    >
      <Heading color="gray.100" fontSize="sm">
        {title}
      </Heading>
    </NBButton>
  );
};

export default Button;
