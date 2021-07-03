import { Box, Flex } from "@chakra-ui/layout";
import { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box transition="0.5s ease-out">
      <Header />
      <Meta />
      <Flex
        marginX="auto"
        maxWidth={800}
        wrap="wrap"
        marginTop={16}
        marginBottom={8}
        paddingX={8}
        minHeight="90vh"
      >
        <Box width="full" as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
};

export default Layout;
