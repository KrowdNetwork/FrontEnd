import { Flex, Image } from "@chakra-ui/react";

const SomeImage = () => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <Image src="/logo.png" />
    </Flex>
  );
};

export default SomeImage;
