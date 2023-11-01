import { useSelector } from "react-redux";
import NewsCard from "../components/news-card";
import Pagination from "rc-pagination";
import { useState } from "react";

const Saved = () => {
	const { archive_news } = useSelector((state) => state.app);
	const [currentPage, setCurrentPage] = useState(1);
	const totalItems = archive_news.length;
	const pageSize = 10;

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const displayedNews = archive_news.slice(startIndex, endIndex);

	const handlePageChange = (page) => {
		setCurrentPage(page);
	};

	return (
		<div className="p-5">
			<h1 className="text-center text-5xl font-bold mb-5">
				Saved news appears here
			</h1>
			{archive_news.length === 0 ? (
				<div className="text-center">
					<h1 className="text-3xl font-bold">No News Saved</h1>
				</div>
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2  gap-5">
						{displayedNews.map((item, idx) => (
							<NewsCard item={item} category="saved news" key={idx} />
						))}
					</div>
					<div className="mt-5">
						<Pagination
							current={currentPage}
							total={totalItems}
							pageSize={pageSize}
							onChange={handlePageChange}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Saved;
