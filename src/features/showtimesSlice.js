import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const addShowtime = createAsyncThunk(
  "showtimes/addShowtime",
  async (showtime) => {
    const docRef = await addDoc(collection(db, "showtimes"), showtime);
    return { id: docRef.id, ...showtime };
  }
);

const showtimesSlice = createSlice({
  name: "showtimes",
  initialState: { showtimes: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addShowtime.fulfilled, (state, action) => {
        state.showtimes.push(action.payload);
      });
  },
});

export default showtimesSlice.reducer;
