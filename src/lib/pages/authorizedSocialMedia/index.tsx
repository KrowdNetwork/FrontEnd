import { Flex, Text, Box } from "@chakra-ui/react";
import { IconArrowLeft } from "@tabler/icons";
import { useRouter } from "next/router";

import ButtonStyle from "lib/components/samples/ButtonStyle";
import ContainerStyle from "lib/components/samples/Container";
import Footer from "lib/components/samples/Footer";
import { SocialMedia } from "lib/components/SocialMedia";

const AuthorizedSocialMedia = () => {
  const { push } = useRouter();
  return (
    <ContainerStyle>
      <Flex flexDir="column" gap={8} p="12px">
        <Box onClick={() => push("/")}>
          <IconArrowLeft />
        </Box>

        <Box>
          <Text fontSize="20px" fontWeight={700} lineHeight="24px" mb={2}>
            Autorize suas redes sociais
          </Text>
          <Text
            fontSize="14px"
            fontWeight={400}
            lineHeight="16.8px"
            color="rgba(255, 255, 255, 0.64)"
          >
            Conecte pelo menos 2 redes sociais para começar.
          </Text>
        </Box>

        <SocialMedia showPoint />
      </Flex>
      <Footer>
        <ButtonStyle width="full" onClick={() => push("/offers")}>
          Continuar
        </ButtonStyle>
      </Footer>
    </ContainerStyle>
  );
};

export default AuthorizedSocialMedia;
