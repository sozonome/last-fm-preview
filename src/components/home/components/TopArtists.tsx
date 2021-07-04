import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { useTopArtists } from "functions/last-fm-api/artist";
import { useState } from "react";

const TopArtists = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { data, isLoading, isError } = useTopArtists();

  const toggleCollapse = () => setIsExpanded(!isExpanded);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Grid gap={4}>
      <Heading>Top Artists</Heading>

      {data && (
        <Grid gap={4}>
          {data.artists.artist
            .slice(0, isExpanded ? data.artists.artist.length : 10)
            .map((singleArtist, index) => (
              <Flex
                alignItems="start"
                minHeight={12}
                gridGap={2}
                key={singleArtist.name}
              >
                <Text>{index + 1}.</Text>
                <NavLink to={`/music/${singleArtist.name}`}>
                  <Text
                    fontSize="lg"
                    fontWeight="bold"
                    fontFamily="Raleway"
                    _hover={{ textDecoration: "underline" }}
                  >
                    {singleArtist.name}
                  </Text>
                </NavLink>
              </Flex>
            ))}
        </Grid>
      )}

      <Button variant="ghost" justifyContent="left" onClick={toggleCollapse}>
        {isExpanded ? "collapse" : "see more"}
      </Button>
    </Grid>
  );
};

export default TopArtists;
