import { Flex, Img, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import ButtonStyle from "./ButtonStyle";

const BoxCard = () => {
  const { push } = useRouter();
  return (
    <Flex flexDir="column" bg="black" mb="100px" borderRadius="12px" mt="20px">
      <Img src="/box-gelo.jpg" />
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
        <ButtonStyle onClick={() => push("/box")}>Comprar Box</ButtonStyle>
      </Flex>
    </Flex>
  );
};

export default BoxCard;
