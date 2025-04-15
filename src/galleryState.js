import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async () => {
    const response = await fetch('https://picsum.photos/v2/list?page=2&limit=100');
    const formatedResponse = await response.json();
    return formatedResponse;
  }
);

export const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    photos: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPhotos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPhotos.fulfilled, (state, action) => {
        state.photos = action.payload;
        state.isLoading = false;
      })
      .addCase(getPhotos.rejected, (state) => {
        state.isLoading = false;
        // Optional: Add error handling if needed
      });
  }
});

export default gallerySlice.reducer;
