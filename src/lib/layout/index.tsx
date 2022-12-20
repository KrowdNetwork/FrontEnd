import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="full" transition="1s ease-out" h="full">
      <Box>
        <Box as="main">{children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
