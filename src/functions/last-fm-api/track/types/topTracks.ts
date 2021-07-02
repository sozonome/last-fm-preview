import { PaginatedRequestParams } from "functions/last-fm-api/types";

export type GetTopTracksRequestParams = PaginatedRequestParams;

export type GetTopTracksResponse = {
  tracks: Tracks;
};

export type Tracks = {
  track: Track[];
  "@attr": Attr;
};

export type Attr = {
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

export type Track = {
  name: string;
  duration: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: Streamable;
  artist: Artist;
  image: Image[];
};

export type Artist = {
  name: string;
  mbid: string;
  url: string;
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

export type Streamable = {
  "#text": string;
  fulltrack: string;
};
