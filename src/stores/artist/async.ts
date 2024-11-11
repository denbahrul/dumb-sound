import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { IArtist } from "../../types/artist";
import { apiV1 } from "../../libs/api";
import { AddArtistDTO } from "../../validation/artistSchema";

export const getArtist = createAsyncThunk<IArtist[], undefined>(
  "artist/getArtist",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/artist");

      return res.data.artist;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

export const addArtist = createAsyncThunk<IArtist, AddArtistDTO>(
  "artist/addArtist",
  async (data, thunkAPI) => {
    try {
      const res = await apiV1.post(`/artist/add`, data);
      Swal.fire({
        icon: "success",
        title: res.data.message,
        showConfirmButton: false,
        background: "#181818",
        color: "#fff",
        iconColor: "#04A51E",
        timer: 1500,
      });
      return res.data.artist;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Oops..",
          text: `${error.message}`,
          background: "#181818",
          color: "#fff",
        });

        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
