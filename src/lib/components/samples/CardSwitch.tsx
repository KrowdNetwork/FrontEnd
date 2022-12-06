import type { FlexProps } from "@chakra-ui/react";
import { Switch, Flex } from "@chakra-ui/react";

const CardSwitch = ({ children }: FlexProps) => {
  return (
    <Flex
      w="full"
      justify="space-between"
      align="center"
      borderRadius="8px"
      border="1px solid #3F3F46"
      h="60px"
      p="20px"
    >
      {children}
      <Switch colorScheme="yellow" />
    </Flex>
  );
};

export default CardSwitch;
