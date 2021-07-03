import { Grid, Heading } from "@chakra-ui/layout";
import TopArtists from "./components/TopArtists";

import TopTracks from "./components/TopTracks";

const Home = () => {
  return (
    <Grid gap={12}>
      <Heading size="2xl">Charts</Heading>

      <Grid
        gap={8}
        alignItems="start"
        templateColumns={["1fr", "repeat(2, 1fr)"]}
      >
        <TopTracks />
        <TopArtists />
      </Grid>
    </Grid>
  );
};

export default Home;
