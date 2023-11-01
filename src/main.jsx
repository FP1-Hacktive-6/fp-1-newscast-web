import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "rc-pagination/assets/index.css";
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
				<Toaster position="top-right" />
				<div className="flex flex-col min-h-screen justify-between ">
					<Navbar />
					<main className="w-full md:max-w-7xl mx-auto">
						<RouterProvider router={router} />
					</main>
					<Footer />
				</div>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
