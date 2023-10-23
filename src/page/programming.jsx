import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getEverythingNews } from "../stores/news/newsAction";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import NewsCard from "../components/news-card";

const Programming = () => {
	const dispatch = useDispatch();
	const { isLoading, error, data } = useSelector((state) => state.news);

	// contoh penggunaan
	const handleGetAllNews = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
				q: "programming",
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
		<div className="p-5">
			<h1 className="text-5xl font-bold text-center mb-10">Programming News</h1>
			<div className="w-full p-3 text-justify grid grid-cols-1 gap-2  md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4 aspect-[4/3]">
				{isLoading
					? "loading"
					: data.map((item, idx) => (
							<NewsCard item={item} key={idx} category="programming" />
					  ))}
			</div>
		</div>
	);
};
export default Programming;
