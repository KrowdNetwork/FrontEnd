import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { IconArrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";

import ButtonStyle from "lib/components/samples/ButtonStyle";
import ContainerStyle from "lib/components/samples/Container";
import Footer from "lib/components/samples/Footer";

const Offers = () => {
  const { push } = useRouter();

  return (
    <ContainerStyle>
      <Flex
        flexDir="column"
        gap={12}
        p="12px"
        bgImage="/background.png"
        h="83vh"
      >
        <Box onClick={() => push("/authorized-social-media")}>
          <IconArrowLeft />
        </Box>

        <Box>
          <Text
            fontSize="20px"
            fontWeight={700}
            lineHeight="24px"
            mb={2}
            textAlign="center"
          >
            Adquira um box e use os cards para aumentar seus ganhos e resgatar
            itens nas lojas
          </Text>
        </Box>
        <Img src="/lol.png" />
      </Flex>
      <Footer>
        <ButtonStyle width="full">Comprar Pack</ButtonStyle>
        <Button
          width="full"
          borderRadius="8px"
          border=" 1px solid #71717A"
          bg="transparent"
          onClick={() => push("/")}
        >
          Pular
        </Button>
      </Footer>
    </ContainerStyle>
  );
};

export default Offers;
