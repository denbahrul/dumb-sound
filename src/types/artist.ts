export interface IArtist {
  id: number;
  name: string;
  old?: number;
  type: ArtisTypeEnum;
  careerStart?: string;
}

export enum ArtisTypeEnum {
  Solo = "Solo",
  Duo = "Duo",
  Group = "Group",
}
