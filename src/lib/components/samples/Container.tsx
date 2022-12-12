import type { ContainerProps } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const ContainerStyle = ({ children }: ContainerProps) => {
  return (
    <Container
      h="2060px"
      display="grid"
      gridTemplateRows="1fr auto"
      maxW="full"
      p={0}
    >
      {children}
    </Container>
  );
};

export default ContainerStyle;
