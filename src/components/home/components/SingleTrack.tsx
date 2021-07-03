import { Box, Flex, Text } from "@chakra-ui/layout";
import { NavLink } from "react-router-dom";

import { Track } from "functions/last-fm-api/track/types/topTracks";

type SingleTrackProps = {
  track: Track;
  index: number;
};

const SingleTrack = ({ track, index }: SingleTrackProps) => {
  return (
    <Flex gridGap={2} minHeight={12}>
      <Text>{index + 1}.</Text>
      <Box>
        <NavLink to="/">
          <Text
            _hover={{
              textDecoration: "underline ",
            }}
            fontSize="lg"
            fontFamily="raleway"
            fontWeight="bold"
          >
            {track.name}
          </Text>
        </NavLink>
        <NavLink to="/">
          <Text
            _hover={{
              textDecoration: "underline ",
            }}
            fontSize="sm"
            opacity={0.6}
          >
            {track.artist.name}
          </Text>
        </NavLink>
      </Box>
    </Flex>
  );
};

export default SingleTrack;
