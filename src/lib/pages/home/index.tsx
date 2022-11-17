import { Flex } from "@chakra-ui/react";

import SomeImage from "lib/components/samples/SomeImage";

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SomeImage />
    </Flex>
  );
};

export default Home;
