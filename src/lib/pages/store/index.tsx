import { Box, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

import { useAppDispatch, useAppSelector } from "hooks";
import Card from "lib/components/samples/Card";
import ContainerStyle from "lib/components/samples/Container";
import Header from "lib/layout/Header";
import {
  cardForCarousel,
  cardForExclusiveProducts,
  cardForExperiences,
  cardForInGame,
} from "lib/mocks/card";
import type { IInfosProductProps } from "store/product/productSlice";
import { addProduct } from "store/product/productSlice";
import { arround } from "utils/arround";

const Store = () => {
  const dispatch = useAppDispatch();
  const points = useAppSelector((state) => state.points.totalPoints);
  const router = useRouter();

  const getCardProps = (product: IInfosProductProps) => {
    dispatch(addProduct(product));
    router.push("/rescue");
  };

  const getBoxProps = (product: IInfosProductProps) => {
    dispatch(addProduct(product));
    router.push("/box");
  };

  return (
    <ContainerStyle>
      <Header title="Loja" points={`${arround(points, 3)}`} />
      <Box mb={6} p="0px 20px">
        <Flex gap={8} w="100%" overflowX="auto" mb="30px">
          {cardForCarousel.map((product, index) => {
            return (
              <Card
                key={`${index - product.value}`}
                widthCard="100%"
                heightImg="220px"
                description={product.description}
                imgPath={product.imgPath}
                price={product.value}
                onClickCard={() => getBoxProps(product)}
              />
            );
          })}
        </Flex>
        <Flex w="100%" justify="flex-start" flexDir="column" mb="30px">
          <Text
            fontSize="32px"
            textTransform="uppercase"
            fontWeight={400}
            lineHeight="42.56px"
            fontFamily="Bebas Neue"
            mt="12px"
          >
            Experiências
          </Text>
          <Flex gap={4} w="100%" overflowX="auto">
            {cardForExperiences.map((product, index) => {
              return (
                <Card
                  key={`${index - product.value}`}
                  widthCard="220px"
                  heightImg="160px"
                  description={product.description}
                  imgPath={product.imgPath}
                  points={product.value}
                  onClickCard={() => getCardProps(product)}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex w="100%" justify="flex-start" flexDir="column" mb="30px">
          <Text
            fontSize="32px"
            textTransform="uppercase"
            fontWeight={400}
            lineHeight="42.56px"
            fontFamily="Bebas Neue"
            mt="12px"
          >
            In-Game
          </Text>
          <Flex gap={4} w="100%" overflowX="auto">
            {cardForInGame.map((product, index) => {
              return (
                <Card
                  key={`${index - product.value}`}
                  widthCard="70%"
                  heightImg="160px"
                  description={product.description}
                  imgPath={product.imgPath}
                  points={product.value}
                  onClickCard={() => getCardProps(product)}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex
          w="100%"
          justify="flex-start"
          flexDir="column"
          mb="100px"
          height="100%"
        >
          <Text
            fontSize="32px"
            textTransform="uppercase"
            fontWeight={400}
            lineHeight="42.56px"
            fontFamily="Bebas Neue"
            mt="12px"
          >
            Produtos Exclusivos
          </Text>
          <Flex w="100%" flexDir="column">
            {cardForExclusiveProducts.map((product, index) => {
              return (
                <Card
                  key={`${index - product.value}`}
                  widthCard="100%"
                  description={product.description}
                  imgPath={product.imgPath}
                  points={product.value}
                  onClickCard={() => getCardProps(product)}
                />
              );
            })}
          </Flex>
        </Flex>
      </Box>
    </ContainerStyle>
  );
};

export default Store;
