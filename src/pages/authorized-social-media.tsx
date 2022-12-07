import type { GetSessionParams } from "next-auth/react";
import { getSession } from "next-auth/react";

import AuthorizedSocialMedia from "lib/pages/authorizedSocialMedia";

const AuthorizedMedia = () => {
  return <AuthorizedSocialMedia />;
};

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  if (!session) {
    return {
      props: {
        required: {
          destination: "/",
          permanent: false,
        },
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}

export default AuthorizedMedia;
