import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Covid from "../page/covid";
import Programming from "../page/programming";
import Indonesia from "../page/indonesia";
import Saved from "../page/saved";
import Search from "../page/search";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
	{
		path: "/indonesia",
		Component: Indonesia,
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
	{
		path: "/search",
		Component: Search,
	},
]);
