import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Navbar" 
import Home from "./page/homePage"
import Covid_19 from "./page/covid_19"
import Indonesia from "./page/indonesia"
import Progaming from "./page/progaming"
import Save from './page/save'
import Search from "./page/search"
import Footer from "./components/Footer"
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
			<Router>
				<Nav />
					<div className="flex flex-col min-h-screen">
						<div className="flex flex-col flex-wrap gap-5">
							{data.map((item, idx) => (
								<div key={idx}>{item.title}</div>
							))}
						</div>
					</div>
				<Routes>
					<Route exact path='/' element={<Home/>}/>
					<Route path='/covid_19' element={<Covid_19/>}/>
					<Route path='/indonesia' element={<Indonesia/>}/>
					<Route path='/progaming' element={<Progaming/>}/>
					<Route path='/save' element={<Save/>}/>
					<Route path='/search' element={<Search/>}/>
				</Routes>
				<Footer/>
			</Router>
		</div>
		
	);
};

export default App;
