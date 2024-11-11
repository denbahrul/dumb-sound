import { z } from "zod";
import { ArtisTypeEnum } from "../types/artist";

export const addArtistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  careerStart: z.string(),
  old: z.string(),
  type: z.enum([ArtisTypeEnum.Solo, ArtisTypeEnum.Duo, ArtisTypeEnum.Group], {
    errorMap: () => ({ message: "Artist typr must be Solo, Duo or Group" }),
  }),
});

export type AddArtistDTO = z.infer<typeof addArtistSchema>;
