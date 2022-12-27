import { Flex, Box } from "@chakra-ui/react";

import Checkout from "lib/components/samples/Checkout";

const CheckoutPage = () => {
  return (
    <Box>
      <Flex flexDirection="column" w="100%" p={0}>
        <Checkout />
      </Flex>
    </Box>
  );
};

export default CheckoutPage;
