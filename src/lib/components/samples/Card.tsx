import { Avatar, Badge, Box, Flex, Text } from "@chakra-ui/react";

const Card = () => {
  return (
    <Box
      padding="3px"
      position="relative"
      background="url(white-noise.png), linear-gradient(127.25deg, #FFBE0B 0%, #EBFF00 100%)"
      boxShadow="0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)"
      borderRadius="12px"
    >
      <Flex flexDir="column" bg="black" borderRadius="8px" p="8px">
        <Flex justify="flex-end" align="center">
          <Badge variant="solid" colorScheme="yellow">
            Ativo
          </Badge>
        </Flex>

        <Flex>
          <Avatar src="/logo.png" name="" width="89px" height="89px" />

          <Text fontWeight={900} fontSize="16px" lineHeight="19.2px" p={4}>
            Kami Rouba Barão 55/200
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Card;
