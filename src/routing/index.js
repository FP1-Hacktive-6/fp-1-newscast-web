import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import covid_19 from "../page/covid_19";
import Programming from "../page/programming";
import Indonesia from "../page/indonesia";
import Saved from "../page/saved";

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
		path: "/covid_19",
		Component: covid_19,
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
