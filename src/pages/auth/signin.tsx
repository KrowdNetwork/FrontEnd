import {
  Box,
  Button,
  chakra,
  Container,
  Divider,
  Flex,
  FormControl,
  Image,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandTwitch,
  IconBrandInstagram,
} from "@tabler/icons";
import { AnimatePresence, motion } from "framer-motion";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import ButtonStyle from "lib/components/samples/ButtonStyle";
import { Message } from "lib/components/samples/Message";
import SomeImage from "lib/components/samples/SomeImage";

const providers = [
  {
    name: "Twitch",
    Icon: <IconBrandTwitch />,
    bgColor: "#754FF8",
  },
  {
    name: "Facebook",
    Icon: <IconBrandFacebook />,
    bgColor: "#406DEA",
  },
  {
    name: "Google",
    Icon: <IconBrandGoogle />,
    bgColor: "#FFFFFF",
    color: "#537DED",
  },
  {
    name: "Instagram",
    Icon: <IconBrandInstagram />,
  },
];

const Signin = () => {
  const { data: session, status } = useSession();
  const { push } = useRouter();

  const [email, setEmail] = useState("");
  if (session) push("/");
  if (status === "loading")
    return (
      <Container
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner />
      </Container>
    );

  const handleOAuthSignIn = (provider: string) => () => signIn(provider);

  // eslint-disable-next-line consistent-return
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!email) {
      Message.error("", "Email não valido");
      return;
    }
    push("/authorized-social-media");
    // signIn("email", { email, redirect: false });
  };

  return (
    <Container display="flex" alignItems="center" flexDir="column">
      <Flex
        width="100%"
        align="center"
        h="204px"
        justify="center"
        flexDir="column"
        mt="32px"
        mb="32px"
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 5, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SomeImage />
          </motion.div>
        </AnimatePresence>

        <Box>
          <Image src="/signup.png" />
        </Box>
      </Flex>
      <Flex
        mt="32px"
        w="100%"
        borderRadius="12px"
        bg="#27272A"
        p="24px"
        flexDir="column"
        gap={8}
      >
        <VStack>
          {providers.map(({ name, Icon, bgColor, color }) => (
            <Button
              key={name}
              leftIcon={Icon}
              onClick={handleOAuthSignIn(name.toLocaleLowerCase())}
              bg={bgColor}
              w="100%"
              maxW="341px"
              h="51px"
              borderRadius="8px"
              color={color || ""}
            >
              <Flex align="center" w="100%" justify="center">
                Continuar com {name}
              </Flex>
            </Button>
          ))}
        </VStack>

        <Flex align="center" gap={2}>
          <Divider bg="#3F3F46" />
          <Text
            fontWeight={600}
            fontSize="12px"
            color="#52525B"
            lineHeight="12px"
          >
            Ou
          </Text>
          <Divider bg="#3F3F46" />
        </Flex>

        <Flex flexDir="column" gap={2}>
          <Flex align="center" flexWrap="wrap" gap={1}>
            <Text fontWeight={600} fontSize="16px" lineHeight="24px">
              Criar conta ou logar com
            </Text>
            <Text fontWeight={600} fontSize="16px" lineHeight="24px">
              e-mail
            </Text>
          </Flex>

          <chakra.form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                _placeholder={{ color: "rgba(255, 255, 255, 0.64)" }}
              />
            </FormControl>
            <ButtonStyle type="submit" width="100%">
              Continuar
            </ButtonStyle>
          </chakra.form>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Signin;
