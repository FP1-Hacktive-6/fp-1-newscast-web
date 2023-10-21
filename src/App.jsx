import Nav from "./components/Navbar"
import Nav from "./page/Nav"
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
			<Nav />
			<div className="flex flex-col min-h-screen">
				<div className="flex flex-col flex-wrap gap-5">
					{data.map((item, idx) => (
						<div key={idx}>{item.title}</div>
					))}
				</div>
			</div>
		</div>
	);
};


export default App
