import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEverythingNews } from "../stores/news/newsAction";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import NewsCard from "../components/news-card";

const Covid = () => {
	const dispatch = useDispatch();
	const { isLoading, error, data } = useSelector((state) => state.news);

	// contoh penggunaan
	const handleGetAllNews = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
				q: "covid",
				page: 1,
				pageSize: 12,
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
		handleGetAllNews();
	}, []);

	if (error) {
		return <h1>Opps Error here</h1>;
	}

	return (
		<div className="p-4">
			<h1 className="text-5xl font-bold text-center mb-10">Covid 19 News</h1>
			<div className="w-full p-3 text-justify grid grid-cols-1 gap-2  md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4 aspect-[4/3]">
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					data.map((item, idx) => (
						<NewsCard item={item} key={idx} category="covid 19" />
					))
				)}
			</div>
		</div>
	);
};

export default Covid;
