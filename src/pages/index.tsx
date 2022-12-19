import { useSession } from "next-auth/react";

import Signin from "./auth/signin";
import AuthorizedMedia from "./authorized-social-media";

const Home = () => {
  const { data: session } = useSession();

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{session ? <AuthorizedMedia /> : <Signin />}</>;
};

export default Home;
