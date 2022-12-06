import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import ButtonStyle from "lib/components/samples/ButtonStyle";

const Page404 = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            It&apos;s Okay!
          </Text>
          <ButtonStyle
            asLink
            hrefName="/"
            backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            size="sm"
          >
            Let&apos;s Head Back
          </ButtonStyle>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404;
