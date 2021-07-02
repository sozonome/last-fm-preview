import axios, { AxiosResponse } from "axios";

export const fetcher = <ResType, ParamType>(url: string, params?: ParamType) =>
  axios(url, {
    params,
  }).then((res: AxiosResponse<ResType>) => res.data);
