import { PaginatedRequestParams } from "functions/last-fm-api/types";

export type GetTopArtistsRequestParams = PaginatedRequestParams;

export type GetTopArtistsResponse = {
  artists: Artists;
};

export type Artists = {
  artist: Artist[];
  "@attr": Attr;
};

export type Attr = {
  page: string;
  perPage: string;
  totalPages: string;
  total: string;
};

export type Artist = {
  name: string;
  playcount: string;
  listeners: string;
  mbid: string;
  url: string;
  streamable: string;
  image: Image[];
};

export type Image = {
  "#text": string;
  size: Size;
};

export enum Size {
  Extralarge = "extralarge",
  Large = "large",
  Medium = "medium",
  Mega = "mega",
  Small = "small",
}
