import { Box, Flex } from "@chakra-ui/react";

import Card from "lib/components/samples/Card";
import ContainerStyle from "lib/components/samples/Container";
import Header from "lib/layout/Header";
import { cardInventory } from "lib/mocks/card";

const Inventories = () => {
  return (
    <ContainerStyle>
      <Header title="Inventário" />

      <Box mb="120px" p="0px 20px">
        <Flex w="100%" flexDir="column" gap={4}>
          {cardInventory.map((card) => {
            return (
              <Card
                isVideo
                key={card.id}
                widthCard="100%"
                description={card.description}
                videoPath={card.videoPath}
                infos={card.infos}
              />
            );
          })}
        </Flex>
      </Box>
    </ContainerStyle>
  );
};

export default Inventories;
