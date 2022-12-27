import { Avatar, Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

import BoxCard from "lib/components/samples/BoxCard";
import Challenges from "lib/components/samples/Challenges";
import ContainerStyle from "lib/components/samples/Container";
import Missions from "lib/components/samples/Missions";
import type { IStoreProps } from "store/store";
import { arround } from "utils/arround";

const Points = () => {
  const { data: session } = useSession();
  const points = useSelector((state: IStoreProps) => state.points.totalPoints);

  let user = "";
  if (session?.user?.name) {
    user = session?.user?.name;
  }

  return (
    <ContainerStyle>
      <Box mb={6}>
        <Flex
          flexDir="column"
          gap={2}
          align="center"
          bg="linear-gradient(127.25deg, #8338EC 0%, #FFBE0B 100%)"
          h="441px"
          mb="50px"
          borderRadius="0px 0px 12px 12px"
        >
          <Avatar
            mt={12}
            name={user}
            border="4px solid #FFFFFF"
            borderRadius="9999px"
            size="md"
          />
          <Flex align="center" flexDir="column" gap={3} mt={4}>
            <Text
              color="black"
              fontWeight={800}
              fontSize="16px"
              textAlign="center"
              lineHeight="24px"
            >
              Olá, {user}!
            </Text>

            <Text
              color="black"
              fontWeight={800}
              fontSize="12px"
              textAlign="center"
              lineHeight="27px"
              textTransform="uppercase"
              letterSpacing="2px"
            >
              pontos
            </Text>
            <Heading
              color="black"
              fontWeight={800}
              fontSize="60px"
              textAlign="center"
              lineHeight="60px"
            >
              {arround(points, 3)}
            </Heading>
            <Text
              color="black"
              fontWeight={800}
              fontSize="12px"
              textAlign="center"
              lineHeight="27px"
              textTransform="uppercase"
              letterSpacing="2px"
            >
              Cards ativos
            </Text>
            <Flex flexWrap="nowrap" overflow="auto">
              <Img src="/KAMI 2 1.png" w="100px" h="100px" />
              <Img src="/KAMI 2 1.png" w="100px" h="100px" />
              <Img src="/KAMI 2 1.png" w="100px" h="100px" />
              <Img src="/KAMI 2 1.png" w="100px" h="100px" />
              <Img src="/KAMI 2 1.png" w="100px" h="100px" />
              <Img src="/KAMI 2 1.png" w="100px" h="100px" />
            </Flex>
          </Flex>
          <Flex flexDir="column" mt={14}>
            <Flex p="12px" flexDir="column" gap={4}>
              <Challenges />
              <Missions />
            </Flex>

            <BoxCard />
          </Flex>
        </Flex>
      </Box>
    </ContainerStyle>
  );
};

export default Points;
