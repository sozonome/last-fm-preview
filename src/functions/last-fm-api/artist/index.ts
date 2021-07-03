import { useLastFMSWRHook } from "../configs";

import {
  GetTopArtistsRequestParams,
  GetTopArtistsResponse,
} from "./types/topArtists";
import {
  GetArtisInfoRequestParams,
  GetArtisInfoResponse,
} from "./types/getInfo";
import {
  SearchArtistRequestParams,
  SearchArtistResponse,
} from "./types/search";

export const useTopArtists = (params?: GetTopArtistsRequestParams) =>
  useLastFMSWRHook<GetTopArtistsResponse, GetTopArtistsRequestParams>(
    "chart.gettopartists",
    params
  );

export const useArtistInfo = (params: GetArtisInfoRequestParams) =>
  useLastFMSWRHook<GetArtisInfoResponse, GetArtisInfoRequestParams>(
    "track.getinfo",
    params
  );

export const useSearchArtist = (params: SearchArtistRequestParams) =>
  useLastFMSWRHook<SearchArtistResponse, SearchArtistRequestParams>(
    "artist.search",
    params
  );
