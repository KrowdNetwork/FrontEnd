import { Badge, Flex, Icon, Text } from "@chakra-ui/react";

import { missionsUnlocked } from "lib/mocks/missionsUnlocked";

const MissionsUnlocked = () => {
  return (
    <Flex w="100%" justify="flex-start" flexDir="column">
      <Text
        fontSize="12px"
        textTransform="uppercase"
        fontWeight={700}
        letterSpacing="1px"
        lineHeight="1em"
        mt={8}
        mb={1}
      >
        Missões desbloqueadas
      </Text>
      <Flex flexDir="column">
        {missionsUnlocked.map((mission) => {
          return (
            <Flex
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
      </Flex>
    </Flex>
  );
};

export default MissionsUnlocked;
