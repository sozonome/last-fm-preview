import { Box, Link, Text } from "@chakra-ui/layout";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="full"
      marginY={8}
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="sm">
        {new Date().getFullYear()} -{" "}
        <Link href="https://sznm.dev" isExternal>
          sznm.dev
        </Link>
      </Text>
      <Text fontSize="xs">
        Powered by{" "}
        <Link href="https://last.fm" isExternal>
          last.fm
        </Link>{" "}
        API
      </Text>
    </Box>
  );
};

export default Footer;
