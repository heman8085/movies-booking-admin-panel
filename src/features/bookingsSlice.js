import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const snapshot = await getDocs(collection(db, "bookings"));
    let bookings = [];
    snapshot.forEach((doc) => bookings.push({ id: doc.id, ...doc.data() }));
    return bookings;
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: { bookings: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.bookings = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default bookingsSlice.reducer;
