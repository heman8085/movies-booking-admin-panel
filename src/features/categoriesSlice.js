import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

// Define async thunk for adding a category
export const addCategory = createAsyncThunk(
  "categories/addCategory",
  async (category) => {
    const docRef = await addDoc(collection(db, "categories"), category);
    return { id: docRef.id, ...category };
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: { categories: [], status: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addCategory.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default categoriesSlice.reducer;
