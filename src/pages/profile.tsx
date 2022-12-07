import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

import ContainerStyle from "lib/components/samples/Container";
import Footer from "lib/components/samples/Footer";

const Profile = () => {
  const { push } = useRouter();
  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/" });

    push(data.url);
  };
  return (
    <ContainerStyle>
      <Footer>
        <Button
          width="full"
          borderRadius="8px"
          border=" 1px solid #71717A"
          bg="transparent"
          onClick={handleSignOut}
        >
          Logout
        </Button>
      </Footer>
    </ContainerStyle>
  );
};

export default Profile;
