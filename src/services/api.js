import axios from "axios";

const api = axios.create({
	baseURL: import.meta.env.VITE_NEWS_BASEURL,
	params: {
		apiKey: import.meta.env.VITE_NEWS_APIKEY,
	},
});

export default api;
