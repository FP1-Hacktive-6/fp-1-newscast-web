import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const getEverythingNews = createAsyncThunk(
	"news/everything",
	async ({ data }, { rejectWithValue }) => {
		try {
			const response = await api.get("/everything", data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getTopHeadlinesNews = createAsyncThunk(
	"news/top-headlines",
	async ({ data }, { rejectWithValue }) => {
		try {
			const response = await api.get("/top-headlines", data);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
