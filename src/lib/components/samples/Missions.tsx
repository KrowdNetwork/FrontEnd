import { Badge, Flex, Icon, Text } from "@chakra-ui/react";

import { missions } from "lib/mocks/missions";

import MissionsUnlocked from "./MissionsUnlocked";

const Missions = () => {
  return (
    <Flex w="100%" justify="flex-start" flexDir="column">
      <Text
        fontSize="32px"
        textTransform="uppercase"
        fontWeight={400}
        lineHeight="42.56px"
        fontFamily="Bebas Neue"
        mt="12px"
      >
        Missões
      </Text>
      <Flex flexDir="column">
        {missions.map((mission, index) => {
          return (
            <Flex
              key={`${mission.points - index}`}
              align="center"
              bg="#27272a"
              borderRadius="8px"
              mb={1}
              mt={1}
              p="12px"
            >
              <Flex w="100%" align="center" gap={2}>
                <Icon as={mission.Icon} color={mission.color} w={6} h={6} />
                <Text
                  fontSize="16px"
                  fontWeight={500}
                  lineHeight="20px"
                  color="rgba(255, 255, 255, 1)"
                  fontFamily="Inter"
                >
                  {mission.description}
                </Text>
              </Flex>
              <Badge colorScheme="yellow" ml="1" fontSize="0.8em">
                +{mission.points}
              </Badge>
            </Flex>
          );
        })}
        <MissionsUnlocked />
      </Flex>
    </Flex>
  );
};

export default Missions;
