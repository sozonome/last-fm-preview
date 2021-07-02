import { LastFMApiMethodsKeyType } from "./configs";

export type LastFMApiMandatoryParams = {
  method: LastFMApiMethodsKeyType;
};

export type LastFMApiRequiredParams = {
  api_key: string;
  format?: "json";
};

export type LastFMApiDefaultParams = LastFMApiMandatoryParams &
  LastFMApiRequiredParams;

export type PaginatedRequestParams = {
  page?: number;
  limit?: number;
};
