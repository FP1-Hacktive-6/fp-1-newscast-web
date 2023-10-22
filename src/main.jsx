import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./stores";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routing/index.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Navbar />
				<Toaster position="top-right" />
				<RouterProvider router={router} />
				<Footer />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
