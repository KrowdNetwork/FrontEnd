import { Avatar, Button, Flex, Text, Box, Divider } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

import ContainerStyle from "lib/components/samples/Container";
import { SocialMedia } from "lib/components/SocialMedia";

const Profile = () => {
  const { push } = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
  };
  return (
    <ContainerStyle>
      <Box p="12px">
        <Flex align="center" gap={2} mt={6} mb={6}>
          <Avatar />
          <Text fontSize="30px" fontWeight={700} lineHeight="39.9px">
            Victor Luna
          </Text>
        </Flex>
        <Divider />
        <Text
          fontSize="32px"
          textTransform="uppercase"
          fontWeight={400}
          lineHeight="42.56px"
          fontFamily="Bebas Neue"
          mt={6}
          mb={2}
        >
          Autorizações
        </Text>
        <Box mb={6}>
          <SocialMedia showPoint={false} />
        </Box>
        <Divider />
        <Button
          mt={6}
          width="full"
          borderRadius="8px"
          border=" 1px solid #71717A"
          bg="transparent"
          onClick={handleSignOut}
        >
          Logout
        </Button>
      </Box>
    </ContainerStyle>
  );
};

export default Profile;
