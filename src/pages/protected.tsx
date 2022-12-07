import { Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Protected = () => {
  const { push } = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated: () => {
      push("/auth/signin");
    },
  });

  if (status === "loading") {
    return <Heading>Loading...</Heading>;
  }

  if (status !== "authenticated")
    return (
      <Heading> You are unauthenticated. this is a protected page.</Heading>
    );

  return <Heading>{session.user ? session.user.email : ""}</Heading>;
};

export default Protected;
