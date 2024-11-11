import { IArtist } from "./artist";

export interface IMusic {
  id: number;
  thumbnail: string;
  musicUrl: string;
  title: string;
  year: number;
  artist: IArtist;
}
