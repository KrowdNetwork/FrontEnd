import { Flex, Image } from "@chakra-ui/react";

interface SomeImageProps {
  width?: string;
  height?: string;
}

const SomeImage = ({ width, height }: SomeImageProps) => {
  return (
    <Flex gap={2} justifyContent="center" alignItems="center">
      <Image src="/logo.png" w={width} h={height} />
    </Flex>
  );
};

export default SomeImage;
