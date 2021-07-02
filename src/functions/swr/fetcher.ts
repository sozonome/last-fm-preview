import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export type FetcherArgs<ReqType> = {
  url: string;
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  data?: ReqType | AxiosRequestConfig["data"];
  method: AxiosRequestConfig["method"];
};

export const fetcher = <ReqType, ResType>({
  url,
  params,
  headers,
  data,
  method = "GET",
}: FetcherArgs<ReqType>) =>
  axios(url, { params, headers, data, method }).then(
    (res: AxiosResponse<ResType>) => res.data
  );
