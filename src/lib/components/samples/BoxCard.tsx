import { Flex, Img, Text } from "@chakra-ui/react";

import ButtonStyle from "./ButtonStyle";

const BoxCard = () => {
  return (
    <Flex
      flexDir="column"
      bg="black"
      mb="160px"
      height="436px"
      borderRadius="12px"
      mt="20px"
    >
      <Img src="/Box.jpg" />
      <Flex p="12px" w="100%" mt="20px" mb="20px" flexDir="column">
        <Text
          fontSize="16px"
          fontWeight={700}
          lineHeight="24px"
          textAlign="center"
          mb="8px"
        >
          Adquira o Box Fantasma e desbloqueie ainda mais missões
        </Text>
        <ButtonStyle>Comprar Box</ButtonStyle>
      </Flex>
    </Flex>
  );
};

export default BoxCard;
