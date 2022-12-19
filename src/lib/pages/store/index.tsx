import { Box, Flex, Text } from "@chakra-ui/react";

import Card from "lib/components/samples/Card";
import ContainerStyle from "lib/components/samples/Container";
import Header from "lib/layout/Header";
import {
  cardForCarousel,
  cardForExclusiveProducts,
  cardForExperiences,
  cardForInGame,
} from "lib/mocks/card";

const Store = () => {
  return (
    <ContainerStyle>
      <Header title="Loja" points="11,324" />
      <Box mb={6} p="0px 20px">
        <Flex gap={8} w="100%" overflowX="auto" mb="30px">
          {cardForCarousel.map((card, index) => {
            return (
              <Card
                key={`${index - card.value}`}
                widthCard="100%"
                heightImg="220px"
                description={card.description}
                imgPath={card.imgPath}
                price={card.value}
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
            {cardForExperiences.map((card, index) => {
              return (
                <Card
                  key={`${index - card.value}`}
                  widthCard="220px"
                  heightImg="160px"
                  description={card.description}
                  imgPath={card.imgPath}
                  points={card.value}
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
            {cardForInGame.map((card, index) => {
              return (
                <Card
                  key={`${index - card.value}`}
                  widthCard="70%"
                  heightImg="160px"
                  description={card.description}
                  imgPath={card.imgPath}
                  points={card.value}
                />
              );
            })}
          </Flex>
        </Flex>
        <Flex
          w="100%"
          justify="flex-start"
          flexDir="column"
          mb="30px"
          height="600px"
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
            {cardForExclusiveProducts.map((card, index) => {
              return (
                <Card
                  key={`${index - card.value}`}
                  widthCard="100%"
                  description={card.description}
                  imgPath={card.imgPath}
                  points={card.value}
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
