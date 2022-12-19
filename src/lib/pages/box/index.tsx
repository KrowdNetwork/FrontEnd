import { Box, Flex } from "@chakra-ui/react";

import Card from "lib/components/samples/Card";
import ContainerStyle from "lib/components/samples/Container";
import Header from "lib/layout/Header";
import { cardForCarousel } from "lib/mocks/card";

const Boxes = () => {
  return (
    <ContainerStyle>
      <Header title="Box" />
      <Box mb="120px" p="0px 20px">
        <Flex w="100%" flexDir="column" gap={4}>
          {cardForCarousel.map((card, index) => {
            return (
              <Card
                key={`${index - card.value}`}
                widthCard="100%"
                heightImg="273px"
                description={card.description}
                imgPath={card.imgPath}
                points={card.value}
              />
            );
          })}
        </Flex>
      </Box>
    </ContainerStyle>
  );
};

export default Boxes;
