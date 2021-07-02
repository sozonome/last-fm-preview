import useSWR from "swr";

import { SWRHookResp } from "functions/swr/types";
import {
  LastFMApiDefaultParams,
  LastFMApiMandatoryParams,
  LastFMApiRequiredParams,
} from "./types";
import { fetcher } from "functions/swr/fetcher";

enum LastFMApiMethods {
  "chart.gettoptracks",
  "chart.gettopartists",
  "artist.search",
  "artist.getinfo",
  "track.search",
  "track.getinfo",
}

export type LastFMApiMethodsKeyType = keyof typeof LastFMApiMethods;

export const LAST_FM_API_URL = "https://ws.audioscrobbler.com/2.0/";
export const LAST_FM_API_KEY = "8adb7c86915983851f24d7c551cffe7c";

export const useLastFMSWRHook = <ResType, ParamType>(
  method: LastFMApiMethodsKeyType,
  params?: ParamType
): SWRHookResp<ResType> => {
  const { data, error } = useSWR<ResType>(
    [
      `${LAST_FM_API_URL}?method=${method}&api_key=${LAST_FM_API_KEY}&format=json`,
      params,
    ],
    fetcher
  );

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
};
