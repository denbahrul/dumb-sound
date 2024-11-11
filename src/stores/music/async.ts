import { createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { IMusic } from "../../types/music";
import { apiV1 } from "../../libs/api";

export const getMusic = createAsyncThunk<IMusic[], undefined>(
  "music/getMusic",
  async (_, thunkAPI) => {
    try {
      const res = await apiV1.get("/music");

      return res.data.music;
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
