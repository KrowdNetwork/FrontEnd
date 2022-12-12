import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";

import { challenges } from "lib/mocks/challenges";

const Challenges = () => {
  return (
    <Flex w="100%" justify="flex-start" flexDir="column">
      <Text
        fontSize="32px"
        textTransform="uppercase"
        fontWeight={400}
        lineHeight="42.56px"
        fontFamily="Bebas Neue"
        mb="12px"
      >
        Desafios
      </Text>
      <Flex>
        <Accordion defaultIndex={[0]} w="100%" allowMultiple>
          {challenges.map((challenge) => {
            return (
              <AccordionItem key={challenge.name} p="12px">
                <Text
                  fontSize="16px"
                  fontWeight={500}
                  lineHeight="20px"
                  color="rgba(255, 255, 255, 1)"
                >
                  <AccordionButton p={0} mb={2}>
                    <Flex flex="1" textAlign="left" align="center" gap={2}>
                      <>
                        <Icon
                          as={challenge.Icon}
                          color={challenge.color}
                          w={6}
                          h={6}
                        />
                        {challenge.name}
                        <Text opacity={0.5}>{challenge.challenge.length}</Text>
                      </>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                </Text>
                <AccordionPanel p={0}>
                  {challenge.challenge.map((infos, index) => {
                    return (
                      <Flex
                        key={`${infos.points - index}`}
                        align="center"
                        bg="#27272a"
                        borderRadius="8px"
                        mt={1}
                        mb={1}
                        p="12px"
                      >
                        <Flex w="100%" align="center" gap={2}>
                          <Icon
                            as={challenge.Icon}
                            color={challenge.color}
                            w={6}
                            h={6}
                          />
                          <Text
                            fontSize="16px"
                            fontWeight={500}
                            lineHeight="20px"
                            color="rgba(255, 255, 255, 1)"
                          >
                            {infos.description}
                          </Text>
                        </Flex>
                        <Badge colorScheme="yellow">+{infos.points}</Badge>
                      </Flex>
                    );
                  })}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Flex>
    </Flex>
  );
};

export default Challenges;
