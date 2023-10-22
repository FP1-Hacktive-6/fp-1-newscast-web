import { createSlice } from "@reduxjs/toolkit";
import { getEverythingNews, getTopHeadlinesNews } from "./newsAction";

const initialState = {
	isLoading: true,
	error: null,
	data: null,
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getEverythingNews.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.articles;
		});
		builder.addCase(getEverythingNews.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		});
		builder.addCase(getTopHeadlinesNews.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.data = payload.articles;
		});
		builder.addCase(getTopHeadlinesNews.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload.error;
		});
	},
});

export default newsSlice.reducer;
