import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useAppSelector } from "hooks";
import ButtonStyle from "lib/components/samples/ButtonStyle";
import Card from "lib/components/samples/Card";
import ContainerStyle from "lib/components/samples/Container";
import Header from "lib/layout/Header";

const Rescue = () => {
  //   const dispatch = useAppDispatch();
  const router = useRouter();
  const productCard = useAppSelector((state) => state.product);

  const goToCheckout = () => {
    router.push("/checkout");
  };

  return (
    <ContainerStyle>
      <Header
        title="Resgate"
        points={`${productCard.value}`}
        hasToBack
        goBack={() => router.push("/store")}
      />
      <Box mt={6} p="0px 20px">
        <Flex w="100%" justify="flex-start" flexDir="column" mb="30px" h="90vh">
          <Text
            fontSize="32px"
            textTransform="uppercase"
            fontWeight={400}
            lineHeight="42.56px"
            fontFamily="Bebas Neue"
            mt="12px"
          >
            {productCard.description}
          </Text>
          <Flex w="100%">
            <Card
              widthCard="100%"
              heightImg="220px"
              imgPath={productCard.imgPath}
            />
          </Flex>
          <Text
            fontSize="20px"
            fontWeight={400}
            fontFamily="Bebas Neue"
            lineHeight="42.56px"
            mt="12px"
          >
            Resgate agora seu produto
          </Text>
          <ButtonStyle onClick={goToCheckout}>Resgatar</ButtonStyle>
        </Flex>
      </Box>
    </ContainerStyle>
  );
};

export default Rescue;
