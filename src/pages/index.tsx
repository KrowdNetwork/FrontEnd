import { Grid } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

import HomePage from "lib/pages/home";

import Signin from "./auth/signin";

const Home = () => {
  const { data: session } = useSession();

  return <Grid>{session ? <HomePage /> : <Signin />}</Grid>;
};

export default Home;
