import { createSlice } from "@reduxjs/toolkit";
import { getEverythingNews, getTopHeadlinesNews } from "./newsAction";

const initialState = {
	refresher: true,
	isLoading: true,
	error: null,
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getEverythingNews.fulfilled, (state) => {
			state.isLoading = false;
		});
		builder.addCase(getEverythingNews.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		});
		builder.addCase(getTopHeadlinesNews.fulfilled, (state) => {
			state.isLoading = false;
		});
		builder.addCase(getTopHeadlinesNews.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		});
	},
});

export default newsSlice.reducer;
