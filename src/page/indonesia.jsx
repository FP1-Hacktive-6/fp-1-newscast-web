
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getEverythingNews, getTopHeadlinesNews} from "../stores/news/newsAction";
import toast from "react-hot-toast";

const indonesia = () => {
    const dispatch = useDispatch();
	const [data, setData] = useState([]);

	// contoh penggunaan
	const handleGetAllNewsBasedOnCountry = async () => {
		// data params bisa dimasukin disini ( check available params di doc newsapi)
		const data = {
			params: {
                country:"id",
				page: 1,
				pageSize: 12,
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
        <div className='p-5'>
        <div className="w-full p-3 text-justify grid grid-cols-1 gap-2  md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4 aspect-[4/3]">
        {data.map((item, idx) => (
		<div key={idx}>
        <div className="relative m-0 h-full w-full max-w-[48rem] flex flex-row rounded-xl bg-slate-800 bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={item.urlToImage}
            alt={item.urlToImage}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-white antialiased">
            Indonesia
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-white antialiased">
            {item.title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-300 antialiased">
            {item.description}
          </p>
          <a className="inline-block" href={item.url}>
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-slate-50 active:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
            </a>
        </div>
      </div>              
	</div>
    ))}
	</div>    
        </div>
    )
}
export default indonesia;