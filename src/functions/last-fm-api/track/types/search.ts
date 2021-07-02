import { PaginatedRequestParams } from "functions/last-fm-api/types";

export type SearchTrackRequestParams = PaginatedRequestParams & {
  /** the track name */
  track: string;
};

export type SearchTrackResponse = {
  results: Results;
};

export type Results = {
  "opensearch:Query": OpensearchQuery;
  "opensearch:totalResults": string;
  "opensearch:startIndex": string;
  "opensearch:itemsPerPage": string;
  trackmatches: Trackmatches;
  "@attr": Attr;
};

export type Attr = {};

export type OpensearchQuery = {
  "#text": string;
  role: string;
  startPage: string;
};

export type Trackmatches = {
  track: Track[];
};

export type Track = {
  name: string;
  artist: string;
  url: string;
  streamable: Streamable;
  listeners: string;
  image: Image[];
  mbid: string;
};

export type Image = {
  "#text": string;
  size: Size;
};

export enum Size {
  Extralarge = "extralarge",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum Streamable {
  Fixme = "FIXME",
}
