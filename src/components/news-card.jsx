/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { saveNews, unsaveNews } from "../stores/global/globalSlice";

const NewsCard = ({ item, category }) => {
	const dispatch = useDispatch();
	const { archive_news } = useSelector((state) => state.app);

	const handleSave = (item) => {
		dispatch(saveNews(item));
	};
	const handleUnSave = (item) => dispatch(unsaveNews(item));

	const isSavedNews = archive_news.find((news) => news.title === item.title);

	return (
		<div className="relative m-0 h-full lg:h-[500px] w-full max-w-[48rem] flex flex-row rounded-xl bg-slate-800 bg-clip-border text-gray-700 shadow-md">
			<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 flex justify-center items-center">
				{item.urlToImage ? (
					<img
						src={item.urlToImage}
						alt={item.urlToImage}
						className="h-full w-full object-cover"
					/>
				) : (
					<h1>Picture Not Available</h1>
				)}
			</div>
			<div className="p-6">
				<h6 className=" mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-white antialiased">
					{category}
				</h6>
				<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
					{item.title}
				</h4>
				<p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-300 antialiased line-clamp-5 ">
					{item.description}
				</p>
				<div className="flex flex-col lg:flex-row gap-5">
					<a className="inline-block flex-1" href={item.url}>
						<button
							className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110  duration-300 ... flex select-none items-center gap-2 rounded-lg m-2 py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 hover:bg-slate-50 active:bg-gray-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button">
							Read More
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="2"
								stroke="currentColor"
								aria-hidden="true"
								className="h-4 w-4">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
							</svg>
						</button>
					</a>
					<button
						className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-90 flex select-none bg-black items-center gap-2 rounded-lg py-3 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-red-500  hover:bg-slate-50 active:bg-black disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
						type="button"
						onClick={() =>
							isSavedNews ? handleUnSave(item) : handleSave(item)
						}>
						{isSavedNews ? "unsave" : "save"}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="2"
							stroke="currentColor"
							aria-hidden="true"
							className="h-4 w-4">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
