import Nav from "./components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopHeadlinesNews } from "./stores/news/newsAction";
import toast from "react-hot-toast";

const App = () => {
	const dispatch = useDispatch();
	const { isLoading, error, data } = useSelector((state) => state.news);

	// contoh penggunaan
	const handleGetAllNewsBasedOnCountry = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
				country: "us",
				page: 1,
				pageSize: 10,
				q: "us",
			},
		};

		await dispatch(getTopHeadlinesNews({ data })).then((res) => {
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
		<div>
			<Nav />
			<div className="flex flex-col min-h-screen">
				<div className="flex flex-col flex-wrap gap-5">
					{data.map((item, idx) => (
						<div key={idx}>{item.title}</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default App;
