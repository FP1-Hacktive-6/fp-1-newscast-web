import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	archive_news: [],
	error: null,
};

const globalSlice = createSlice({
	name: "global",
	initialState,
	reducers: {
		saveNews: (state, { payload }) => {
			const isNewsExist = state.archive_news.find(
				(item) => item.title.toLowerCase() === payload.title.toLowerCase()
			);
			if (isNewsExist) {
				state.error = "News is already in archive";
			} else {
				state.archive_news = [...state.archive_news, payload];
				state.error = null;
			}
		},
		unsaveNews: (state, { payload }) => {
			state.archive_news = state.archive_news.filter(
				(news) => news.title.toLowerCase() !== payload.toLowerCase()
			);
			state.error = null;
		},
	},
});

export const { saveNews, unsaveNews } = globalSlice.actions;
export default globalSlice.reducer;
