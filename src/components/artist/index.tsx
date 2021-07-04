import { Grid, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useParams } from "react-router-dom";

import { useArtistInfo } from "functions/last-fm-api/artist";
import { GetArtisInfoRequestParams } from "functions/last-fm-api/artist/types/getInfo";
import { useState } from "react";

type ArtistPageParams = {
  artistName: string;
};

const Artist = () => {
  const { artistName } = useParams<ArtistPageParams>();
  const [params] = useState<GetArtisInfoRequestParams>({
    artist: artistName,
  });
  const { data, isLoading, isError } = useArtistInfo(params);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Grid>
      {data && (
        <Grid>
          <Image src={data.artist.image[1]["#text"]} />
          <Text>{data.artist.name}</Text>
          <Text>{data.artist.bio.content}</Text>
        </Grid>
      )}
    </Grid>
  );
};

export default Artist;
