import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import newsSlice from "./news/newsSlice";
import globalSlice from "./global/globalSlice";

const middlewares = [];
const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	news: newsSlice,
	app: globalSlice,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

if (import.meta.env.DEV) {
	middlewares.push(logger);
}

export const store = configureStore({
	reducer: persistedReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
});

export const persistor = persistStore(store);
