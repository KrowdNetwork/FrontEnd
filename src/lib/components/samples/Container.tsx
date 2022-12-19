import type { BoxProps } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";

import Menu from "./Menu";

const ContainerStyle = ({ children }: BoxProps) => {
  return (
    <Box>
      <Flex minH="100%" flexDirection="column" w="100%" p={0}>
        {children}
      </Flex>
      <Menu />
    </Box>
  );
};

export default ContainerStyle;
