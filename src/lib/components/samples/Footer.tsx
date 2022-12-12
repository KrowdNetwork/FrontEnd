import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const Footer = ({ children }: FlexProps) => {
  return (
    <Flex
      w="100%"
      justify="center"
      align="center"
      bg="#27272A"
      flexDir="column"
      minH="97px"
      p="20px"
      position="fixed"
      bottom={0}
      gap={4}
    >
      {children}
    </Flex>
  );
};

export default Footer;
