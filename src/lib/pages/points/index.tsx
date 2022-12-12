import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import { IconBellRinging } from "@tabler/icons";
import { useRouter } from "next/router";

import BoxCard from "lib/components/samples/BoxCard";
import Challenges from "lib/components/samples/Challenges";
import Menu from "lib/components/samples/Menu";
import Missions from "lib/components/samples/Missions";

const Points = () => {
  const { push } = useRouter();

  return (
    <Box mb={6}>
      <Flex
        flexDir="column"
        gap={2}
        align="center"
        bg="url(white-noise.png), linear-gradient(127.25deg, #8338EC 0%, #FFBE0B 100%)"
        h="382px"
        mb="24px"
      >
        <Button onClick={() => push("/authorized-social-media")}>
          <IconBellRinging />
        </Button>
        <Avatar
          mt={12}
          name="Segun Adebayo"
          src="https://bit.ly/dan-abramov"
          background="url(segun_adebayo.jpg)"
          border="4px solid #FFFFFF"
          borderRadius="9999px"
          size="lg"
        />
        <Flex align="center" flexDir="column" gap={2}>
          <Heading
            color="black"
            fontWeight={800}
            fontSize="60px"
            textAlign="center"
            lineHeight="60px"
          >
            11,324
          </Heading>
          <Text
            color="black"
            fontWeight={400}
            fontSize="18px"
            textAlign="center"
            lineHeight="27px"
          >
            pontos
          </Text>
        </Flex>
        <Img src="/KAMI 2 1.png" />
        <Flex flexDir="column">
          <Flex p="12px" flexDir="column" gap={4}>
            <Challenges />
            <Missions />
          </Flex>

          <BoxCard />
        </Flex>
      </Flex>

      <Menu />
    </Box>
  );
};

export default Points;