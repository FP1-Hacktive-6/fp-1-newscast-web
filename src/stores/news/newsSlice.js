import { createSlice } from "@reduxjs/toolkit";
import { getEverythingNews, getTopHeadlinesNews } from "./newsAction";

const initialState = {
	isLoading: true,
	error: null,
	data: null,
	totalResults: null,
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getEverythingNews.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.articles;
			state.totalResults = payload.totalResults;
		});
		builder.addCase(getEverythingNews.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		});
		builder.addCase(getEverythingNews.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getTopHeadlinesNews.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getTopHeadlinesNews.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.articles;
			state.totalResults = payload.totalResults;
		});
		builder.addCase(getTopHeadlinesNews.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		});
	},
});

export default newsSlice.reducer;
