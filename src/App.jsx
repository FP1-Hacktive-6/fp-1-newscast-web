import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEverythingNews } from "./stores/news/newsAction";
import toast from "react-hot-toast";
import NewsCard from "./components/news-card";

const App = () => {
	const dispatch = useDispatch();
	const { isLoading, error, data } = useSelector((state) => state.news);

	// contoh penggunaan
	const handleGetAllNewsBasedOnCountry = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
				page: 1,
				pageSize: 10,
				q: "us",
			},
		};

		await dispatch(getEverythingNews({ data })).then((res) => {
			if (res.meta.requestStatus !== "fulfilled") {
				toast.dismiss();
				toast.error(res.payload.response.data.message);
				return;
			}
		});
	};

	useEffect(() => {
		handleGetAllNewsBasedOnCountry();
	}, []);

	if (error) {
		return <h1>Opps Error here</h1>;
	}

	return (
		<div className="p-5">
			<h1 className="text-5xl font-bold text-center mb-10">Showing All News</h1>
			{isLoading ? (
				<div className="text-center">
					<h1 className="text-3xl font-bold">Loading...</h1>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{data.map((item, idx) => (
						<NewsCard item={item} category="Top headlines" key={idx} />
					))}
				</div>
			)}
		</div>
	);
};

export default App;
