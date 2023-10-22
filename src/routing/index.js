import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Covid from "../page/covid";
import Programming from "../page/programming";
import Saved from "../page/saved";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
	{
		path: "/covid",
		Component: Covid,
	},
	{
		path: "/programming",
		Component: Programming,
	},
	{
		path: "/saved",
		Component: Saved,
	},
]);
