import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEverythingNews } from "../stores/news/newsAction";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import NewsCard from "../components/news-card";
import Loading from "../components/loading";
import Pagination from "rc-pagination";

const Programming = () => {
	const dispatch = useDispatch();
	const { isLoading, error, data, totalResults } = useSelector(
		(state) => state.news
	);
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = totalResults;
	const pageSize = 10;

	// contoh penggunaan
	const handleGetAllNews = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
				q: "programming",
				page: currentPage,
				pageSize,
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

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	useEffect(() => {
		handleGetAllNews();
	}, [currentPage]);

	if (error) {
		return <h1>Opps Error here</h1>;
	}

	return (
		<div className="p-5">
			<h1 className="text-5xl font-bold text-center mb-10">Programming News</h1>

			{isLoading ? (
				<div className="flex justify-center">
					<Loading />
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2  gap-5">
					{data.length === 0 ? (
						<div className="text-center">
							<h1>No Item Found</h1>
						</div>
					) : (
						data.map((item, idx) => (
							<NewsCard item={item} category="Programming" key={idx} />
						))
					)}
					<div className="mt-5">
						<Pagination
							current={currentPage}
							total={totalItems}
							pageSize={pageSize}
							onChange={handlePageChange}
						/>
					</div>
				</div>
			)}
		</div>
	);
};
export default Programming;
