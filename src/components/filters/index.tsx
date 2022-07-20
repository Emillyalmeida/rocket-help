import { Button, IButtonProps, Text, useTheme } from "native-base";

interface IFilter extends IButtonProps {
  title: string;
  isAtivate?: boolean;
  type: "working" | "finished";
}

const Filter = ({ title, isAtivate = false, type, ...rest }: IFilter) => {
  const { colors } = useTheme();

  const colorType =
    type === "working" ? colors.secondary[700] : colors.green[300];

  return (
    <Button
      variant="outline"
      borderWidth={isAtivate ? 1 : 0}
      borderColor={colorType}
      bgColor="gray.600"
      h={10}
      flex={1}
      {...rest}
    >
      <Text
        color={isAtivate ? colorType : "gray.300"}
        textTransform="uppercase"
        fontSize="xs"
      >
        {title}
      </Text>
    </Button>
  );
};

export default Filter;
