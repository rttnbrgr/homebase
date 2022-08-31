import { Text, TextProps, useColorModeValue } from "@chakra-ui/react";

const styles: TextProps = {
  display: "inline-block",
  px: 2
};

const BoxText = ({ children, ...textProps }: TextProps) => {
  const bg = useColorModeValue("onBg", "bg");
  const color = useColorModeValue("bg", "onBg");
  const colorModeStyles = {
    bg,
    color
  };

  return (
    <Text {...styles} {...colorModeStyles} {...textProps}>
      {children}
    </Text>
  );
};

export { BoxText };
