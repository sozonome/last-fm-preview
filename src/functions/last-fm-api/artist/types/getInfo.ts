import { Image } from "./topArtists";

export type GetArtisInfoRequestParams =
  | {
      artist: string;
      mbid?: string;
    }
  | { mbid: string; artist?: string };

export type GetArtisInfoResponse = {
  artist: ArtistInfo;
};

export type ArtistInfo = {
  bio: Bio;
  ontour: number;
  stats: Stats;
  mbid: string;
  image: Image[];
  similar: Similar;
  url: string;
  tags: Tags;
  name: string;
  streamable: string;
};

export type Bio = {
  links: Links;
  content: string;
  published: string;
  summary: string;
};

export type Links = {
  link: Link;
};

export type Link = {
  rel: string;
  href: string;
};

export type Similar = {
  artist: ArtistElement[];
};

export type ArtistElement = {
  url: string;
  name: string;
  image: Image[];
};

export type Stats = {
  playcount: number;
  listeners: number;
};

export type Tags = {
  tag: Tag[];
};

export type Tag = {
  name: string;
  url: string;
};
