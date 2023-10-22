import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTopHeadlinesNews } from "./stores/news/newsAction";
import toast from "react-hot-toast";

const App = () => {
	const dispatch = useDispatch();
	const [data, setData] = useState([]);

	// contoh penggunaan
	const handleGetAllNewsBasedOnCountry = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
				country: "id",
				page: 1,
				pageSize: 10,
			},
		};

		await dispatch(getTopHeadlinesNews({ data })).then((res) => {
			if (res.meta.requestStatus !== "fulfilled") {
				toast.dismiss();
				toast.error(res.payload.response.data.message);
				return;
			}
			setData(res.payload.articles);
		});
	};

	useEffect(() => {
		handleGetAllNewsBasedOnCountry();
	}, []);

	return (
		<div>
			<h1>App</h1>
		</div>
	);
};

export default App;
