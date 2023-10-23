import { useSelector } from "react-redux";
import NewsCard from "../components/news-card";

const Saved = () => {
	const { archive_news } = useSelector((state) => state.app);
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{archive_news.map((item, idx) => (
						<NewsCard item={item} category="saved news" key={idx} />
					))}
				</div>
			)}
		</div>
	);
};

export default Saved;
