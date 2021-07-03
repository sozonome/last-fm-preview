import { Grid, Heading } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { useState } from "react";

import SingleTrack from "./SingleTrack";

import { useTopTracks } from "functions/last-fm-api/track";

const TopTracks = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const { data, isLoading, isError } = useTopTracks();

  const toggleCollapse = () => setExpanded(!expanded);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Grid gap={4}>
      <Heading>Top Tracks</Heading>

      {data && (
        <Grid gap={4}>
          {data.tracks.track
            .slice(0, expanded ? data.tracks.track.length : 10)
            .map((singleTrack, index) => (
              <SingleTrack
                track={singleTrack}
                index={index}
                key={singleTrack.name}
              />
            ))}
        </Grid>
      )}

      <Button variant="ghost" justifyContent="left" onClick={toggleCollapse}>
        {expanded ? "collapse" : "see more"}
      </Button>
    </Grid>
  );
};

export default TopTracks;
