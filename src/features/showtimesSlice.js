import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// export const fetchShowtimes = createAsyncThunk(
//   "showtimes/fetchShowtimes",
//   async () => {
//     const snapshot = await getDocs(collection(db, "showtimes"));
//     let showtimes = [];
//     snapshot.forEach((doc) => showtimes.push({ id: doc.id, ...doc.data() }));
//     return showtimes;
//   }
// );

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
    //   .addCase(fetchShowtimes.pending, (state) => {
    //     state.status = "loading";
    //   })
    //   .addCase(fetchShowtimes.fulfilled, (state, action) => {
    //     state.showtimes = action.payload;
    //     state.status = "succeeded";
    //   })
    //   .addCase(fetchShowtimes.rejected, (state) => {
    //     state.status = "failed";
    //   })
      .addCase(addShowtime.fulfilled, (state, action) => {
        state.showtimes.push(action.payload);
      });
  },
});

export default showtimesSlice.reducer;
