import { Avatar, Button, Flex, Text, Box, Divider } from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import ContainerStyle from "lib/components/samples/Container";
import { SocialMedia } from "lib/components/SocialMedia";

const Profile = () => {
  const { push } = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
  };

  const { data: session } = useSession();
  let user = "";
  if (session?.user?.name) {
    user = session?.user?.name;
  }

  return (
    <ContainerStyle>
      <Box p="12px" mb={120}>
        <Flex align="center" gap={2} mt={6} mb={6}>
          <Avatar name={user} size="lg" />
          <Text fontSize="30px" fontWeight={700} lineHeight="39.9px">
            {user}
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
