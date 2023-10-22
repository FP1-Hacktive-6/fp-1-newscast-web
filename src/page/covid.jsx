import { useState, useEffect } from "react";
import axios from "axios";
import CovidItem from "./CovidItem";

const Covid = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const response = await axios.get(
				"https://newsapi.org/v2/everything?q=covid&from=2023-09-21&sortBy=relevancy&apiKey=cc9e2825b9e149e9952f9d0068ac7366"
			);
			console.log(response);
			setArticles(response.data.articles);
		};
		getArticles();
	}, []);

	return (
		<div className="mt-20 p-2 ">
			<h1 className="text-5xl font-bold mb-4">Covid-19</h1>
			<div className=" text-background  w-full text-justify grid grid-cols-1 gap-2  md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4    aspect-[4/3]   ">
				{articles.map((article) => {
					return (
						<CovidItem
							key={article.id}
							title={article.title}
							description={article.description}
							url={article.url}
							urlToImage={article.urlToImage}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Covid;
