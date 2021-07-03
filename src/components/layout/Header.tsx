import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Image, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      width="full"
      position="fixed"
      top="0"
      zIndex={5}
      backgroundColor={
        colorMode === "light"
          ? "rgba(247, 250, 252, 0.8)"
          : "rgba(26, 32, 44, 0.8)"
      }
      style={{ backdropFilter: "blur(6px)" }}
      as="header"
    >
      <Flex
        marginX="auto"
        paddingX={8}
        paddingY={4}
        maxWidth={800}
        align="center"
        alignSelf="flex-start"
        justifyContent="center"
        gridGap={2}
      >
        <Link to="/">
          <Flex gridGap={2} alignItems="center">
            <Image src="/assets/music.svg" width={10} />
            <Box>
              <Heading as="h1" size="md" display="flex" alignItems="center">
                museec
              </Heading>
              <Text fontSize="sm">music explore</Text>
            </Box>
          </Flex>
        </Link>

        <Box marginLeft="auto">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
