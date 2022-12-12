import { useSession } from "next-auth/react";

import Points from "lib/pages/points";

import Signin from "./auth/signin";

const Home = () => {
  const { data: session } = useSession();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{session ? <Points /> : <Signin />}</>;
};

export default Home;
