import { Grid } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import Signin from "./auth/signin";
import AuthorizedSocialMedia from "./authorizedSocialMedia";

const Home = () => {
  const { data: session } = useSession();

  return <Grid>{session ? <AuthorizedSocialMedia /> : <Signin />}</Grid>;
};

export default Home;
