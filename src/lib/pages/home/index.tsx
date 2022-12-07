import { Avatar, Flex, Heading, Img, Text, Button } from "@chakra-ui/react";
import { IconBellRinging } from "@tabler/icons";
import { useRouter } from "next/router";

import ContainerStyle from "lib/components/samples/Container";
import Menu from "lib/components/samples/Menu";

const HomePage = () => {
  const { push } = useRouter();

  return (
    <ContainerStyle>
      <Flex
        flexDir="column"
        gap={4}
        p="12px"
        align="center"
        bg="url(white-noise.png), linear-gradient(127.25deg, #8338EC 0%, #FFBE0B 100%)"
        h="382px"
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
        <Img src="/lolCenter.png" />
      </Flex>

      <Menu />
    </ContainerStyle>
  );
};

export default HomePage;
