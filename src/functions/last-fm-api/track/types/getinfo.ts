export type GetTrackInfoRequestParams =
  | {
      track: string;
      artist: string;
      mbid?: string;
    }
  | {
      track?: string;
      artist?: string;
      mbid: string;
    };

export type GetTrackInfoResponse = {
  track: Track;
};

export type Track = {
  duration: string;
  listeners: string;
  playcount: string;
  artist: Artist;
  streamable: Streamable;
  toptags: Toptags;
  wiki: Wiki;
  url: string;
  album: Album;
  name: string;
  mbid: string;
};

export type Album = {
  artist: string;
  "@attr": Attr;
  image: Image[];
  url: string;
  mbid: string;
  title: string;
};

export type Attr = {
  position: number;
};

export type Image = {
  size: string;
  "#text": string;
};

export type Artist = {
  url: string;
  name: string;
  mbid: string;
};

export type Streamable = {
  fulltrack: string;
  "#text": string;
};

export type Toptags = {
  tag: Tag[];
};

export type Tag = {
  name: string;
  url: string;
};

export type Wiki = {
  published: string;
  content: string;
  summary: string;
};
