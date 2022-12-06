import { Heading, Spinner } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// eslint-disable-next-line consistent-return
const Protected = () => {
  const { push } = useRouter();
  const { status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Spinner />;
  }

  if (status !== "authenticated")
    return (
      <Heading> You are unauthenticated. this is a protected page.</Heading>
    );
};

export default Protected;
