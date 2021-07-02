import { useLastFMSWRHook } from "../configs";

import {
  GetTrackInfoRequestParams,
  GetTrackInfoResponse,
} from "./types/getinfo";
import {
  GetTopTracksRequestParams,
  GetTopTracksResponse,
} from "./types/topTracks";
import { SearchTrackRequestParams, SearchTrackResponse } from "./types/search";

export const useTopTracks = (params?: GetTopTracksRequestParams) =>
  useLastFMSWRHook<GetTopTracksResponse, GetTopTracksRequestParams>(
    "chart.gettoptracks",
    params
  );

export const useTrackInfo = (params: GetTrackInfoRequestParams) =>
  useLastFMSWRHook<GetTrackInfoResponse, GetTrackInfoRequestParams>(
    "track.getinfo",
    params
  );

export const useSearchTrack = (params: SearchTrackRequestParams) =>
  useLastFMSWRHook<SearchTrackResponse, SearchTrackRequestParams>(
    "track.search",
    params
  );
